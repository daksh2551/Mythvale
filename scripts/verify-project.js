const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const fail = message => { console.error('FAIL:', message); process.exitCode = 1; };
const pass = message => console.log('PASS:', message);
const gamePath = path.join(root, 'game', 'index.html');
const webPath = path.join(root, 'www', 'index.html');
const game = fs.readFileSync(gamePath, 'utf8');
const web = fs.readFileSync(webPath, 'utf8');
if (game === web) pass('game/index.html and www/index.html are identical'); else fail('game and www HTML differ');
for (const asset of ['game/sky_castle.png', 'www/sky_castle.png', 'package.json', 'codemagic.yaml']) {
  if (fs.existsSync(path.join(root, asset))) pass(`${asset} exists`); else fail(`${asset} missing`);
}
const scripts = [...game.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
if (!scripts.length) fail('No inline JavaScript found');
for (let i = 0; i < scripts.length; i++) {
  try { new vm.Script(scripts[i], { filename: `game/index.html:inline-${i + 1}.js` }); pass(`inline JavaScript ${i + 1} parses`); }
  catch (e) { fail(`inline JavaScript ${i + 1}: ${e.message}`); }
}
const required = ['function restoreEmeraldCurrency', 'function saveProgress', 'function loadProgress', 'function updateArcaneSkillTree', 'WORLD ATLAS', 'QUEST JOURNAL', 'REALM SIGIL'];
for (const marker of required) game.includes(marker) ? pass(`feature marker present: ${marker}`) : fail(`feature marker missing: ${marker}`);
try {
  const match = game.match(/function restoreEmeraldCurrency\(savedCount,collectedPickupCount\)\{[^}]+\}/);
  if (!match) throw new Error('restoreEmeraldCurrency helper not found');
  const context = {};
  vm.runInNewContext(match[0] + ';this.restoreEmeraldCurrency=restoreEmeraldCurrency;', context);
  const restore = context.restoreEmeraldCurrency;
  const tests = [
    [7, 12, 7, 'purchased currency stays spent after reload'],
    [0, 12, 0, 'zero saved currency remains zero'],
    [undefined, 4, 4, 'legacy saves fall back to collected pickup count'],
    [-3, 4, 0, 'negative currency is clamped to zero'],
    [2.9, 4, 2, 'currency is restored as a whole number']
  ];
  for (const [saved, pickups, expected, name] of tests) {
    const actual = restore(saved, pickups);
    if (actual === expected) pass(`currency regression: ${name}`); else fail(`currency regression: ${name} (expected ${expected}, got ${actual})`);
  }
} catch (e) { fail(`currency regression tests: ${e.message}`); }
if (process.exitCode) process.exit(process.exitCode);
console.log('All project verification checks passed.');

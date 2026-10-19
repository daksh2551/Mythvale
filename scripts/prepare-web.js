const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'game');
const dest = path.join(__dirname, '..', 'www');
if (!fs.existsSync(path.join(src, 'index.html'))) throw new Error('game/index.html not found');
fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true });
console.log('Copied game files into www/ for Capacitor.');

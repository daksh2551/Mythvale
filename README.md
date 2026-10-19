# Mythvale: Emerald Ruins — Multi-Stage Progression Upgrade

Original fantasy side-scrolling action-platformer prototype with two connected realms: Emerald Ruins and Frostfall Keep. Adds a longer world, new enemy placements, a tougher final Dusk Warden, additional emerald collectibles, checkpoints, and persistent local progress.

## Build
- `npm install`
- `npm run build`

Game source: `game/index.html`; `npm run build` copies it into `www/`.
Android test build: connect the repository to Codemagic and run `mythvale-android-test-apk`.

This is a prototype; the new stage has not been device-tested yet. Progress is stored locally on the device and may be lost on uninstall.


## Grand Adventure expansion
The game world is now 16,800 world units across four connected realms: Emerald Ruins, Frostfall Keep, Sunken Citadel, and Shadowfall Peak. It adds varied platform spacing and heights, spike traps, 4 realm bosses, expanded enemy patrols, and hidden emerald routes. This is original gameplay inspired by broad platform-adventure conventions, not a copy of Swordigo assets or level layouts.


## Next gameplay upgrade
- Eight moving platforms with smooth horizontal and vertical motion and player carry while standing on them.
- Nine timed spike traps that cycle between active and inactive; inactive traps show a warning strip.
- Six elevated secret ledges with distinct mint highlights to reward exploration.
- Existing four-realm world, combat, save progress, landscape Android setup and Codemagic workflow retained.

This is a source upgrade ZIP, not a tested APK. Build and device gameplay have not yet been validated.


## Checkpoints, dash and relic update
- Realm-gate checkpoints save the player position as you progress.
- Dash: press Shift on keyboard or the ➤ touch button on mobile; it has a short cooldown.
- HUD shows dash readiness. This is an incremental source upgrade; gameplay has not been device-tested.


Latest optional quest upgrade: collect 12 Ancient Spirit Seals across the four realms; every third seal restores one vitality point.


Latest upgrade: Multi-phase Guardian Battles adds telegraphed guardian slams, phase-dependent attack ranges and pacing, and clearer boss phase indicators.


Latest upgrade: Arcane Burst player magic. Press K/C or tap ⚡ to fire a ranged spell. Mana regenerates over time.


Latest batch: Equipment & Progression panel. See `docs/equipment-progression-upgrade.md`.


Latest upgrade: see `docs/combat-equipment-integration-upgrade.md` for purchasable sword and armor upgrades.


Latest source upgrade: Enemy loot drops now persist per mode and both melee and magic kills use the same loot helper. See `docs/enemy-loot-persistence-upgrade.md`.


## Latest upgrade: World Atlas
See `docs/realm-atlas-upgrade.md` for the pause-menu atlas and verification scope.


Latest upgrade: Guardian Bounty Rewards. Story guardians grant one-time emerald, Arcane XP, vitality, and mana rewards; claims persist in save version 3 and appear in the Quest Journal. See `docs/guardian-bounty-rewards-upgrade.md`.


## Latest upgrade: Arcane Skill Tree

Open Pause → **Arcane Skill Tree**. Arcane level-ups award skill points for Mana Efficiency, Spell Power, and Quickcast. These passive upgrades affect spell cost, projectile damage, and cooldown and are saved with each mode. See `docs/arcane-skill-tree-upgrade.md`.


## Latest upgrade: Realm Sigil Progression
Story guardian victories can award one unique sigil per realm. First-time sigils grant an Arcane skill point and are tracked in the Equipment screen and Story & Quest Journal.

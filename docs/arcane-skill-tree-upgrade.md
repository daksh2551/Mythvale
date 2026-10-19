# Arcane Skill Tree Upgrade

Added a dedicated Arcane Skill Tree screen reachable from the pause menu. Arcane level-ups award skill points; older saves receive a compatibility allowance based on their saved magic level. Three passive branches have two ranks each:

- **Mana Efficiency:** reduces spell mana cost by 12% per rank.
- **Spell Power:** adds 1 damage per rank to arcane projectiles.
- **Quickcast:** reduces spell cooldown by 12% per rank.

Skill points, ranks, Arcane XP, and magic level are saved per existing game-mode save. The upgrade does not replace the existing four spell tiers.

## Verification

- JavaScript syntax: passed with Node.js `--check`.
- `npm run build`: passed; Capacitor web assets regenerated from `game/`.
- `game/index.html` and `www/index.html`: synchronized.
- Android APK build and real-device gameplay: not run.

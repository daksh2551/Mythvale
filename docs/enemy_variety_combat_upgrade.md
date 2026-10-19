# Mythvale — Enemy Variety & Combat Upgrade

## Implemented
- Elite champions telegraph a charge when the player is within 300 world units.
- A gold warning ring and `CHARGE!` cue provide a reaction window before the charge.
- Elites perform a short, faster charge, then return to patrol and wait before attempting it again.
- The behavior uses the existing enemy collision/damage system and does not alter the save format or ordinary enemy AI.
- `game/index.html` and `www/index.html` are synchronized.

## Verification
- Inline JavaScript syntax check: PASS (`node --check` on extracted script).
- Web preparation/build script: PASS (`npm run build`).
- Android APK build and actual phone gameplay: NOT TESTED in this batch.

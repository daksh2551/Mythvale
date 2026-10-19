# Mythvale — Boss Arc Volley Upgrade

## Changes
- Added a distinct, telegraphed Arc Volley attack for boss enemies.
- Bosses display an `ARC VOLLEY!` warning before launching the projectile fan.
- Standard boss phase uses five projectiles; final phase uses seven with a wider spread and higher speed.
- The attack uses the existing enemy projectile update/collision/render pipeline and existing phase thresholds.
- Kept the existing boss slam, phase transitions, and normal projectile attacks intact.

## Validation
- JavaScript syntax check: run `node check.js` from the project root.
- Web preparation: run `npm run build` to regenerate `www/` from `game/`.
- ZIP structure: verified after packaging.
- Android APK and real-device gameplay: not run in this environment.

This is an original mechanic and does not use Swordigo code, art, or level data.

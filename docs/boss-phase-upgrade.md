# Mythvale — Boss Phase Upgrade

## Implemented
- Boss phases now trigger from remaining-health percentages rather than fixed low HP values. Phase II begins at 60% health and the final phase begins at 25%, so bosses with different maximum health values all use the phase system.
- Phase transitions show an explicit on-screen cue, a visual burst, and a controlled camera shake.
- Existing boss slam, movement, and projectile patterns continue to scale with the phase value.
- Boss maximum health is initialized before calculating the phase ratio, preventing the first hit from changing the phase baseline.
- Synchronized `game/index.html` and `www/index.html`.

## Verification
- Inline JavaScript syntax: checked with Node after extracting the script.
- `npm run build`: checked.
- ZIP integrity: checked.
- Android APK build and phone gameplay: not run in this batch.

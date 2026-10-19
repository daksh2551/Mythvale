# Combat Feedback Upgrade

Based on the latest supplied Mythvale project snapshot.

## Changes
- Melee and magic hits now show floating damage values.
- Ordinary enemies show a brief health bar after being hit, while critically wounded enemies keep their low-health bar.
- Enemy maximum HP is captured before the first hit so the bar does not incorrectly treat post-hit HP as full health.
- Existing elite and boss health displays remain in place.
- `game/index.html` and `www/index.html` are synchronized.

## Verification
- JavaScript syntax check: run with `node check.js` / project check script.
- Project build script: run `npm run build` where dependencies are installed.
- Android APK and real-device gameplay: not tested in this environment.

# Mythvale: Emerald Ruins — Android wrapper setup

The game remains in `game/`. `scripts/prepare-web.js` copies the game and its local assets into `www/`, which Capacitor packages into Android.

Build locally/cloud: `npm install`, `npm run build`, `npx cap add android` (first time), `npx cap sync android`, then `cd android && ./gradlew assembleDebug`.

For a mobile-only workflow, use the included `codemagic.yaml` to build a test APK in Codemagic.

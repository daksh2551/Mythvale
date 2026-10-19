# Mythvale: Emerald Ruins — Android wrapper setup

The game remains in `game/`. `scripts/prepare-web.js` copies the game and its local assets into `www/`, which Capacitor packages into Android.

Build locally/cloud: `npm install`, `npm run build`, `npx cap add android` (first time), `npx cap sync android`, then `cd android && ./gradlew assembleDebug`.

For a mobile-only workflow, use the included `codemagic.yaml` to build a test APK in Codemagic.


## Grand Adventure expansion
The game world is now 16,800 world units across four connected realms: Emerald Ruins, Frostfall Keep, Sunken Citadel, and Shadowfall Peak. It adds varied platform spacing and heights, spike traps, 4 realm bosses, expanded enemy patrols, and hidden emerald routes. This is original gameplay inspired by broad platform-adventure conventions, not a copy of Swordigo assets or level layouts.

# Mythvale Core Stability Upgrade

Baseline: `Mythvale_Mode_Specific_Saves_Progress_Upgrade.zip`, confirmed by the project owner as the latest built game.

## Changes made

1. Fixed treasure-cache persistence initialization: `openedCaches` now starts as an empty list of opened cache IDs rather than a list of unrelated objects.
2. Made the frame delta-time calculation clamp unusually long frames to 50 ms, reducing extreme physics jumps after stalls.
3. Reset held keyboard/touch input and refresh the frame clock when the document is backgrounded/foregrounded, reducing stuck movement and large resume-frame jumps.
4. Removed destructive save deletion from the `loadProgress` error handler. Malformed stored data will no longer automatically delete the Story save key.
5. Regenerated `www/` from `game/` using the project's existing build script.

## Validation performed

- `node --check check.js`: passed.
- Extracted inline JavaScript from `game/index.html` and ran `node --check`: passed.
- `npm run build`: passed.
- `game/index.html` and `www/index.html` byte comparison: passed.
- `game/sky_castle.png` and `www/sky_castle.png` byte comparison: passed.
- Android APK build and device gameplay test: not run in this environment. These changes are implemented but not yet device-verified.

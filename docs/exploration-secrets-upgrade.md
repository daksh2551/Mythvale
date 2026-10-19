# Exploration & Secret Cache Upgrade

## Changes
- Added a one-time `HIDDEN CACHE NEARBY` world-space hint when the player approaches an unopened treasure cache. The hint does not repeatedly spam every frame.
- Added persistent HUD counts for opened treasure caches (5 total) and discovered crystal caches (6 total).
- Preserved existing cache rewards, proximity collection, save fields, and the original route/platform systems.
- Synchronized `game/index.html` and `www/index.html`.

## Verification
- JavaScript syntax check: passed.
- `npm run build` web preparation: passed.
- Source/web asset identity: passed.
- ZIP integrity: passed.
- Android APK build and on-device gameplay: not run; these remain unverified.

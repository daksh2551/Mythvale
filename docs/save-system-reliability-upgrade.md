# Mythvale Save-System Reliability Upgrade

Based on the previous Mythvale Pause Menu Upgrade snapshot.

## Changes
- Story, Arena, and Dungeon load only their own save keys; a missing mode save no longer silently loads Story progress.
- Each successful save keeps the previous parseable snapshot as a same-mode backup.
- Save payloads include a version and timestamp for future migration/debugging.
- Existing older save payloads remain readable because the loader still accepts the existing fields.
- `game/index.html` and `www/index.html` are synchronized.

## Verification
JavaScript syntax and project build script checks are run on this package. These checks do not prove Android runtime behavior or device performance.

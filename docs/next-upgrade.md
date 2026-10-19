# Mythvale: Emerald Ruins — Progress & Boss Upgrade

This update adds:
- Local-device progress saving with browser `localStorage`.
- Safe-platform checkpoint saving and respawn at the last saved checkpoint.
- Regular enemy defeats saved across refreshes.
- A three-stage Dusk Warden boss: its movement speed and lunge frequency increase at 4 HP and 2 HP, with a visual aura change.
- A brief `PROGRESS SAVED` notice when a save is written.

## Test on phone
1. Extract the ZIP.
2. Open `Mythvale_Project/game/index.html` in a modern browser (best tested through a local/static web server; some file viewers restrict localStorage).
3. Start the game, move past a checkpoint, and refresh the page. The saved checkpoint should be restored.
4. Damage the Dusk Warden; its behavior should intensify as its health drops.

## Current limitations
This is still a browser-based HTML prototype, not an Android APK/AAB. Saves are local to the same browser/device and may be cleared by browser data cleanup. It does not yet include cloud saves, a multi-level campaign, or a full Android build configuration.

# Mythvale: Emerald Ruins — Multi-Stage Progression Upgrade

Original fantasy side-scrolling action-platformer prototype with two connected realms: Emerald Ruins and Frostfall Keep. Adds a longer world, new enemy placements, a tougher final Dusk Warden, additional emerald collectibles, checkpoints, and persistent local progress.

## Build
- `npm install`
- `npm run build`

Game source: `game/index.html`; `npm run build` copies it into `www/`.
Android test build: connect the repository to Codemagic and run `mythvale-android-test-apk`.

This is a prototype; the new stage has not been device-tested yet. Progress is stored locally on the device and may be lost on uninstall.


## Grand Adventure expansion
The game world is now 16,800 world units across four connected realms: Emerald Ruins, Frostfall Keep, Sunken Citadel, and Shadowfall Peak. It adds varied platform spacing and heights, spike traps, 4 realm bosses, expanded enemy patrols, and hidden emerald routes. This is original gameplay inspired by broad platform-adventure conventions, not a copy of Swordigo assets or level layouts.


## Next gameplay upgrade
- Eight moving platforms with smooth horizontal and vertical motion and player carry while standing on them.
- Nine timed spike traps that cycle between active and inactive; inactive traps show a warning strip.
- Six elevated secret ledges with distinct mint highlights to reward exploration.
- Existing four-realm world, combat, save progress, landscape Android setup and Codemagic workflow retained.

This is a source upgrade ZIP, not a tested APK. Build and device gameplay have not yet been validated.


## Checkpoints, dash and relic update
- Realm-gate checkpoints save the player position as you progress.
- Dash: press Shift on keyboard or the ➤ touch button on mobile; it has a short cooldown.
- HUD shows dash readiness. This is an incremental source upgrade; gameplay has not been device-tested.


Latest optional quest upgrade: collect 12 Ancient Spirit Seals across the four realms; every third seal restores one vitality point.


Latest upgrade: Multi-phase Guardian Battles adds telegraphed guardian slams, phase-dependent attack ranges and pacing, and clearer boss phase indicators.


## Private audio integration experiment (not cleared for release)
- Added seven unchanged WAV files from the user-provided Swordigo APK to `game/assets/audio/` and `www/assets/audio/`.
- Connected jump, sword swing, damage, falling/death, emerald pickup, and start-menu click events to those sounds. Audio is initialized after the player taps Begin Adventure for mobile browser compatibility.
- These are reference assets from a proprietary game. Do not distribute or publish this build with them unless you have permission; replace them with original or properly licensed audio before release.
- This integration is source-level only and has not been device-tested.


## Swordigo reference assets (private prototype only)
Seven audio effects are connected to gameplay. The Swordigo `.POD`, `.PVR`, `.scene`, and `.fnt` files are catalogued in `docs/swordigo-asset-registry.json`, but the current 2D Canvas renderer cannot load those binary formats directly. See `docs/swordigo-asset-integration-status.md`. Do not include proprietary reference assets in public builds without permission.


## Optional 3D character mode
An experimental Three.js renderer can be enabled with the top-right `3D MODEL` button. It uses an original procedural low-poly character by default and can load a licensed glTF 2.0 binary at `game/assets/models/player.glb`. The existing 2D physics/gameplay remains the default and fallback. Details and limitations: `docs/3d-renderer-upgrade.md`.

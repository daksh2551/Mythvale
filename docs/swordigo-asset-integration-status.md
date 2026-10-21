# Swordigo reference asset integration status

## What is actually connected
The seven WAV files listed in `runtime_integrated_audio` are copied into Mythvale's `game/assets/audio/` and `www/assets/audio/` folders and wired to current gameplay events. The current game remains a 2D HTML Canvas game.

## What is catalogued but not yet runtime-usable
The reference-only directory contains `.POD` 3D model/animation files, `.PVR` texture files, `.scene` scene files, and `.fnt` font metadata. The JSON registry indexes these files and groups likely candidates by filename. These formats belong to Swordigo's proprietary asset pipeline and are not standard browser assets; adding filenames to JavaScript does not render them. Direct use requires a compatible importer/decoder and a 3D runtime/rendering path, plus a careful conversion pass. The current renderer has no such importer, so I have deliberately not hooked these binaries into the live game in a way that could cause crashes or a blank screen.

## Important licensing warning
These assets came from Swordigo and should be treated as copyrighted. Keep the reference directory private and excluded from public/Google Play builds unless you have permission or a licence. The safest release path is to use the registry as a technical reference and replace assets with original or properly licensed assets.

## Next implementation gate
Before replacing the current renderer, create a small isolated conversion test for one model + its texture + one animation, verify it visually in a browser, and only then migrate any Mythvale scene. Do not replace `index.html` wholesale with the binary assets.

# Mythvale optional 3D renderer

- Added an optional Three.js WebGL character layer; the existing 2D game remains the default and remains playable if WebGL or the CDN is unavailable.
- Added a top-right `3D MODEL` toggle. The 3D character follows the 2D player's position, facing, and basic running motion.
- Added an original procedural low-poly character as the default 3D model.
- Added GLB model loading from `assets/models/player.glb` for user-owned or properly licensed glTF 2.0 assets.
- `npm run build` copies the new model folder into `www`.

## Current limitations

This is a 2.5D/2D-physics hybrid, not a full 3D gameplay conversion. Collision, platforms, traps, and level progression still use the existing 2D physics and drawing. The optional renderer currently replaces the player sprite only. Enemy, environment, and scene model loading are not wired yet. Three.js is loaded from jsDelivr, so the optional 3D mode requires internet access on first load unless Three.js is bundled locally. If it fails, the game falls back to its original 2D renderer.

Swordigo `.POD`, `.PVR`, `.scene`, and `.fnt` files are not directly compatible with glTF/Three.js. This upgrade does not copy proprietary Swordigo assets into the runtime path or claim those files have been converted. Use only authorized models/textures converted to `.glb`.

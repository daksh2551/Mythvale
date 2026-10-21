MYTHVALE 3D MODEL SLOT

The optional Three.js renderer can load a glTF 2.0 binary model from:
  assets/models/player.glb

Place the model here only if you own it or have redistribution/use rights. The renderer uses an original procedural low-poly hero if the file is absent. For reliable mobile performance, target <= 20k triangles, 1-2 materials, 1K textures, and a model facing +X or -Z (adjust orientation in the model if needed). Animation clips are not yet wired to the game state; the procedural fallback animates running limbs.

Swordigo .POD model files and .PVR textures are proprietary game-engine formats and are NOT directly supported by Three.js. Convert only with permission and preserve licenses. The Swordigo reference folder is excluded from this model loader. Export authorized assets to GLB, then name the player model player.glb.

# Mythvale technical audit — prototype baseline

- Runtime: one self-contained HTML5 Canvas game, vanilla JavaScript, no runtime libraries.
- Rendering: 960x540 logical canvas scaled to device pixel ratio (capped at 2), with camera follow and parallax background.
- Input: keyboard plus Pointer Events for mobile buttons.
- Physics: frame-delta-based horizontal movement, gravity, jump and platform landing checks.
- Combat: timed melee swing, proximity hit checks, enemy health, player health, hit particles and invulnerability window.
- Level: fixed platform layout across a 4,200-unit world, enemy patrol ranges, checkpoint progression, final Warden.
- Assets: original illustrated background `game/sky_castle.png`; characters, enemies, ruins and effects are procedurally drawn in the game code. No Swordigo binaries/assets/source are bundled.
- Known limitations: no Android wrapper/build files in this prototype; no persistent save system; collision and difficulty need further playtesting; `file://` restrictions in some browsers can prevent image loading, though a procedural sky fallback is included.

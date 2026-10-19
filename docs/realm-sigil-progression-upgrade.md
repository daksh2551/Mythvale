# Realm Sigil Progression Upgrade

## Implemented
- Story guardian victories now award one unique realm sigil per realm.
- First-time sigil collection grants one Arcane skill point.
- Sigil collection is persisted in the active mode save and restored compatibly; older saves start with an empty sigil collection.
- Equipment & Progression displays sigil count and collected realm names.
- Story & Quest Journal shows each of the five sigils and its claimed/locked state.
- Existing guardian emerald, Arcane XP, vitality, and mana rewards remain.
- `game/index.html` and `www/index.html` are synchronized.

## Validation
- JavaScript syntax checked with Node.js.
- Web preparation script run.
- ZIP integrity checked.
- This is not an Android APK; Android build and gameplay on a device still require testing.

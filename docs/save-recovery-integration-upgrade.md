# Mythvale Save-Recovery Integration Upgrade

## What changed
- Fixed save recovery when the primary local save exists but contains malformed JSON.
- The loader now tries the primary save first, then attempts the backup if the primary cannot be parsed.
- Rejects non-object JSON payloads instead of treating arrays as save records.
- Kept `game/index.html` and `www/index.html` identical.
- No gameplay content or balance was intentionally changed.

## Why this matters
The previous loader only read the backup when the primary key was missing. If the primary key existed but was corrupted, parsing failed and the backup was never tried. This change makes the documented recovery behavior real.

## Validation performed
- JavaScript syntax check: pending packaging validation below.
- Web preparation script: run against extracted project.
- Source synchronization: checked byte-for-byte.
- ZIP integrity: checked.
- Android build/device gameplay: not performed.

## Integration audit notes
- This project remains a single HTML Canvas game with localStorage saves; this does not add cloud saves.
- Mode saves are local to the device/browser storage.
- Android APK build and gameplay testing are still required before claiming runtime verification.
- The ZIP does not automatically update GitHub or an installed APK.

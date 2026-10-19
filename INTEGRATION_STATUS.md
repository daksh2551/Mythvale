# Mythvale Integration Status — Consolidated Candidate

## Fix in this batch

Equipment purchases deduct emeralds, but the previous loader reconstructed `emeraldCount` from collected pickup IDs. That could restore already-spent currency after a reload. The loader now restores the saved currency balance; older saves without that field fall back to the collected-pickup count. Negative values are clamped to zero and values are kept integral.

## Automated checks

Run `npm run build` and `npm run verify`. The verification script checks source synchronization, required project assets/configuration, inline JavaScript syntax, core progression markers, and regression cases for emerald balance restoration.

## Not yet verified

- Android APK compilation (requires the Codemagic workflow or a configured Android toolchain).
- Actual touch controls, combat, boss transitions, mode isolation, save recovery, and performance on a physical Android device.
- Cloud saves/account sync are not included; saves remain local.

## Integration note

This ZIP is a consolidated candidate based on the latest available project snapshot. It does not update GitHub or an installed APK automatically. Keep the previous working project as a backup until a successful Android build and gameplay pass.

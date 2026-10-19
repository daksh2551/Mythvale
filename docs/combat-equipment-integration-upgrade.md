# Mythvale Combat & Equipment Integration Upgrade

## Implemented
- Added working Sword upgrades to the Equipment & Progression screen. Costs are 20 emeralds per current sword level; maximum level is 5.
- Added working Guardian Armor upgrades. Costs are 25 emeralds per next armor tier; maximum level is 3.
- Purchases deduct emeralds, update combat stats immediately, show feedback, and save the result using the active mode's save key.
- Sword level already scales melee damage; armor level scales maximum vitality and damage-block chance. The new purchases now provide a direct route to those existing combat effects.
- Buttons show current prices, disable when unaffordable or maxed, and refresh after purchases.
- Both `game/index.html` and `www/index.html` were synchronized.

## Verification
- Inline JavaScript syntax check: performed after patch.
- Source synchronization: verified.
- ZIP integrity: verified.
- Android APK build and in-game device testing: not performed.

## Notes
- Emeralds are local to the current game's save and are not real-money purchases.
- This is a source project ZIP; it does not update GitHub or the installed APK automatically.

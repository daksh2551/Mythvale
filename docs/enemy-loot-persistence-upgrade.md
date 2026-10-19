# Mythvale — Enemy Loot Persistence Upgrade

## Changes
- Enemy drops now use one shared reward helper for melee and magic/projectile kills.
- Mode-specific save payloads include sanitized active vitality/mana drops.
- Loading restores only valid, unexpired drops; malformed entries are ignored.
- Collecting or expiring a drop updates the save, preventing stale rewards from reappearing after reload.
- Caps persisted drops at 80 to avoid unbounded save growth.
- `game/index.html` and `www/index.html` are synchronized.

## Verification
JavaScript syntax, project preparation script, ZIP integrity, and source synchronization checked. Android build and real-device gameplay remain unverified.

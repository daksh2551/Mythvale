# Guardian Bounty Rewards Upgrade

This batch extends the Quest Journal project with one-time rewards for story-mode guardian defeats.

- Each story guardian grants 15 emeralds, 6 Arcane XP, up to one vitality recovery, and full mana.
- Rewards are claimed once per guardian using the enemy index as a stable claim key.
- Claim IDs are stored in the active mode save, so loading a save does not grant the same guardian reward repeatedly.
- Arena guardian kills do not grant Story guardian bounties.
- Quest Journal shows the number of story guardian rewards claimed.
- Save payload version is now 3; existing saves without `bossRewardClaims` remain compatible and start with an empty claim list.

Checks run: JavaScript syntax, `npm run build`, source/`www` synchronization, ZIP integrity. Android APK and real-device gameplay still require a separate build/test.

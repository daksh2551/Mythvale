# Movement, Controls, and Trap Fix

- Repositioned the touch action cluster to the lower-right edge and made Jump the large, far-right thumb button.
- Kept movement controls at the lower-left edge.
- Improved swept platform landing detection to reduce falling through platforms during fast frames.
- Changed fall recovery to place the player on a nearby safe platform and reset velocity.
- Kept `game/index.html` and `www/index.html` identical.

This patch has not yet been device-tested; run the project verification and then build a fresh Android test APK.

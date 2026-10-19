# Mythvale Android build — phone-friendly steps

This package prepares the playable HTML game for a Capacitor Android wrapper. It does not contain a prebuilt APK yet.

## Build a test APK with Codemagic
1. Upload the entire `Mythvale_Project` folder contents to a GitHub repository (keep the folder structure; `package.json` and `codemagic.yaml` must be at the repository root).
2. In Codemagic, add/connect that GitHub repository.
3. Select the workflow **Mythvale Android Test APK** from `codemagic.yaml` and start a build.
4. When it succeeds, download the `app-debug.apk` artifact.
5. On your Android phone, open the APK and allow installation from that source if Android asks. Install and test landscape mode, controls, save/checkpoint, and boss fight.

## Important
- This workflow creates a **debug APK for testing**, not a Play Store release.
- Do not upload a debug APK to Google Play. For Play Store publishing, we must configure a signed release build, unique package name/version code, app icon, and Play Console requirements after testing.
- The first build may take several minutes because Codemagic creates the native Android project and downloads Gradle dependencies.
- Package ID currently set to `com.mythvale.emeraldruins`. If you already published an app with a different package ID, this will be a separate app. Package IDs cannot be casually changed after publishing.


## Grand Adventure expansion
The game world is now 16,800 world units across four connected realms: Emerald Ruins, Frostfall Keep, Sunken Citadel, and Shadowfall Peak. It adds varied platform spacing and heights, spike traps, 4 realm bosses, expanded enemy patrols, and hidden emerald routes. This is original gameplay inspired by broad platform-adventure conventions, not a copy of Swordigo assets or level layouts.

# Change Log
All notable changes to the "linesinfostatusbar" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## Release Notes

### 0.1.3
Updated npm package dependency.

### 0.1.2
If `totalDisplayFormat` is empty, the number of selected lines is hidden.
Updated npm package dependencies.

### 0.1.1
Keep release notes only in CHANGELOG.md.
Make extension compatible with MIT license.

### 0.1.0
Improve usabilility and performance. Contributed by Nuri Jung (jnooree).
- Specifies `extensionKind` to prefer running at local extension host, so users don't have to reinstall the extension every time connecting to a remote host.
- Change `activationEvents` to `onStartupFinished` for better startup performance.

### 0.0.9
Refactor code to improve performance.
Fix:
- VSCode needs to be restarted for settings in Error and Warning line count to be effective. Contributed by Akshit Arora (akshit-arora).

### 0.0.8
Show error/warning background when lines of code exceeds set limit. Contributed by Akshit Arora (akshit-arora).

### 0.0.7
Improved README.md.
Added new screenshots.

### 0.0.4
Added extension icon.
Added preview image.
Updated extension title.

### 0.0.2 
Fixed status bar item didn't hide when no editor was active.

### 0.0.1
Initial release.
Adapted from extensions:
- Show Line Count, by MPearon
- Select Line Status Bar, by tomoki1207

# Total Lines Info

Displays document total number of lines and total selected lines count in the status bar.

![Extension showing total lines](./img/screenshot-highlight.png)

Selected lines count is displayed to the right of total lines, and is hidden if no lines are selected.

![Extension showing total lines in status bar](./img/statusbar-screenshot.png)

![Extension showing total lines in status bar](./img/statusbar-screenshot-empty-selection.png)

Selected lines count is compatible with multiselect.

You can customize the status bar output format in the extensions settings. E.g.: `Ln %d`

![Extension settings](./img/settings-screenshot.png)

A number of lines can be set to let the extension display a warning or error background if the file exceeds the given limit. This may be helpful if you want to maintain the size of your code files under control.

Thanks to **akshit-arora** for this contribution.

## Extension Settings

This extension contributes the following settings:

* `linesinfostatusbar.alignment`: left/right, status bar item alignment
* `linesinfostatusbar.totalDisplayFormat`: Display format for the total lines count text, according to https://nodejs.org/api/util.html#util_util_format_format
* `linesinfostatusbar.selectedDisplayFormat`: Display format for the selected lines count text, according to https://nodejs.org/api/util.html#util_util_format_format
* `linesinfostatusbar.statusbarPriority`: number. Higher values means the info text items are displayed more to the left in the status bar
* `linesinfostatusbar.warningAtLineCount`: number. Show status bar background as warning when total lines exceed this number. If set to 0 (default), no change is applied to background.
* `linesinfostatusbar.errorAtLineCount`: number. Show status bar background as error when total lines exceed this number. If set to 0 (default), no change is applied to background.


## Release Notes

### 0.1
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

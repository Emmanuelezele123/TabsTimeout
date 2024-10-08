Tab Timeout Extension

Description

Tab Timeout is a browser extension for Microsoft Edge and Google Chrome that automatically closes inactive tabs after a set period of time. This extension helps manage browser clutter and improve system performance by closing tabs that haven't been used recently.

Select the directory containing the extension files (manifest.json and background.js).

The extension should now appear in your list of installed extensions and start working immediately.
Usage
Once installed, the extension works automatically:

Any tab that remains inactive for 2 minutes will be closed automatically.

The tab you're currently viewing (active tab) will not be closed, regardless of how long it's been open.
Switching to a tab resets its inactivity timer.

Locate the line const TIMEOUT = 2;

Change the number to your desired timeout in minutes.
Save the file and reload the extension in your browser.


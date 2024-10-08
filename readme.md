Tab Timeout Extension
Description
Tab Timeout is a browser extension for Microsoft Edge and Google Chrome that automatically closes inactive tabs after a set period of time. This extension helps manage browser clutter and improve system performance by closing tabs that haven't been used recently.
Features

Automatically closes tabs that have been inactive for 2 minutes
Keeps the currently active tab open, regardless of inactivity
Works seamlessly in the background
Compatible with both Microsoft Edge and Google Chrome

Installation
For Developers (Loading Unpacked Extension)

Clone or download this repository to your local machine.
Open your browser (Microsoft Edge or Google Chrome).
Navigate to the extensions page:

For Edge: edge://extensions/
For Chrome: chrome://extensions/


Enable "Developer mode" (usually a toggle switch in the top right corner).
Click on "Load unpacked" or "Load unpacked extension".
Select the directory containing the extension files (manifest.json and background.js).

The extension should now appear in your list of installed extensions and start working immediately.
Usage
Once installed, the extension works automatically:

Any tab that remains inactive for 2 minutes will be closed automatically.
The tab you're currently viewing (active tab) will not be closed, regardless of how long it's been open.
Switching to a tab resets its inactivity timer.

There's no user interface - the extension runs entirely in the background.
Customization
To change the timeout duration:

Open the background.js file.
Locate the line const TIMEOUT = 2;
Change the number to your desired timeout in minutes.
Save the file and reload the extension in your browser.

Troubleshooting
If the extension doesn't seem to be working:

Make sure it's enabled in your extensions page.
Try disabling and re-enabling the extension.
Ensure that your browser is up to date.

Contributing
Contributions to improve Tab Timeout are welcome. Please feel free to submit pull requests or create issues for bugs and feature requests.
License
MIT License
Disclaimer
This extension will close your tabs automatically. Please ensure you save any important work before leaving a tab inactive. The developers are not responsible for any lost work due to automatically closed tabs.
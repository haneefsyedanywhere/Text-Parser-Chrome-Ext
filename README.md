# Text-Parser-Chrome-Ext
This is a chrome extension which copies the selected text to clipboard.
It contains the following features:
 1. On clicking/selecting a text, the content is copied, if any anchor tag is present in the copied line, those will be copied to your clipboard 
     after the double quotes are converted to single quotes.
 2. On clicking any image, the corresponding details of the image such as src, alt, and prefixes in the mobile image url are copied.
 3. On clicking svg image, the svg code will be copied with double quotes converted to single quotes.


# Steps to follow to add the extension to your chrome
  1. Clone the git repository
  2. Open chrome://extensions/
  3. Click "Load Unpacked" button and select the downloaded repository file.
  4. Extension will be added to your extension.

# Steps to follow to add extension updates to your chrome
  1. Pull the changes to your git repository
  2. Open chrome://extensions/
  3. Search for Text Parser and click on the reload button.

# Steps to Run Extension
  1. Click on the extension icon, it will display a toast message once it start running.
  2. Click on the text you want to parse, a red background colour will be added to the selected text with a toast message.
  3. The text would be copied to your clipboard by now.
  Note: All navigation through anchor tags will be disabled when the extension is running. To close the extension click on the extension icon.

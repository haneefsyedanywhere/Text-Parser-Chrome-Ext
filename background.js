let currentTab = null;

chrome.action.onClicked.addListener((tab) => {
  if (currentTab === null) {
    currentTab = tab;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["index.js"],
    });
  } else {
    chrome.tabs.reload(tab.id);
    currentTab = null;
  }
});

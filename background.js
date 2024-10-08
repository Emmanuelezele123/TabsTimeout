const TIMEOUT = 30; // timeout in minutes

let activeTabId;

function updateAllTabTimers() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id !== activeTabId) {
        updateTabTimer(tab.id);
      }
    });
  });
}

function updateTabTimer(tabId) {
  const alarmName = `tab-${tabId}`;
  chrome.alarms.clear(alarmName);
  chrome.alarms.create(alarmName, { delayInMinutes: TIMEOUT });
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  activeTabId = activeInfo.tabId;
  updateAllTabTimers();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tabId === activeTabId) {
    updateAllTabTimers();
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  const tabId = parseInt(alarm.name.split('-')[1]);
  if (tabId !== activeTabId) {
    chrome.tabs.remove(tabId, () => {
      if (chrome.runtime.lastError) {
        console.log("Tab already closed:", chrome.runtime.lastError.message);
      }
    });
  }
});

// Initial setup
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0]) {
    activeTabId = tabs[0].id;
    updateAllTabTimers();
  }
});
chrome.runtime.onInstalled.addListener(async () => {
  console.log("WiFi AutoFill Extension Installed.");

  let savedData = await chrome.storage.local.get(["wifiPassword", "wifiUsername"]); 

  console.log("Username:", savedData.wifiUsername);
  console.log("Password:", savedData.wifiPassword);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Closing tab");
  if (message.action === "closeTab" && sender.tab) {
    chrome.tabs.remove(sender.tab.id);
  }
});

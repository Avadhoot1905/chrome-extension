chrome.runtime.onInstalled.addListener(async () => {
  console.log("WiFi AutoFill Extension Installed.");

  let savedData = await chrome.storage.local.get(["wifiPassword", "wifiUsername"]); 

  console.log("Username:", savedData.wifiUsername);
  console.log("Password:", savedData.wifiPassword);
});

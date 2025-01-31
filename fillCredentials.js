async function credentials() {
  // Wait for the page to load
  console.log("Working");

  // Move async logic inside the event listener
  if(document.readyState === "loading"){
    console.log("Executing inside");
    await new Promise((resolve) => document.addEventListener("DOMContentLoaded",resolve));
  }

  console.log("Executing after");

  // Get saved data from Chrome storage
  let savedData = await chrome.storage.local.get(["wifiPassword", "wifiUsername"]);

  let usernameField = document.querySelector("input[name='userId']");
  let passwordField = document.querySelector("input[name='password']");

  if (passwordField && savedData.wifiPassword && usernameField && savedData.wifiUsername) {
    usernameField.value = savedData.wifiUsername;
    passwordField.value = savedData.wifiPassword;
    document.querySelector(".loginbutton").click();
    chrome.runtime.sendMessage({ action: "closeTab" });

  }
}

// Call the credentials function
credentials();

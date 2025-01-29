document.getElementById("save").addEventListener("click", async () => {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    console.log(document.getElementById("password"));
    console.log(document.getElementById("username"));

    if (password && username) {
      await chrome.storage.local.set({ wifiPassword: password, wifiUsername: username});
      alert("WiFi credentials saved successfully!");
    }
  });
  
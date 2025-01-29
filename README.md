# **WiFi Auto-Login Chrome Extension**  

This Chrome extension automatically fills in your WiFi credentials on the login page and submits the form, saving you time and effort.  

### **Works only for students of VIT**

## **Features**  
✅ Autofills the WiFi username and password from Chrome's synced storage.  
✅ Automatically submits the form once the credentials are filled.  
✅ Works seamlessly on supported WiFi login portals.  

## **Installation**  

1. **Download or Clone the Repository**  
   ```bash
   git clone [https://github.com/Avadhoot1905/chrome-extension.git](https://github.com/Avadhoot1905/vit-wifi-password-manager)
   cd chrome-extension
   ```

2. **Load the Extension in Chrome**  
   1. Open **Chrome** and go to `chrome://extensions/`.  
   2. Enable **Developer Mode** (top right corner).  
   3. Click **Load Unpacked** and select the extension folder.  

## **Enter Credentials**
   1. Click on the extension icon in the Chrome toolbar to open the credentials input page.
   2. Enter your VIT username and password.
   3. These credentials will be saved in Chrome's local storage for future use.

## **Using the Extension**
Once your credentials are saved, the extension will automatically fill the login form on the VIT WiFi prompt page. The sign-in process will be completed without requiring you to manually enter the credentials each time.

## **Files**
- background.js: Contains the logic to store and retrieve the credentials from Chrome's local storage.
- fillCredentials.js: Handles the automatic filling of the username and password fields when the Pronto login page is detected.
- popup.html: Simple HTML form for entering your username and password.

## **Contributing**
Feel free to fork this repository and submit a pull request for any improvements or bug fixes!

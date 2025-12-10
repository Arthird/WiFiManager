# Wi-Fi Scanner for Android

A lightweight React Native application that scans and displays all available Wi-Fi networks in real time using the device's Wi-Fi capabilities.

> **Note:** This app is **Android-only** due to platform-specific limitations. iOS restricts access to Wi-Fi scanning APIs for privacy and security reasons, making this functionality unavailable on iPhones and iPads.

## 📱 Features

- RScanning of nearby Wi-Fi networks  
- Displays SSID and BSSID
- Simple and intuitive user interface  
- Built with React Native Community modules (include React Native Paper)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arthird/wifi-scanner-android.git
   cd wifi-scanner-android
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Build and run on an Android device or emulator:
   ```bash
   npx react-native run-android
   ```

## ⚠️ Permissions

The app requires the following Android permissions (automatically handled if using a compatible library):

- `ACCESS_FINE_LOCATION`  
- `ACCESS_WIFI_STATE`  
- `CHANGE_WIFI_STATE`  


## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## ❓ Why Android Only?

Apple’s iOS platform **does not allow third-party apps to scan for available Wi-Fi networks** due to strict privacy policies. The necessary APIs (`NEHotspotHelper`, `CNCopyCurrentNetworkInfo`, etc.) either require special entitlements (not available to most developers) or provide very limited information. Therefore, this application is designed exclusively for Android, which provides open access to Wi-Fi scanning capabilities through its public APIs.
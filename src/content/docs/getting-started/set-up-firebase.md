---
title: Setting up Firebase
description: Learn how to set up Firebase within your Storefront.
sidebar:
  order: 3
---

## Prerequisites
- Flutter SDK installed and configured
- A Google account
- Flutter project created and running
- [Firebase CLI](https://firebase.google.com/docs/cli) installed

## Installation Steps

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project" or "Add project"
3. Enter your project name
4. Follow the setup wizard to complete project creation

### 2. Install Required CLI Tools

```bash
# Install the FlutterFire CLI
dart pub global activate flutterfire_cli
```

### 3. Configure Flutter Project

1. Add the following dependencies to your `pubspec.yaml`:
```yaml
dependencies:
  firebase_core: ^latest_version
  # Add other Firebase packages as needed:
  # firebase_auth: ^latest_version
  # cloud_firestore: ^latest_version
  # firebase_storage: ^latest_version
```

2. Run flutter pub get:
```bash
flutter pub get
```

### 4. Initialize Firebase in Your Project

1. Run the FlutterFire configure command. Be sure to specify the flavour (dev/stg/prod):
```bash
flutterfire configure -p flex-storefront-dev -i com.base1.flex-storefront.dev -a com.base1.flex_storefront.dev --out lib/firebase_options_dev.dart 
```

   - `-p` specifies the project
   - `-i` specifies the IOS name
   - `-a` specifies the Android name
   - `--out` species the location for the `firebase_options` file

2. Select your created Firebase project
3. This will automatically:
   - Register your apps in Firebase console
   - Download configuration files
   - Add platform-specific configuration

### 5. Update Your Flutter Code

1. Initialize Firebase in your main.dart:
```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(MyApp());
}
```

## Platform-Specific Setup

### Android Setup
1. Ensure your app's `minSdkVersion` is at least 19 in `android/app/build.gradle`:
```gradle
android {
    defaultConfig {
        minSdkVersion 19
        // ...
    }
}
```

### iOS Setup
1. Update your iOS deployment target in Xcode to at least iOS 11.0
2. Add the GoogleService-Info.plist to your Runner target
3. Update your iOS permissions in Info.plist if needed

## Verification
To verify your Firebase setup:
1. Run your app
2. Check the console for successful Firebase initialization
3. Try implementing a basic Firebase feature (like Analytics)

## Common Issues and Troubleshooting

### Android Issues
- Gradle sync failures: Check your project-level build.gradle for Google services plugin
- Missing google-services.json: Ensure the file is in android/app/

### iOS Issues
- Missing GoogleService-Info.plist
- Incorrect Bundle ID
- CocoaPods installation issues

## Next Steps
After successful installation, you can:
1. Add Firebase Authentication
2. Set up Cloud Firestore
3. Implement Firebase Cloud Messaging
4. Add Firebase Analytics

## Additional Resources
- [Official FlutterFire Documentation](https://firebase.flutter.dev/docs/overview/)
- [Firebase Documentation](https://firebase.google.com/docs)

### Walkthrough Video

Follow along as the FLEX Team sets up Firebase and Crashlytics in a Storefront App.

[![Setting up Firebase](http://img.youtube.com/vi/2jv8Tr729F0/0.jpg)](http://www.youtube.com/watch?v=2jv8Tr729F0 "How to add Firebase Crashlytics to Flutter")

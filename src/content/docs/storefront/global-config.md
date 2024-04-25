---
title: Global Configuration
description: Learn how to configure your Flex Storefront app.
sidebar:
  order: 3
---

Flex Storefront configuration feature, backed by Firebase Remote Config, allows you to change the behavior and appearance of your app without publishing an app update. This short guide explains how to set up Firebase Remote Config for use in a Flutter app and provides examples of configuration fields that could be used in an ecommerce app.

## General purposes

Flex Storefront implementation aims at providing the best user experience possible in the following use cases:

- **No or slow network**
   - On app start, the config is read from local cache and used until a new version is fetched in background
   - On first load, the config can be initialized with local default values

- **Reactivity**
   - Some config changes are critical and need to be effective on all clients immediately.
   - Real time update: the client listens for config changes and react accordingly in real time

- ** Minimal impact**
   - Most of the config changes are applied silently if the user hasn't navigated to the portion of the application impacted.
   - Different feedback can be displayed to the user based on the severity of the changes.

## Prerequisites
- Basic understanding of Flutter development.
- Firebase project created on the Firebase console.

## Steps

1. **Add Firebase to your Flutter app**
   - Follow the instructions provided by Firebase to add Firebase to your Flutter app by integrating the necessary Firebase SDKs.
   - This typically involves adding the `google-services.json` file to your Android app and the `GoogleService-Info.plist` file to your iOS app.

2. **Set up Firebase Remote Config**
   - In the Firebase console, navigate to your project.
   - Go to the Remote Config section.
   - Click on "Get started" to set up Remote Config for your project.
   - Follow the instructions to configure Remote Config for your app.

3. **Add configuration fields**
   - Once Remote Config is set up, you can add configuration parameters that you want to control remotely.
   - Here are some sample configuration fields that could be used in an ecommerce app:
     - `promo_banner_enabled`: Boolean value to enable/disable a promotional banner.
     - `promo_banner_text`: String value containing the text to display in the promotional banner.
     - `promo_banner_image_url`: String value containing the URL of the image to display in the promotional banner.
     - `discount_percentage`: Numeric value representing the percentage discount for promotions.
     - `free_shipping_threshold`: Numeric value representing the order amount threshold for free shipping.

4. **Fetch and apply Remote Config values in Flutter**
   - Register the `ConfigRepository` singleton in the service locator. This singleton handles the config loading as well as listen to the changes from Firebase Remote Config
   - Call the `init` method in the main function, this method reads the cached configuration and *activates* it (i.e. makes it available to the rest of the application)
   - Call the `fetch` method in a bloc, this method shouldn't block the UI but instead triggers a user feedback if necessary.

5. **Read the config values in blocs and widgets**
   - Config values are accessible by using the `ConfigRepository` methods: `getString`, `getBool`, `getInt`, etc.
   - The possible values for a given key can be:
      - The value declared in the current config if the client is up-to-date
      - A previous value is the config has been updated and the client hasn't fetched it yet (because the fetch is in progress, or skipped due to the cache duration)
      - The local default value if the config has never been fetched (likely on first launch of the app or after wiping the app data from the OS settings)
      - The default value for the type (example: empty string `''` for the type string) if no default values have been specified.

## Example Usage in Flutter

```dart
import 'package:flex_storefront/config.dart;
import 'package:get_it/get_it.dart';

void main() async {
  // Firebase initialization
  await Firebase.initializeApp(
    options: FirebaseOptions(
      apiKey: <...>,
      appId: <...>,
      messagingSenderId: <...>,
      projectId: <...>,
      storageBucket: <...>,
      iosBundleId: <...>,
    ),
  );
  
  // Register singleton in service locator
  GetIt.instance.registerSingleton(ConfigRepository());
  
  // The `init` method can be blocking (local interaction only)
  await configRepository.init();

  // The `fetch` must run in background
  unawaited(GetIt.instance.get<ConfigRepository>().fetch());

  runApp(App());
}
```

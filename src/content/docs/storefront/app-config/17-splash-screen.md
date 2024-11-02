---
title: Configure splash screen
description: Learn how to configure your splash screen.
sidebar:
  order: 17
---

A splash screen provides a branded loading experience when your app starts up. Flex Storefront uses `flutter_native_splash` to generate native splash screens for iOS, Android, and Web platforms, replacing the default white loading screen with your custom design.

## Setup Instructions

### 1. Prepare Your Assets

Create a splash screen image that is:
- Simple and centered
- PNG format with transparency where needed
- At least 1024x1024 pixels (will be automatically scaled)
- 4x pixel density for retina displays (iOS, Android 12+)
- Preferably your logo or primary branding element

### 2. Configure flutter_native_splash

Add your configuration to `flutter_native_splash.yaml` in your project root:

```yaml
flutter_native_splash:
  color: "#FFFFFF"                   # Background color
  image: assets/splash/splash.png    # Your splash image
  color_dark: "#121212"             # Optional: Dark mode background
  image_dark: assets/splash/splash_dark.png  # Optional: Dark mode image
  
  android_12:
    color: "#FFFFFF"                 # Android 12-specific settings
    icon_background_color: "#FFFFFF"
    image: assets/splash/splash.png
```

### 3. Generate Splash Screens

Run the following command:
```bash
dart run flutter_native_splash:create
```

This will:
- Generate native code for iOS and Android
- Create necessary image assets
- Update platform configurations
- Set up web splash if enabled

### 4. Test the Splash Screen

Test your splash screen on:
- Light and dark modes
- Different device sizes
- Both iOS and Android devices
- Web browser (if enabled)

## Customization Options

### Basic Options
- `color`: Background color
- `image`: Path to splash image
- `android_12`: Android 12+ specific settings
- `fullscreen`: Enable fullscreen mode

### Dark Mode Support
- `color_dark`: Dark mode background color
- `image_dark`: Dark mode splash image

### Platform-Specific Settings
```yaml
flutter_native_splash:
  android: true
  ios: true
  web: true
  android_gravity: center
  ios_content_mode: center
  web_image_mode: center
```

For the full list of customizations, check the yaml file directly, or [flutter_native_splash](https://pub.dev/packages/flutter_native_splash)

## Troubleshooting

Common issues and solutions:
1. **White flash before splash**: Ensure background color matches app's initial screen
2. **Image not centered**: Check platform-specific gravity/content mode settings
3. **Blurry image**: Provide higher resolution source image

## Additional Resources

- [flutter_native_splash Package](https://pub.dev/packages/flutter_native_splash)
- [iOS Launch Screen Guidelines](https://developer.apple.com/design/human-interface-guidelines/launching)
- [Android Splash Screen Guidelines](https://developer.android.com/develop/ui/views/launch/splash-screen)
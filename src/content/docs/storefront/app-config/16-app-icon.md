---
title: Configure app icon
description: Learn how to configure your brand's app icon.
sidebar:
  order: 16
---

The Flex Storefront Accelerator makes it easy to configure your brand's app icon across all platforms (iOS, Android, and Web) using a streamlined process powered by the [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons) package.

## Design Requirements

Your app icon should be:
- A single, high-resolution square image
- At least 1024x1024 pixels in size
- Simple and recognizable at smaller sizes

## Step-by-Step Guide

### 1. Design Your Icon

We recommend using a Figma template to ensure your icon meets all platform requirements:

1. Open the [iOS & Android App Icon Template](https://www.figma.com/community/file/994333518688155629/ios-android-app-icon-template) in Figma
2. Design your icon following the template guidelines
3. Test your design across different sizes using the template's preview frames
4. Export your final icon as a PNG file at 1024x1024 pixels

### 2. Add Icon to Your Project

1. Place your exported icon in the project's `assets/icon` directory:
```
flex_storefront/
├── assets/
│   ├── icon/
│   │   └── app_icon.png    <- Place your icon here
```

### 3. Generate Platform Icons

The Flex Storefront uses `flutter_launcher_icons` to automatically generate all required icon sizes and formats. To generate the icons:

1. Run the following command from your project root:
```bash
dart run flutter_launcher_icons
```

Based on your `flutter_launcher_icons.yaml` file at the root of your project root, this command will perform the following actions:
- Generate iOS icons in various required sizes
- Create Android adaptive icons with proper masking
- Configure web favicon and manifest icons
- Update all necessary platform configuration files

### 4. Verify Installation

After generating the icons, verify they appear correctly:

1. **iOS**: Check `ios/Runner/Assets.xcassets/AppIcon.appiconset`
2. **Android**: Check `android/app/src/main/res/mipmap-*`
3. **Web**: Check `web/icons` directory

## Troubleshooting

If you encounter issues during icon generation:

1. Ensure your source icon is:
   - In PNG format
   - At least 1024x1024 pixels
   - Located in the correct directory

2. Check that `flutter_launcher_icons.yaml` is properly configured, example:
```yaml
flutter_launcher_icons:
  image_path: "assets/icon/app_icon.png"

  android: "launcher_icon"
  # image_path_android: "assets/icon/icon.png"
  min_sdk_android: 21 # android min sdk min:16, default 21
  # adaptive_icon_background: "assets/icon/background.png"
  # adaptive_icon_foreground: "assets/icon/foreground.png"
  # adaptive_icon_monochrome: "assets/icon/monochrome.png"

  ios: true
  # image_path_ios: "assets/icon/icon.png"
  remove_alpha_ios: true
  # image_path_ios_dark_transparent: "assets/icon/icon_dark.png"
  # image_path_ios_tinted_grayscale: "assets/icon/icon_tinted.png"
  # desaturate_tinted_to_grayscale_ios: true

  web:
    generate: true
    image_path: "assets/icon/app_icon.png"
    background_color: "#FFFFFF"
    theme_color: "#212121"
```

## Additional Resources

- [flutter_launcher_icons Package Documentation](https://pub.dev/packages/flutter_launcher_icons)
- [iOS Human Interface Guidelines - App Icon](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Android App Icon Design Guidelines](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive)

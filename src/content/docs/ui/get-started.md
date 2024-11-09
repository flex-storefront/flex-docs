---
title: Getting Started
description: Get Started by installing FLEX UI in your project.
sidebar:
  order: 1
---

FLEX UI is a collection of eCommerce widgets for Flutter developers that allows you to build stunning storefronts faster.

> FLEX UI is **NOT** a component library - it's better. It's a carefully crafted collection of eCommerce widgets that you can copy and paste directly into your Flutter applications.

### Why Not a Component Library?

We deliberately chose not to make this a traditional component library because:

1. **No Dependencies** - You don't install it as a package dependency
2. **Full Control** - The code is yours to customize and modify
3. **Cherry Pick** - Take only what you need, leave what you don't
4. **Learn & Build** - Use this as a reference to build your own component libraries

Think of FLEX UI as your personal UI cookbook - grab the recipes you like and make them your own. Check back for upgrades and new widgets as they become available!

## Installation

1. Install the Mason CLI:
```bash
dart pub global activate mason_cli
```

2. Initialize Mason in your project:
```bash
mason init
```

3. Add FLEX UI brick:
```bash
mason add flex_ui --git-url https://github.com/flex-storefront/flex_ui --git-path /brick
```

4. Get the brick:
```bash
mason get
```

5. Generate the UI components:
```bash
mason make flex_ui
```

## Project Structure

When you generate the FLEX UI components, you'll get the following structure:

```
lib/
├── theme/                   # Theme Configuration
│   ├── flex_app_theme.dart  # Main app theme
│   └── subthemes/           # Widget-specific themes
│
├── tokens/             # Design System Tokens
│   ├── colors.dart     # Color palette
│   ├── typography.dart # Text styles
│   └── sizes.dart      # Layout constants
│
├── utils/             # Utilities
│   └── extensions/    # Common helper functions
│
├── widgets/          # FLEX UI Components
│   ├── app_bar/      # Flex App Bar
│   ├── carousel/     # Carousel display widget
│   └── etc/          # Other components
│
└── main.dart         # Widgetbook explorer app
```

## How It Works

### 1. Design Tokens (`/tokens`)
The foundation of your design system:
```dart
// colors.dart
class FlexColors {
  static const primary = Color(0xFF2D3142);
  static const accent = Color(0xFFEF8354);
  // ...
}
```

### 2. Theme Configuration (`/theme`)
Customize the look and feel:
```dart
// app_theme.dart
ThemeData buildFlexTheme() {
  return ThemeData(
    colorScheme: FlexColors.lightScheme,
    textTheme: FlexTextTheme.textTheme,
    // ...
  );
}
```

### 3. You're ready to go!
You're ready to begin using the FlexWidgets in your storefront app.
```dart
// sort_and_filter_page.dart
FlexButton(
  title: 'Apply Sort & Filter',
  state: ButtonState.normal,
  onPressed: () => widget.onApplyFilters(),
),
```

## Support

- If you experience any issues, please open a ticket 🐛 [Issue Tracker](https://github.com/flex-storefront/flex_ui/issues)

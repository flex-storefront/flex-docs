---
title: Internationalization
description: Learn how Flex Storefront handles multiple languages.
sidebar:
  order: 25
---

Flex Storefront uses [slang](https://pub.dev/packages/slang) for internationalization, providing type-safe translations across the application.

## Structure

The file structure of slang may be divided into two categories: (1) the translation resources and (2) the generated translation code. The translation resources house the translated text whereas the translation code is referenced within the rest of your code.

### 1. Translation Resources:

Translations are organized in JSON files located in the `i18n` directory. Each language has its own file:
- `strings.i18n.json` (Base language file - English, **default**)
- `strings_fr.i18n.json` (French)
- Add additional languages by creating new files following this pattern

### 2. Generated Translation Code:

Upon modifying an existing (or creating a new) language file, the file `strings.g.dart` must be regenerated from the translation resources. The command to regenerate the dart file is `dart run slang`, which should be ran from `/app`.

The `strings.g.dart` file is **automatically generated** by slang and serves several important purposes:

1. **Type Safety**
   - Creates strongly typed classes from your JSON translation files
   - Enables compile-time checking for missing translations
   - Provides IDE autocomplete support

2. **Translation Access**
   - Generates the extension method `context.t` that provides access to all translations
   - Creates nested classes that match your JSON structure

> :warning: Never modify `strings.g.dart` directly as changes will be lost when the file is regenerated using `dart run slang`.

## Usage

Text within the app is internationalized by replacing static text with references to the corresponding translations in `strings.g.dart`. These references use the `context.t` extension method to access the appropriate translation based on the current language setting.

For example, the static text `"Change Language"` is replaced by `context.t.accountPage.settings.changeLanguage`

```dart
import 'package:flex_starter/i18n/strings.g.dart';
// other imports

// ... rest of code
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => LanguageCubit(),
      child: Scaffold(
        appBar: AppBar(
          title: Text(context.t.accountPage.settings.changeLanguage), // Reference to the translation code
        ),
        body: const ChangeLanguageView(),
      ),
    );
  }
// ... rest of code
```

### Basic Translation
To access translations in your widgets:

```dart
// Access a simple translation
Text(context.t.common.actions.retry)
```

### Nested Translations
For deeply nested structures:

```dart
Text(context.t.shopPage.productListPage.widgets.filterAndSort.filterAndSort)
```

### Working with Enums
When translating enum values (like for sort options or filters), use a helper function:

```dart
String _getSortByText(SortBy sortBy, BuildContext context) {
  return switch (sortBy) {
    SortBy.lowerPrice => context.t.shopPage.productListPage.widgets.filterAndSort.sortByOptions.lowerPrice,
    SortBy.higherPrice => context.t.shopPage.productListPage.widgets.filterAndSort.sortByOptions.higherPrice,
    // ... other cases
  };
}
```

## Adding New Translations

1. Define your translations in the base language file (e.g., `strings_en.i18n.json`):
```json
{
  "common": {
    "actions": {
      "retry": "Retry",
      "apply": "Apply"
    }
  }
}
```

2. Add corresponding translations in other language files (e.g., `strings_fr.i18n.json`):
```json
{
  "common": {
    "actions": {
      "retry": "Réessayer",
      "apply": "Appliquer"
    }
  }
}
```

## Type Safety

Slang generates type-safe code, ensuring:
- All translations are accessed through typed properties
- Missing translations are caught at compile-time
- IDE autocomplete support for translation keys

## Key Benefits
- Type-safe translations
- Compile-time checking for missing translations
- Easy maintenance with JSON-based translation files
- IDE support for autocompletion

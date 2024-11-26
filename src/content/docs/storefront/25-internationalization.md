---
title: Internationalization
description: Learn how Flex Storefront handles multiple languages.
sidebar:
  order: 25
---

Flex Storefront uses [slang](https://pub.dev/packages/slang) for internationalization, providing type-safe translations across the application.

## Slang: A Brief Overview

Internationalization of Flex Storefront is achieved by [slang](https://pub.dev/packages/slang), a powerful, type-safe i18n solution which requires minimal setup.

### How it Works

Text within the app is internationalized by replacing static text with references to the corresponding translations in `strings.g.dart`. These references use the `context.t` extension method to access the appropriate translation based on the current language setting.

> [!NOTE]
> The "current language setting" is handled by a `cubit` state. The underlying files, `language_cubit.dart` and `language_state.dart`, may be found in `app/lib/account/cubit/`. This is discussed in greater detail later in this document.

- **Accessing a Translation**
  
  Below, the static text `"Change Language"` is replaced by `context.t.accountPage.settings.changeLanguage`:

  ```dart
  import 'package:flex_starter/i18n/strings.g.dart'; // 1. import strings.g.dart
  ...

  ...
    @override
    Widget build(BuildContext context) {
      return BlocProvider(
        create: (_) => LanguageCubit(),
        child: Scaffold(
          appBar: AppBar(
            title: Text(context.t.accountPage.settings.changeLanguage), // 2. refactor a static string with the corresponding key
          ),
          body: const ChangeLanguageView(),
        ),
      );
    }
  ...
  ```

- **Changing Languages**

  The switching of languages is handled by the `cubit` `LanguageCubit` located `app/lib/account/cubit/language_cubit.dart`. This `cubit`, when the app is first initialized, is set to the system language of the device hosting the app. The state of the `cubit` may then be changed by navigating to `My Account` > `Change Language`, which currently provides the language options of English and French.


### File Structure
slang lives within `app/lib/i18n/`. This directory contains multiple JSON files (*the translation resources*) and a single dart file (*the translation code*). 

1. **Translation Resources**

    Translations are organized in JSON files located in the `i18n` directory. Each language has its own file:
    - `strings.i18n.json` (Base language file - English, **default**)
    - `strings_fr.i18n.json` (French)

    The translation resources contain the mapping of text requiring translation. **The keys - and structure - of each file must be identical. Only the corresponding values change to reflect the respective translation**. For example, the `common` key within the respective files contains the following:

    *`strings.i18n.json`*
    ```json 
      "common": {
        "actions": {
          "retry": "Retry",
          "apply": "Apply"
        }
      }
    ```
    *`strings_fr.i18n.json`*
    ```json 
      "common": {
        "actions": {
          "retry": "Réessayer",
          "apply": "Appliquer"
        }
      }
    ```

2. **Translation Code**

    The content within the translation resources is then used when `strings.g.dart` is automatically regenerated. Once a new translation JSON is added or an existing one is modified, the file must be regenerated. `strings.g.dart` may be regenerated by navigating to `/app` within a terminal and running `dart run slang`.


    The file serves several important purposes:

   - **Type Safety**
     - Creates strongly typed classes from your JSON translation files
     - Enables compile-time checking for missing translations
     - Provides IDE autocomplete support

   - **Translation Access**
     - Generates the extension method `context.t` that provides access to all translations
     - Creates nested classes that match your JSON structure

    Once `strings.g.dart` is imported, any instance of static text may be replaced with the respective key. **A key will follow the same tree structure as what is represented within the JSON**. For example, the example above replaces the text `"Change Language"` with `context.t.accountPage.settings.changeLanguage`, which represents the key `changeLanguage` and therefore value `"Change Language"`.

    ```json
    "accountPage": {
      "settings": {
        "sectionTitle": "Settings",
        "communication": "Communication",
        "theme": "Theme",
        "personalData": "Personal Data",
        "myStore": "My Store",
        "changeLanguage": "Change Language"
        },
      }
    ```

> [!WARNING]
> Never modify `strings.g.dart` directly as changes will be lost when the file is regenerated!

## slang Examples
### Basic Translation
To access translations in your widgets:

```dart
Text(context.t.common.actions.retry)
```

### Nested Translations
For deeply nested structures:

```dart
Text(context.t.shopPage.productListPage.widgets.filterAndSort.filterAndSort)
```

### Working with Enums
When translating enum values (like for sort options or filters), use a helper function. Helper functions (like the `_getSortByText` example below) are necessary when:

- Translating enum values
- Mapping dynamic values to translations
- Handling complex translation logic

This provides type safety and centralized translation management for these cases.

```dart
String _getSortByText(SortBy sortBy, BuildContext context) {
  return switch (sortBy) {
    SortBy.lowerPrice => context.t.shopPage.productListPage.widgets.filterAndSort.sortByOptions.lowerPrice,
    SortBy.higherPrice => context.t.shopPage.productListPage.widgets.filterAndSort.sortByOptions.higherPrice,
    // ... other cases
  };
}
```

## Troubleshooting
### Missing Translations
If a translation is missing:

- The IDE will show a compile-time error
- Add the missing key to all language files
- Regenerate `strings.g.dart`

### Common Issues
- **`dart run slang` fails**: 
  - Ensure all JSON files have identical structure
  - Check for valid JSON syntax (missing commas, quotes, etc.)

- **Translation not updating**: 
  - Make sure to regenerate `strings.g.dart` after changes
  - Verify the JSON key path matches your `context.t` reference

- **Runtime language not changing**: 
  - Verify `LanguageCubit` state is being updated correctly
  - Ensure you're using the correct BuildContext that has access to the BlocProvider
  - Common mistake: Not wrapping your widget with BlocProvider or using a context that doesn't have access to the BlocProvider
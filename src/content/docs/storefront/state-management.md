---
title: State Management
description: A reference page in my new Starlight docs site.
sidebar:
  order: 4
---

In Flex Storefront, managing the application's state efficiently is crucial for providing a smooth user experience. `flutter_bloc` is a popular state management library that follows the BLoC (Business Logic Component) architecture pattern. This documentation outlines how `flutter_bloc` is utilized as a state management solution.

## What is flutter_bloc?

`flutter_bloc` is a Flutter library that helps in managing application state and makes it easier to separate presentation from business logic. It implements the BLoC pattern, where UI components (widgets) interact with a BLoC to retrieve data and update the UI accordingly.

## Setting up flutter_bloc in Flex

1. **Install flutter_bloc package**
   Add `flutter_bloc` to your `pubspec.yaml` file and run `flutter pub get` to install the package.

  ```yaml
  dependencies:
    flutter_bloc: ^8.0.0
  ```


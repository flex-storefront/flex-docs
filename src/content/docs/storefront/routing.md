---
title: Routing & Navigation
description: Learn how Flex Storefront handles routing and navigation.
sidebar:
  order: 5
---

In the Flex Storefront, navigation and routing are handled efficiently using the `auto_route` package. This documentation provides a brief overview of how `auto_route` is utilized for routing and navigation in the app.

## What is auto_route?

`auto_route` is a code generation package for Flutter apps that simplifies route management by generating route-related code for you. It provides a declarative way to define and navigate between routes in a type-safe manner, reducing boilerplate code and improving code maintainability.

## Setting up auto_route in Flex Storefront

1. **Install auto_route package**
  
  Add `auto_route` to your `pubspec.yaml` file and run `flutter pub get` to install the package.
  ```yaml
  dependencies:
    auto_route: ^3.1.5
  ```

2. **Define routes**
  
  Define your app's routes using annotations provided by `auto_route`.
  Routes are defined using the `@MaterialAutoRouter` or `@CupertinoAutoRouter` annotation.

  ```dart
  import 'package:auto_route/auto_route.dart';
  import 'package:flex_storefront/presentation/pages/home_page.dart';
  import 'package:flex_storefront/presentation/pages/product_details_page.dart';

  @MaterialAutoRouter(
    routes: <AutoRoute>[
      MaterialRoute(page: HomePage, initial: true),
      MaterialRoute(page: ProductDetailsPage),
      // Add more routes as needed
    ],
  )
  class $AppRouter {}
  ```

3. **Generate route files**
  
  Run the code generation command to generate the necessary route files. This command will generate a `router.gr.dart` file containing route-related code.

  ```bash
  flutter pub run build_runner build --delete-conflicting-outputs
  ```

4. **Use context.router for navigation**
  
  Once routes are defined and generated, you can navigate between routes using the context.router.navigateNamed method.

  ```dart
  context.router.navigateNamed('/product_details?id=123');
  ```

---
title: Routing & Navigation
description: Learn how Flex Storefront handles routing and navigation.
sidebar:
  order: 30
---

In Flex Storefront, navigation and routing are handled efficiently using the `auto_route` package. This documentation provides a brief overview of how `auto_route` is utilized for routing and navigation in the app.

### What is auto_route?

`auto_route` is a code generation package for Flutter apps that simplifies route management by generating route-related code for you. It provides a declarative way to define and navigate between routes in a type-safe manner, reducing boilerplate code and improving code maintainability.

## Flex Router

The `router.dart` file used in Flex Storefront uses the `auto_route` package for navigation in the application. Here is an example of how routes are defined.

```dart
AutoRoute(
  page: RootRoute.page,
  path: '/',
  children: [
    AutoRoute(page: HomeRoute.page, path: 'home', initial: true),
    AutoRoute(
      page: ShopRoute.page,
      path: 'shop',
      children: [
        AutoRoute(
          page: CategoryRoute.page,
          path: 'categories',
          initial: true,
        ),
        AutoRoute(
          page: CategoryIntermediaryRoute.page,
          path: 'category/:categoryId',
        ),
        AutoRoute(
          page: ProductListRoute.page,
          path: 'products',
        ),
        AutoRoute(
          page: ProductDetailRoute.page,
          path: 'product/:productId',
        ),
      ],
    ),
    AutoRoute(page: CartRoute.page, path: 'cart'),
    AutoRoute(page: AccountRoute.page, path: 'account'),
  ],
),
```

Above, we have defined 9 different routes. Let's understand the primary routes:

- `RootRoute` - this page defines our global app `Scaffold`, including our bottom navigation.
- `HomeRoute` - the landing page of the app, as such `initial: true` is set on this route.
- `ShopRoute` - contains the main shopping journeys, each with their own nested routes
- `CartRoute` - the cart page accessible via the bottom navigation bar
- `AccountRoute` - contains the login and account functionality

### Strongly-typed arguments

The `auto_route` package supports strongly-typed arguments. For example, the `CategoryIntermediaryRoute` and `ProductDetailRoute` have `:categoryId` and `:productId` in their paths respectively. These are parameters that can be passed to the route when navigating to it within their app or via deeplinks.

### Deep linking

The `path` of an `AutoRoute` can be used for deep linking. For example, if the app is opened with the URL `app://shop/category/123`, it will navigate to the `CategoryIntermediaryRoute` with `categoryId` set to `123`. This is very useful for engaging with users who have the app installed on their mobile device.


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

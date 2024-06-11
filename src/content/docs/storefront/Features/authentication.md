---
title: Authentication
description: How to authenticate the user
---

This documentation explains the authentication works in Flex Storefront and how to the user from SAP Commerce Cloud

## Prerequisites
- Basic understanding of Flutter development.
- Access to a Commerce Cloud instance with a base site and OAuth properly configured.
- Flutter development environment set up.

## Configuration

Flex Storefront uses the OAuth protocol to connect to Commerce Cloud (or any OAuth-compliant backend infrastructure). The project needs to be configured with those keys in the `.env` file:

- `HYBRIS_BASE_URL`: Base URL of the Commerce Cloud backend
- `HYBRIS_CLIENT_ID`: OAuth client ID created in the Backoffice
- `HYBRIS_CLIENT_SECRET`: OAuth client secret created in the Backoffice

On app startup, the app checks for a valid token on the app storage, then the HTTP client is configured with the `Authorization` header. So all user-related route can use the shortcut value `current`. Example: `/occ/v2/catalog/users/current/orders`

## Login state

The `AuthRepository` is the unique source of truth know whether the user is logged in or anonymous. This repository is a singleton with the same lifetime as the application. It must be init on startup with `instance.init()`. This method must be executed prior to any network requests.

### Authentication status in the UI

Once the `AuthRepository` is initialized, it is possible to know whether the user is logged in or not by declaring:

```dart
final authStatus = GetIt.instance.get<AuthRepository>().currentAuthStatus;
```

### Authentication status in Blocs/Cubits

While it is still possible to perform a "one-time read" like the declaration above, in the state management layer, we generally want the real-time update of the authentication status. Example: load the user when the user logs in or load the anonymous cart when the user logs out.

To do this, the `AuthRepository` exposes a stream that can be listened to in the bloc/cubit constructor:

```dart
AccountCubit() : super(AccountState(status: Status.initial)) {
  _authStreamSubscription = GetIt.instance.get<AuthRepository>().authStatus.listen((status) {
    if (status == AuthenticationStatus.authenticated) {
      // Handle side-effects
    }
  });
}
```

### Authentication status in navigation

Those pages are generally accessible only if the user is logged in (Checkout, Order history, My Account, etc.). To protect a route to be accessible while anonymous, simply declare an instance of `AuthGuard` on the route definition:

```dart
AutoRoute(
  page: CheckoutRoute.page,
  path: '/checkout',
  fullscreenDialog: true,
  guards: [AuthGuard()],
),
```

---
title: Cart & Checkout
description: How to handle the cart
---

This documentation describes the cart workflow in Flex Storefront

## Prerequisites
- Basic understanding of Flutter development.
- Access to a Commerce Cloud instance with a registered user.
- Flutter development environment set up.

## Types of cart

### Anonymous cart

When anonymous, the app creates an anonymous cart. The cart identifier is stored in local storage so the same cart is loaded for the next sessions.

The user can interact with the cart (adding/removing items, adjusting quantities) but he has to be logged in to access to the checkout page.

### User cart

Once logged in, the cart is refreshed with the current user cart. If there is none, a new cart is created.

## Checkout

Once the user is logged in and is ready for checkout, he can enter the checkout page and select:
- Shipping address
- Delivery Mode
- Payment method

The "checkout" is seen as an entity in its own, even if those info are attached to the cart. Doing so allows us to split the data between the cart info (i.e. the products, the variants, theirs quantities, the total price) and the checkout info (i.e. the info only shown on the checkout page, like the delivery address, the shipping cost, etc.)

## State management

The cart is handle in the `CartRepository`. This repository exposes a stream that emits everytime the cart changes (it could be a change inside the same cart, or a totally new cart). So the other Blocs/Cubits have a chance to update as well (example: The `CartIconCubit` refresh the total amount of items shown below the cart icon).

A bloc/cubit needing the real-time updates of the Cart can extends the `CartSubscriptionCubit` that automatically handles the stream subscription:

```dart
class CartIconCubit extends CartSubscriptionCubit<CartIconState> {

  ...

  @override
  void onCartData(cart) {
    // Do something with the latest cart
  }

}
```

For more control, the `CartRepository` also exposes an event bus where specific event can be listened to, examples:

- `CartCreated`
- `CartNotFound`
- `QuantityChanged`
- ...

It makes possible to handle custom behaviors like optimistic updates for instance:

```dart
class CartPageCubit extends CartSubscriptionCubit<CartPageState> {

  ...

  @override
  void onCartMessage<QuantityChanged>(event) {
    final newState = state.updateQuantity(
      productId: event.productId,
      quantity: event.quantity,
    );

    // Immediately update the view with the new quantity while the network request is pending in the repository
    emit(newState);
  }

}
```

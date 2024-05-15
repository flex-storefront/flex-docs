---
title: Analytics
description: Learn how Flex Storefront handles analytics.
sidebar:
  order: 50
---

Flex Storefront supports analytics events to gain valuable insights into user behavior and app performance.

By default, Google Analytics 4 is used to measure features and behaviour and generate useful reports with the provided data. The following
events are triggered automatically when using the Storefront, and can be turned off or customized inside their
[bloc, cubit or repository](../40-state-management).

## Supported events

### `ViewItemEvent`

This event is fired whenever the user opens the Product Detail Page. It can be used to identify the most popular products of your catalog.

#### Parameters:

| Name     | Description                                           |
|----------|-------------------------------------------------------|
| value    | Price of the product                                  |
| currency | Currency of the price                                 |
| items    | Only one, product information (identifier, name, ...) |

Google Analytics reference: [Link](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#view_item)

### `SelectContentEvent`

This event is fired for different kinds of entity in the app (example: category).

| Name        | Description                                                          |
|-------------|----------------------------------------------------------------------|
| contentType | Type of the entity (example: "category")                             |
| itemId      | Identifier of the entity (example: the category code for a category) |

Google Analytics reference: [Link](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#select_content)

### `ViewCartEvent`

This event is fired whenever the user opens the Cart Page.

| Name     | Description                                                                          |
|----------|--------------------------------------------------------------------------------------|
| value    | Total value of the Cart                                                              |
| currency | Currency of the value above                                                          |
| items    | For each lines in the cart: product information (identifier, name, ...) and quantity |

Google Analytics reference: [Link](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#view_item)

### `AddToCartEvent`

This event is fired when the user adds a new product to the cart, note that quantity adjustments (for a product already belonging to the cart) aren't tracked.

| Name     | Description                                                              |
|----------|--------------------------------------------------------------------------|
| value    | Price of the product added to the cart                                   |
| currency | Currency of the price                                                    |
| items    | Only one: product information (identifier, name, ...) and quantity added |

Google Analytics reference: [Link](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_to_cart)

### `RemoveFromCartEvent`

This event is fired when the user removes a product from the cart, regardless of the quantity (quantity adjustments for products in cart aren't tracked).

| Name     | Description                                                                                                  |
|----------|--------------------------------------------------------------------------------------------------------------|
| value    | Price of the product added to the cart                                                                       |
| currency | Currency of the price                                                                                        |
| items    | Only one: product information (identifier, name, ...) and the quantity at the moment the product was removed |

Google Analytics reference: [Link](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#remove_from_cart)

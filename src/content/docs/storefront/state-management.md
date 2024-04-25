---
title: State Management
description: Learn how Flex Storefront handles state management.
sidebar:
  order: 4
---

In Flex Storefront, managing the application's state efficiently is crucial for providing a smooth user experience. In order to keep our code clean and easy to read, we use the [bloc library](https://bloclibrary.dev/) to separate our application into three layers:
1. Presentation
2. Business Logic
3. Data

### What is flutter_bloc?

![Bloc Architecture](https://bloclibrary.dev/_astro/bloc_architecture_full.CYn-T9Ox_Z20Hwr9.webp)

`flutter_bloc` is a popular Flutter library that helps in managing app state and makes it easier to separate presentation from business logic. It implements the BLoC (Business Logic Component) pattern, where UI components (widgets) interact with a BLoC to retrieve data and update the UI accordingly.

## Example (Category Menu)

In Flex Storefront, we use a [Cubit](https://bloclibrary.dev/bloc-concepts/#cubit) to manage fetching the category menu from a CMS (Strapi) and displaying category pages within the app. Let's breakdown this example to understand how the BLoC architecture works.

### CategoryState

`CategoryState` is a class that represents the state of the category menu data in the app.

```dart
class CategoryState extends BlocState {
  final List<Category> categories;

  CategoryState({
    required super.status,
    super.error,
    super.stackTrace,
    this.categories = const [],
  });
}
```

#### Fields

- `status`: Indicates the current status of the category data (pending, success, or failure).
- `categories`: Holds the category menu data when the status is `Status.success`.
- `error`: Holds the error details when the status is `Status.failure`.
- `stackTrace`: Holds the stack trace of the error when the status is `Status.failure`.

### CategoryCubit

`CategoryCubit` manages the state and business logic of category menu data in the application. It extends the `Cubit` class with a state of `CategoryState`.

```dart
class CategoryCubit extends Cubit<CategoryState> {
  CategoryCubit() : super(CategoryState(status: Status.pending));

  Future<void> loadCategories({int? parentId}) async {
    ...
  }
}
```

#### Initializing the Cubit
The `CategoryCubit` constructor is called when we arrive on the Category Menu root page. At that point, it initializes the state to `CategoryState` with a status of `Status.pending`. We immediately call the `loadCategories` method in the cubit to fetch our category menu heirarchy from the CMS.

Next, we'll take a closer look at the `loadCategories` method.

#### Loading the Categories

```dart
  Future<void> loadCategories({int? parentId}) async {
    try {
      emit(CategoryState(status: Status.pending));

      final categories =
          await GetIt.instance.get<CategoryApi>().fetchRootCategories();

      emit(CategoryState(
        status: Status.success,
        categories: categories,
      ));
    } on DioException catch (error) {
      emit(CategoryState(
        status: Status.failure,
        error: error,
        stackTrace: error.stackTrace,
      ));
    }
  }
```

This method is an asynchronous function that takes an optional `parentId` parameter. If no `parentId` is provided, this means we are on the "category root level".

It emits a `CategoryState` with a status of `Status.pending` before making the API call. If the API call is successful, it emits a `CategoryState` with a status of `Status.success` and the fetched categories. If the API call fails, it emits a `CategoryState` with a status of `Status.failure` and the error details.


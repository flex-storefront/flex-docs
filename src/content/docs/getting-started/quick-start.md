---
title: Quick start
description: A quick start to getting up and running with Flex.
sidebar:
  order: 2
---

The following instructions describe how to build and run the Flex Storefront app.

## Prerequisites

In order to install and run Flex Storefront, you will need a Flutter development environment, a running SAP Commerce Cloud instance, and a Firebase Project. Read the [Requirements](/getting-started/requirements) for full setup instructions.

## Clone and Run the Repository

To get started, simply clone the repository
```zsh
git clone https://github.com/BASE1com/flex-storefront
```

Then go inside the flex-storefront folder and run the following command to install the dependencies:

```bash
flutter pub get
```

Finally, make sure an iOS simulator, Android emulator, or a real device is available and run:

```bash
flutter run
```

You now have a running instance of Flex Storefront!

## What's next?

### Set environment variables

In order for Flex Storefront to connect to your running Hybris instance, you will need to provide certain environment variables.

### Understanding the folder structure

The Starter app is built using [flex_navigation](https://pub.dev/packages/flex_navigation), this is the first Flex package you are currently using. This package is listed in the `pubspec.yaml` file under the `dependencies` key:

```yaml title="/pubspec.yaml"
dependencies:
  flex_navigation: ^1.0.0
  flutter:
    sdk: flutter
```

This package is used to implement the global navigation scheme, with smooth transitions, deep-linking, etc. Put yourself in the end user situation and navigate in this raw eCommerce application: PLP, PDP, Cart page, etc.


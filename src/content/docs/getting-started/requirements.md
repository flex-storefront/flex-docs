---
title: Requirements
description: Learn about the frontend and backend requirements for Flex Storefront.
sidebar:
  order: 1
---

Flex Storefront is a **modern, native app storefront** for SAP Commerce Cloud. The storefront codebase is a [Flutter](https://flutter.dev) app that relies exclusively on the Commerce REST API for its data and business logic.

In order to install and run Flex Storefront, you will need a Flutter development environment, a running SAP Commerce Cloud instance, and a Firebase Project. The instructions below will guide you through these prerequisites.


## Frontend Requirements

### Installing Flutter and Dart

To set up a Flutter development environment, follow these steps:

1. **Install Flutter SDK:**
   - Download the Flutter SDK from the [official Flutter website](https://flutter.dev/docs/get-started/install).
   - Extract the downloaded ZIP file to a location on your machine.
   - Add the Flutter `bin` directory to your system's PATH variable.

2. **Install Dart SDK:**
   - Flutter requires the Dart SDK. Download and install it from the [Dart website](https://dart.dev/get-dart).

3. **Configure Flutter:**
   - Run `flutter doctor` in your terminal to check if there are any dependencies you need to install to complete the setup.
   - Install any missing dependencies as suggested by the `flutter doctor` command.

4. **Set Up IDE:**
   - Choose an Integrated Development Environment (IDE) such as Visual Studio Code or Android Studio.
   - Install the Flutter and Dart plugins for your chosen IDE.

5. **Verify Installation:**
   - Run `flutter --version` in your terminal to verify that Flutter is installed correctly.
   - Run `dart --version` to verify Dart installation.

:::info
We recommend a minimum of **Flutter 3.19.5** and **Dart 3.3.3**
:::

## Backend Requirements

### SAP Commerce Cloud Installation

Flex Storefront uses SAP Commerce Cloud for its backend and makes use of the sample data. Composable storefront can only be used with SAP Commerce Cloud 2211 or newer; the latest release is recommended.

For the full guide, see [Setting up SAP Commerce Cloud for use with Flex Storefont](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/cfcf687ce2544bba9799aa6c8314ecd0/6a04941777e242508bdd1dc395a15553.html#loio6a04941777e242508bdd1dc395a15553).

Below is a high level overview of the steps required to install and run SAP Commerce Cloud:

1. **Download SAP Commerce Cloud:**
   - Access the SAP Commerce Cloud 2211 download from the [SAP Software Center](https://help.sap.com/docs/link-disclaimer?site=https%3A%2F%2Fme.sap.com%2Fsoftwarecenter%2Ftemplate%2Fproducts%2F_APP%3D00200682500000001943%26_EVENT%3DNEXT%26HEADER%3DY%26FUNCTIONBAR%3DY%26EVENT%3DTREE%26NE%3DNAVIGATE%26ENR%3D67837800100800007216%26V%3DMAINT%26TA%3DACTUAL%2FSAP%2520COMMERCE) and download the necessary installation files.

2. **Installation Process:**
   - Follow the installation guide provided by SAP to set up SAP Commerce Cloud on your local machine or server.
   - Configure the necessary settings such as database connection details, server configurations, etc.

3. **Start SAP Commerce Cloud:**
   - Once the installation is complete, start the SAP Commerce Cloud server according to the instructions provided.

4. **Verify Installation:**
   - Access the SAP Commerce Cloud administration console via a web browser to ensure that the installation was successful.

### Firebase Project Setup

Flex Storefront uses [Google Firebase](https://firebase.google.com/) as a mobile backend to configure and power composable commerce features in the Storefront app.

To set up Firebase, follow these steps:

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   
2. **Add Firebase to your App:**
   - Follow the on-screen instructions to add Firebase to your Flutter app.
   - Download the `google-services.json` file and place it in the appropriate location in your Flutter project.

3. **Configure Firebase Services:**
   - Enable the Firebase services you require for your project, such as Firestore, Authentication, Cloud Functions, etc.

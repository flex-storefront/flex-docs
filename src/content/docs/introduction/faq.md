---
title: Flex FAQ
description: Common Functional and Technical questions and answers.
---

The following document outlines some frequently asked questions about Flex and Flex Storefront from a technical and commercial perspective.

## Flex as a Product

### What is Flex?

Flex is a native mobile Frontend-as-a-Service that provides templates, code, and tools that help you build modern, scalable and customizable eCommerce mobile apps.

The Storefront is available as an open-source product, supported by the team at [BASE1](https://base1.com) - a global commerce partner committed to delivering technology projects that move business forward.

### What is Flex Storefront?

Flex Storefront is an open-source mobile app that allows you to quickly create your own branded storefront for SAP Commerce Cloud. Flex Storefront is written using Dart/Flutter and is published as an app template. The currently recommended approach to using Flex is to clone the repository and customize to your needs. Without modification, the storefront works out of the box with the latest version of SAP Commerce Cloud (2211).

You can view the Flex Storefront source code in this [GitHub repository](https://github.com/BASE1com/flex-storefront).

### Does Flex require SAP Commerce Cloud?

Flex is designed to work with SAP Commerce Cloud by default. However, the platform can be customized to work with other headless commerce backends, such as Adobe Commerce, HCL Commerce, Commercetools, or others.

For more information on connecting to other backends, [contact the team](https://base1.com/contact).

### How does Flex integrate with SAP Commerce Cloud?

Flex Storefront is built to work exclusively with your API-first, headless solutions. The Flex services ([see architecture](../architecture/10-intro.md)) make calls to SAP Commerce Cloud via the RESTful APIs in the Omni Commerce Connect (OCC) layer.

### Does Flex integrate with any other SAP products?

Yes. Flex is built to work within the SAP ecosystem, with first-class support for [SAP Emarsys](https://emarsys.com/emarsys-sap/).

### How does Flex compare to SAP Composable Storefront?

SAP Composable Storefront is a web application that implements responsive design. Spartacus runs as a Progress Web App, which means it does it's best to act like a traditional native mobile app; however, there are drawbacks and limitations.

Flex is built to be deployed as a native mobile app for both iOS and Android platforms. This allows you to take advantage of certain features (media storage, camera and device access, geolocation, push notifications, and more) that aren't easily available through a web browser.

### How do I deploy Flex Storefront to the app stores?

You can deploy Flex Storefront yourself using the recommended methods from the Flutter team; or, if you're an organization looking to build, manage, and deploy enterprise-scale apps, we'd be happy to support you through **Flex for Enterprise**.

For more information, [contact sales](https://base1.com/contact).


### Does Flex Storefront scale?

Flex Storefront is a mobile app that communicates to the back end through REST APIs. This means that Flex storefronts are decoupled from the back end SAP Commerce Cloud instance; so its nodes can be scaled separately. 

Other scaling considerations such as a Content Delivery Network (CDN) can also be leveraged to help decrease load. Additionally, with access to the native capabilities, you will have the option to cache resources locally on the user’s device.

Flex Storefront is currently powering apps with over 10M monthly active users.

### How do I get support when I run into issues?

If you run into any issues, you can open a ticket in our [GitHub repository](https://github.com/BASE1com/flex-storefront).

If you'd like to speak directly with the team, we'd be happy to assist in our [Discord server](https://discord.gg/F5W8wmJE).

## Flex Commercialization

### How much does Flex cost?

Flex Storefront is **completely free and open source**.

The **Flex for Enterprise** (frontend-as-a-service) offering is available for organizations who need the additional support and tooling required to build, maintain, and deploy enterprise apps in production for the long-term.

For more information on Flex for Enterprise pricing, [contact the team at BASE1](https://base1.com/contact).

### Do I need to sign a contract to obtain a license?

No. The license is embedded in the Flex Storefront codebase.
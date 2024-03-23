---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'SAP Hybris Accelerator UI Deprecation'
pubDate: 2024-03-20
description: 'In this article, we discuss why that’s happening, and what steps you should take to begin planning for the future.'
author: 'Stephen Richter'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["hybris", "sap commerce", "headless"]
---

If you are an SAP Commerce Cloud customer, you may have heard that the Accelerator UI storefronts are being deprecated. In this article, we discuss why that’s happening, and what steps you should take to begin planning for the future.

The Accelerator storefronts are samples, and starting points, for building a transactional B2C or B2B website site in SAP Commerce Cloud. They provide a baseline, so that you can focus on making your product detail page (for example) look right for your business, rather than having to build a product detail page (or product listing page, or homepage, or checkout flow) from scratch.

SAP Commerce Cloud will still offer these sorts of baselines, to be clear–but new ones, in a framework called the Composable Storefront (previously known as Spartacus, and based in AngularJS). What’s being deprecated is, specifically, the set of UI templates based on older technologies (such as JSP and Spring).

## Why is SAP deprecating the Accelerator Storefront UIs?
The SAP Accelerator UIs are outdated and closely tied to the core SAP Commerce Cloud software. This makes updates difficult and costly. Switching to a more modern, flexible approach—where the storefront is separated from the backend—offers several benefits:
- Easier updates without disrupting the store
- Simplified customization without extensive code changes
- More frequent updates for improved functionality
- Increased options for store appearance and features
- Better scalability to handle more customers

By moving away from the old Accelerator UI and adopting this new approach, you can achieve a smoother online shopping experience. This change allows for faster updates to new versions of SAP Commerce Cloud and ensures that the storefront remains minimally disrupted by backend changes. But why is that important?

### Headless: a vision for the future
In today's dynamic retail landscape, meeting evolving customer demands is paramount for eCommerce enterprises. To stay competitive, businesses must have an adaptable technology infrastructure and the agility to innovate swiftly, particularly in enhancing their storefronts.

Decoupling backend systems from frontend experiences is essential for enabling rapid updates without disrupting customer-facing operations. This separation ensures that backend upgrades can be implemented independently, preserving seamless customer interactions on the frontend.

Moreover, decoupling fosters innovation across various customer touchpoints, including desktop, mobile, and emerging platforms like voice technology. By liberating ourselves from reliance on a single tech solution, we unlock a wealth of possibilities to enhance the customer journey and drive business growth.

## When is SAP deprecating the Accelerator Storefronts?
As of the 2205 release of SAP COmmerce Cloud, the following are deprecated:
- Accelerator UIs and associated AddOns
- OCC v1 and OCC v2 template extensions and associated AddOns

The deletion plan is:
- Deletion of Accelerator UIs and associated AddOns is planned for no earlier than H2 2025
- Deletion of the OCC v1 and OCC v2 template extensions and associated AddOns is planned for H2 2023

For more information and details, visit [SAP’s Help Portal](https://help.sap.com/docs/SAP_COMMERCE_CLOUD_PUBLIC_CLOUD/7e47d40a176d48ba914b50957d003804/1f1c6885781a4267a99c5d619d1f1edd.html)

### What is deprecation vs. deletion?
Deprecation means that certain features are flagged as being intended for future deletion. Doing this well ahead of time gives you an opportunity to adjust your SAP Commerce Cloud solution accordingly. 

When, eventually, functionality is deleted, it is removed from SAP Commerce Cloud and no longer provided with the software or supported. The functionality will continue to be fully maintained (covered by update fixes) until deletion.


### What are the modern storefront options?
There are many options when it comes to building great storefront experiences. We will highlight a few of the key enterprise storefront projects that will help you build an amazing customer experience.

#### Desktop Storefronts
1. SAP Composable Storefront (Spartacus)
2. Alokai (former Vue Storefront)
3. Frontastic
4. Salesforce Composable Storefront
5. Front-Commerce
6. Custom

#### Mobile Storefronts
1. Flex Storefront
2. Progressive Web App (PWA) for mobile
3. Custom built native apps

## How to prepare for deprecation and deletion?
If you are still using Accelerator UI, there are a few steps we would recommend to be prepared for the deprecation and eventual deletion.

1. Evaluate how tightly coupled you are to Accelerator
2. Plan to unlock (OCC or custom) APIs for new storefront
3. Choose a path forward (storefront options)
4. Transition Planning
‍
Ready to start planning for the headless future of your storefront? Let's talk.
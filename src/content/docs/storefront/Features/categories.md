---
title: Categories
description: Learn how to connect and configure a category menu.
---

This documentation guides developers through the process of building an App Category Menu using Flutter, with data fetched from Strapi CMS. The Category Menu will consist of configurable items, each containing a name, image, and destination deeplink to navigate within the app.

## Prerequisites
- Basic understanding of Flutter development.
- Access to a Strapi CMS instance with appropriate content types configured for categories.
- Flutter development environment set up.

## Steps
1. **Set up Strapi CMS**
   - Ensure you have a Strapi CMS instance running.
   - Create a content type named "Category" with fields for:
     - Name: String (for the name of the category)
     - Image: Media (for the image associated with the category)
     - Deeplink: String (for the destination deeplink)
   
2. **Fetch Data from Strapi**
   - Integrate the Flutter http package or any preferred HTTP client to fetch data from your Strapi CMS API.
   - Send a GET request to the appropriate endpoint to retrieve category data.
   - Example:
     ```dart
     import 'dart:convert';
     import 'package:http/http.dart' as http;
     
     Future<List<Category>> fetchCategories() async {
       final response = await http.get('YOUR_STRAPI_API/categories');
     
       if (response.statusCode == 200) {
         // Parse JSON data
         final List<dynamic> jsonData = json.decode(response.body);
         return jsonData.map((category) => Category.fromJson(category)).toList();
       } else {
         throw Exception('Failed to load categories');
       }
     }
     ```

3. **Model Category Data**
   - Define a Category model class to represent category data retrieved from Strapi.
   - Example:
     ```dart
     class Category {
       final String name;
       final String image;
       final String deeplink;
     
       Category({required this.name, required this.image, required this.deeplink});
     
       factory Category.fromJson(Map<String, dynamic> json) {
         return Category(
           name: json['name'],
           image: json['image']['url'],
           deeplink: json['deeplink'],
         );
       }
     }
     ```

4. **Display Category Menu**
   - Utilize Flutter widgets to display the fetched category data in a menu format.
   - Use ListView, GridView, or any preferred layout widget to arrange the category items.
   - Example:
     ```dart
     ListView.builder(
       itemCount: categories.length,
       itemBuilder: (context, index) {
         return ListTile(
           leading: Image.network(categories[index].image),
           title: Text(categories[index].name),
           onTap: () {
             // Navigate to the deeplink destination
             // Example: Navigator.pushNamed(context, categories[index].deeplink);
           },
         );
       },
     )
     ```

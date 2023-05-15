import 'package:coffeeshop/localization/locale_data.dart';
import 'package:coffeeshop/menu_page.dart';
import 'package:coffeeshop/menu_page_web.dart';
import 'package:coffeeshop/viewmodels/all_orders_viewmodel.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      translations: AppMessages(),
      locale: const Locale("en", "US"),
      title: "Coffee Shop Ordering system",
      theme: ThemeData(primarySwatch: Colors.orange),
      home: ChangeNotifierProvider(
        create: (context) => AllOrdersState(),
        child:
            SafeArea(child: isWeb() ? const MenuPageWeb() : const MenuPage()),
      ),
    );
  }

  bool isWeb() {
    return kIsWeb;
  }
}

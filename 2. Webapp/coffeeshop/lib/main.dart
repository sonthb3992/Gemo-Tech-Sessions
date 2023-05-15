import 'package:coffeeshop/domain/concrete/drink_order.dart';
import 'package:coffeeshop/page_new_order.dart';
import 'package:coffeeshop/page_summary.dart';
import 'package:coffeeshop/viewmodels/all_orders_viewmodel.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import './domain/concrete/enums.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => AllOrdersState(),
      child: MaterialApp(
          title: "Coffee Shop Ordering system",
          theme: ThemeData(
            primarySwatch: Colors.orange,
          ),
          home: const SafeArea(child: MenuPage())),
    );
  }
}

class MenuPage extends StatefulWidget {
  const MenuPage({super.key});

  @override
  State<MenuPage> createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  String headerTitle = "All items";
  String filter = "";
  static const List<MenuOption> options = [
    MenuOption.coffee,
    MenuOption.milkTea,
    MenuOption.sandwich,
    MenuOption.bagel,
  ];
  List<MenuOption> filteredOptions = options;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(headerTitle),
      ),
      drawer: CustomDrawer(
        headerTitle: headerTitle,
        filter: filter,
        onItemTap: (String newHeaderTitle, String newFilter) {
          setState(() {
            headerTitle = newHeaderTitle;
            filter = newFilter;
            filteredOptions = options
                .where((element) => element.type == filter || filter == "")
                .toList();
          });
          Navigator.pop(context);
        },
      ),
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return Center(
            child: SizedBox(
              width: 600,
              child: ListView.builder(
                padding: const EdgeInsets.all(8.0),
                itemCount: filteredOptions.length,
                itemBuilder: (context, index) {
                  return SingleItemDisplay(filteredOptions[index]);
                },
              ),
            ),
          );
        },
      ),
      floatingActionButton: const OrderTotal(),
    );
  }
}

class CustomDrawer extends StatefulWidget {
  final String headerTitle;
  final String filter;
  final Function(String, String) onItemTap;

  const CustomDrawer(
      {super.key,
      required this.headerTitle,
      required this.filter,
      required this.onItemTap});

  @override
  State<CustomDrawer> createState() => _CustomDrawerState();
}

class _CustomDrawerState extends State<CustomDrawer> {
  // This is where you put the logic for the Drawer

  // Get the current filter from the widget
  String get currentFilter => widget.filter;

  // Get the current headerTitle from the widget
  String get currentHeaderTitle => widget.headerTitle;

  @override
  Widget build(BuildContext context) {
    // This is where you put the UI for the Drawer
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          const DrawerHeader(
            decoration: BoxDecoration(color: Colors.blue),
            child: Text(
              "Filter",
              style: TextStyle(color: Colors.white, fontSize: 24),
            ),
          ),
          // Here we use widget.onItemTap instead of directly manipulating the state
          ListTile(
            contentPadding: const EdgeInsets.all(8),
            selected: currentFilter == "",
            title: const Text(
              "All items",
              style: TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
            onTap: () => widget.onItemTap("All items", ""),
          ),
          ListTile(
            contentPadding: const EdgeInsets.all(8),
            selected: currentFilter == "drink",
            title: const Text(
              "Drink",
              style: TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
            onTap: () => widget.onItemTap("Drink", "drink"),
          ),
          ListTile(
            contentPadding: const EdgeInsets.all(8),
            selected: currentFilter == "breakfast",
            title: const Text(
              "Breakfast",
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () => widget.onItemTap("Breakfast", "breakfast"),
          ),
        ],
      ),
    );
  }
}

class SingleItemDisplay extends StatelessWidget {
  const SingleItemDisplay(this.menuOption, {super.key});

  final MenuOption menuOption;

  @override
  Widget build(BuildContext context) {
    var state = Provider.of<AllOrdersState>(context);
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: InkWell(
        onTap: () async {
          var result = await Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => OrderPage(order: DrinkOrder(menuOption)),
            ),
          );
          if (result != null) {
            state.addOrder(result);
          }
        },
        child: ListTile(
          leading: menuOption.imageUrl.isNotEmpty
              ? Image(image: NetworkImage(menuOption.imageUrl))
              : const Icon(Icons.image_not_supported),
          title: Text(
            menuOption.name,
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
          ),
          subtitle: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                menuOption.type,
                style:
                    const TextStyle(fontStyle: FontStyle.italic, fontSize: 18),
                textAlign: TextAlign.start,
              ),
              Text(
                "\$${menuOption.basePrice}",
                style:
                    const TextStyle(fontStyle: FontStyle.italic, fontSize: 18),
                textAlign: TextAlign.end,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class OrderTotal extends StatefulWidget {
  const OrderTotal({super.key});

  @override
  State<OrderTotal> createState() => _OrderTotalState();
}

class _OrderTotalState extends State<OrderTotal> {
  @override
  Widget build(BuildContext context) {
    var state = Provider.of<AllOrdersState>(context);
    return ElevatedButton.icon(
      icon: const Icon(
        Icons.paid,
        color: Colors.white,
      ),
      label: Text(
          "${state.getCount()} items, \$${state.getTotal().toStringAsFixed(2)}",
          style: const TextStyle(fontSize: 18, color: Colors.white)),
      onPressed: () async {
        var reset_order = await Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => SummaryPage(),
          ),
        );
        if (reset_order == true) {
          state.resetOrders();
        }
      },
    );
  }
}

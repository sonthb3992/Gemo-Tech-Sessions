class MenuOption {
  final String name;
  final String type;
  final double basePrice;
  final String imageUrl;

  const MenuOption(
      {required this.name,
      required this.type,
      required this.basePrice,
      required this.imageUrl});

  static const coffee = MenuOption(
      name: "Coffee",
      type: "drink",
      basePrice: 2,
      imageUrl:
          "https://minio.thecoffeehouse.com/image/admin/1639377798_ca-phe-den-da_400x400.jpg");
  static const milkTea = MenuOption(
      name: "Milk tea",
      type: "drink",
      basePrice: 2.25,
      imageUrl:
          "https://minio.thecoffeehouse.com/image/admin/hong-tra-sua-tran-chau_326977_400x400.jpg");
  static const sandwich = MenuOption(
      name: "Sandwich",
      type: "breakfast",
      basePrice: 3,
      imageUrl:
          "https://minio.thecoffeehouse.com/image/admin/1638440015_banh-mi-vietnam_400x400.jpg");
  static const bagel = MenuOption(
      name: "Bagel",
      type: "breakfast",
      basePrice: 3,
      imageUrl:
          "https://minio.thecoffeehouse.com/image/admin/1669736956_banh-mi-que-pate_400x400.png");
}

enum DrinkTypeOption {
  none(name: "not set", basePrice: 0),
  hot(name: "hot", basePrice: 0),
  cold(name: "cold", basePrice: 0),
  blended(name: "blended", basePrice: 1);

  const DrinkTypeOption({required this.name, required this.basePrice});

  bool hasSize(DrinkSizeOption size) {
    return (name == "cold" ||
        name == "blended" ||
        size.name == "S" ||
        size.name == "M");
  }

  final String name;
  final double basePrice;
}

enum DrinkSizeOption {
  none(name: "not set", basePrice: 0),
  s(name: "S", basePrice: 0),
  m(name: "M", basePrice: 0.5),
  l(name: "L", basePrice: 1),
  xl(name: "XL", basePrice: 1.5);

  const DrinkSizeOption({required this.name, required this.basePrice});

  final String name;
  final double basePrice;
}

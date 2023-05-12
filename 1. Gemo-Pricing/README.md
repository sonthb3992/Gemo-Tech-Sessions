# ****Coffee Shop Ordering System****

# Overview

The Coffee Shop Ordering System is a program designed to facilitate the ordering process for customers at a coffee shop. It allows customers to place their orders, customize their drinks and breakfast items, and view a detailed bill with the final total.

# **Program Structure**

The program follows an object-oriented design and is implemented using TypeScript. It consists of several classes that interact with each other to manage the ordering process. The main classes in the program include:

- **`Bartender`**: Represents the bartender who handles the orders and interacts with the customers. It initializes the available menu options, manages the order array, and calculates the bill.
- **`AvailableMenuOption`**: Represents an available menu option, such as a drink or a breakfast item. It holds information about the name, type, and base price of the option.
- **`IOrder`**: Defines the interface for an order, specifying the methods that need to be implemented by order classes.
- **`Order`**: An abstract class that implements the **`IOrder`** interface and provides basic functionality for an order. It includes methods to get the description and price of the order.
- **`DrinkOrder`**: A class that extends the **`Order`** class and represents a drink order. It includes properties for the serving style, serving size, and base drink option. It allows for customization of the drink order by setting the serving style and serving size, and provides methods to get the description and price of the order.
- **`BreakfastOrder`**: A class that extends the **`Order`** class and represents a breakfast order. It includes a property for the base food option and provides methods to get the description and price of the order.
- **`OrderDecorator`**: An abstract class that extends the **`Order`** class and serves as the base class for decorators. It includes a property for the decorated order and methods to get the description and price of the decorated order.
- Decorator classes (e.g., **`WhippedCreamDecorator`**, **`MilkDecorator`**): These classes extend the **`OrderDecorator`** class and provide specific decorations or customizations for orders. They override the methods to modify the description and price of the decorated order.

# **Order Customization**

The program allows customers to customize their orders based on their preferences. When placing a drink order, customers can select the serving style and serving size from the available options. They can also add additional toppings like whipped cream, milk (regular or almond), and chocolate sauce to their drinks.

For breakfast orders, customers can select the base food item and add specific customizations. For example, they can choose to add turkey to a sandwich or cheese cream to a bagel.

To enable the customization of orders, the program leverages the decorator pattern in conjunction with the `DrinkOrder` and `BreakfastOrder` classes. Within the **`Bartender`** class, specific methods have been implemented to prompt the user for their preferences and dynamically update the corresponding order. This approach allows for seamless customization of drinks and breakfast items by dynamically applying decorators based on the user's choices.

# **Calculating the Total Price**

The program calculates the total price of the order by considering the base price of the menu item option and any additional customizations. **Each decorator class overrides the `getPrice` method to add its own base price to the price of the decorated order.**

When displaying the bill, the program provides a breakdown of each item, including the description and individual price. It also calculates the total price before tax and adds the tax amount based on a predefined tax rate.

# **User Interaction**

The program provides a console-based interface for user interaction. It utilizes the **`prompt-sync`** library to prompt the user for input and display the output.

Customers can select menu options, customize their orders, review the bill. The program ensures that valid inputs are provided for selection and handles any invalid selections with error messages and prompts for re-selection.

# **Program Flow**

Here is an overview of the program flow:

1. The **`Bartender`** class initializes the tax rate, and order array.
2. The **`TakingOrders`** method in the **`Bartender`** class allows customers to place their orders. It prompts the user for each order and adds it to the order array. Customers can choose to order more items or finalize their orders.
3. The **`TakingOrder`** method in the **`Bartender`** class is responsible for taking an individual order. It displays the available menu options and prompts the user to select a menu item. Based on the selected menu item, it creates an instance of the corresponding order class (e.g., **`DrinkOrder`**, **`BreakfastOrder`**) and prompts the user for customizations, such as serving style, serving size, or specific toppings.
4. The **`PrintBill`** method in the **`Bartender`** class generates and displays the final bill. It calculates the total price, including taxes, for all the orders in the order array. It uses string manipulation and formatting to create a visually appealing bill with item details, prices, and a final total.
5. Throughout the program, appropriate error handling is implemented to validate user input and provide meaningful error messages in case of invalid selections or inputs.

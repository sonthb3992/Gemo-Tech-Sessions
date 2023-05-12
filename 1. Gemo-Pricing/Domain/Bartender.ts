import { AvailableMenuOption } from "./AvailableMenuOption"
import { ServingStyle } from "./ServingStyle"
import { IOrder } from "./Interfaces/IOrder"
import { ServingSize } from "./ServingSize";
import * as promptSync from 'prompt-sync';
import { Order } from "./Oder";
import { ServingStyleDecorator } from "./ServingStyleDecorator";
import { ServingSizeDecorator } from "./ServingSizeDecorator";


export class Bartender {

    private availableOptions: AvailableMenuOption[];
    private availableServingStyles: ServingStyle[];
    private availableServingSize: ServingSize[];
    private orders: IOrder[];


    constructor() {

        // Initialize the list of available drinks
        this.availableOptions = [
            new AvailableMenuOption("Coffee", "drink", 2),
            new AvailableMenuOption("MilkTea", "drink", 2.25),
            new AvailableMenuOption("Sandwich", "food", 3),
            new AvailableMenuOption("Bagel", "food", 3),
        ];

        // Initialize the list of available serving styles
        this.availableServingStyles = [
            new ServingStyle("Hot", 0),
            new ServingStyle("Cold", 0),
            new ServingStyle("Blended", 1),
        ];

        // Initialize the list of available serving styles
        this.availableServingSize = [
            new ServingSize("S", 0),
            new ServingSize("M", 0.5),
            new ServingSize("L", 1),
            new ServingSize("XL", 1.5),
        ];

        this.TakingOrder();
    }


    public TakingOrder(): IOrder | null {

        console.clear();

        // Display available menu options to the user
        console.log("Available Menu Options:");
        this.availableOptions.forEach((menuOption, index) => {
            console.log(`${index + 1}. ${menuOption.getName()} - $${menuOption.getBasePrice()}`);
        });

        const prompt = promptSync();

        // Ask the user to select a menu item
        const selection = prompt("Please select a menu item by entering the corresponding number:");

        const selectedIndex = parseInt(selection);
        if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > this.availableOptions.length) {
            console.log("Invalid selection. Please try again.");
        }

        const selectedMenuOption = this.availableOptions[selectedIndex - 1];
        var order = new Order(selectedMenuOption);

        // If user order a drink, ask for size
        if (order.menuItemOption.getType() == "drink") {
            order = this.AskForServingStyle(order);
            order = this.AskForDrinkSize(order);
        }

        console.log(order.getDescription());

        return order;
    }

    private AskForServingStyle(order: Order): Order {
        console.clear();

        while (true) {

            // Display available menu options to the user
            console.log("Available serving style:");
            this.availableServingStyles.forEach((style, index) => {
                console.log(`${index + 1}. ${style.getName()} - $${style.getBasePrice()}`);
            });

            const prompt = promptSync();

            // Ask the user to select a menu item
            const selection = prompt("Please select a serving style by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > this.availableServingStyles.length) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            const selectedStyle = this.availableServingStyles[selectedIndex - 1];
            order = new ServingStyleDecorator(order, selectedStyle);
            return order;
        }
    }

    private AskForDrinkSize(order: Order): Order {
        console.clear();
        while (true) {

            // Display available menu options to the user
            console.log("Available serving size:");

            this.availableServingSize.forEach((size, index) => {
                console.log(`${index + 1}. ${size.getName()} - +$${size.getBasePrice()}`);
            });


            const prompt = promptSync();

            // Ask the user to select a menu item
            const selection = prompt("Please select a serving size by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > this.availableServingSize.length) {
                console.log("Invalid selection. Please try again.");
                continue;
            }

            const selectedSize = this.availableServingSize[selectedIndex - 1];
            if (!ServingSizeDecorator.hasAvailableSize(order, selectedSize)) {
                console.log("Invalid selection. Please try again.");
                continue;
            }

            order = new ServingSizeDecorator(order, selectedSize);
            return order;
        }
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bartender = void 0;
const AvailableMenuOption_1 = require("./AvailableMenuOption");
const ServingStyle_1 = require("./ServingStyle");
const ServingSize_1 = require("./ServingSize");
const promptSync = require("prompt-sync");
const Oder_1 = require("./Oder");
const ServingStyleDecorator_1 = require("./ServingStyleDecorator");
const ServingSizeDecorator_1 = require("./ServingSizeDecorator");
class Bartender {
    constructor() {
        // Initialize the list of available drinks
        this.availableOptions = [
            new AvailableMenuOption_1.AvailableMenuOption("Coffee", "drink", 2),
            new AvailableMenuOption_1.AvailableMenuOption("MilkTea", "drink", 2.25),
            new AvailableMenuOption_1.AvailableMenuOption("Sandwich", "food", 3),
            new AvailableMenuOption_1.AvailableMenuOption("Bagel", "food", 3),
        ];
        // Initialize the list of available serving styles
        this.availableServingStyles = [
            new ServingStyle_1.ServingStyle("Hot", 0),
            new ServingStyle_1.ServingStyle("Cold", 0),
            new ServingStyle_1.ServingStyle("Blended", 1),
        ];
        // Initialize the list of available serving styles
        this.availableServingSize = [
            new ServingSize_1.ServingSize("S", 0),
            new ServingSize_1.ServingSize("M", 0.5),
            new ServingSize_1.ServingSize("L", 1),
            new ServingSize_1.ServingSize("XL", 1.5),
        ];
        this.TakingOrder();
    }
    TakingOrder() {
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
        var order = new Oder_1.Order(selectedMenuOption);
        // If user order a drink, ask for size
        if (order.menuItemOption.getType() == "drink") {
            order = this.AskForServingStyle(order);
            order = this.AskForDrinkSize(order);
        }
        console.log(order.getDescription());
        return order;
    }
    AskForServingStyle(order) {
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
            order = new ServingStyleDecorator_1.ServingStyleDecorator(order, selectedStyle);
            return order;
        }
    }
    AskForDrinkSize(order) {
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
            if (!ServingSizeDecorator_1.ServingSizeDecorator.hasAvailableSize(order, selectedSize)) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            order = new ServingSizeDecorator_1.ServingSizeDecorator(order, selectedSize);
            return order;
        }
    }
}
exports.Bartender = Bartender;
//# sourceMappingURL=Bartender.js.map
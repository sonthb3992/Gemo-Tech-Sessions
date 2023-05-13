import { AvailableMenuOption } from "./AvailableMenuOption"
import { IOrder } from "./Interfaces/IOrder"
import * as promptSync from 'prompt-sync';
import { DrinkOrder } from "./DrinkOrder";
import { WhippedCreamDecorator } from "./WhippedCreamDecorator";
import { MilkDecorator } from "./MilkDecorator";
import { ChocolateDecorator } from "./ChocolateSauceDecorator";
import { BreakfastOrder } from "./BreakfastOrder";
import { TurkeyDecorator } from "./TurkeyDecorator";
import { EggDecorator } from "./EggDecorator";
import { CheeseCreamDecorator } from "./CheeseCreamDecorator";
import { ButterDecorator } from "./ButterDecorator";
import { ServingStyle } from "./ServingStyle";
import { ServingSize } from "./ServingSize";


/**
 * Represents a Bartender who takes orders and prints bills.
 */
export class Bartender {

    private orders: IOrder[];
    private readonly taxRate = 0.0725;

    /**
     ** Prints the bill for the orders.
     */
    public PrintBill() {

        console.clear();
        console.log("YOUR ORDER:")
        var total = 0;
        var s1 = "#";
        var s2 = "Item";
        var s3 = "Price";
        console.log(`${(s1).toString().padEnd(5)}${s2.padEnd(70)}${s3.padStart(15)}`);
        this.orders.forEach((x, index) => {
            console.log(`${(index + 1).toString().padEnd(5)}${x.getDescription().padEnd(70)}${x.getPrice().toFixed(2).padStart(15)}`);
            total += x.getPrice();
        })
        console.log();
        s1 = "TOTAL BEFORE TAX:"
        console.log(`${(s1).toString().padEnd(75)}${total.toFixed(2).padStart(15)}`);
        var tax = total * this.taxRate;
        s1 = "TAX:"
        console.log(`${(s1).toString().padEnd(75)}${tax.toFixed(2).padStart(15)}`);
        s1 = "TOTAL AFTER TAX:"
        total += tax;
        console.log(`${(s1).toString().padEnd(75)}${total.toFixed(2).padStart(15)}`);

        const prompt = promptSync();
        const selection = prompt("Press any key to close.");
    }

    /**
     * Taking order from the customer
     */
    public TakingOrders() {
        this.orders = new Array<IOrder>();
        const prompt = promptSync();

        while (true) {
            console.clear();
            console.log(`You have ordered ${this.orders.length.toString()} item(s).`);
            if (this.orders.length >= 1) {
                console.log("Do you want to order more item?");
                console.log("1: yes");
                console.log("2: no");

                const selection = prompt("Please select by entering the corresponding number: ");
                const selectedIndex = parseInt(selection);
                if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                    console.log("Invalid selection. Please try again.");
                    continue;
                }
                if (selectedIndex == 2)
                    break;
            }
            this.orders.push(this.TakingOrder());
        }
        console.clear();
    }

    /**
     ** Takes an order from the customer.
     * @returns The order taken from the customer.
     */
    public TakingOrder(): IOrder {

        console.clear();
        const prompt = promptSync();

        var selectedIndex = 0;
        while (true) {
            console.log("Available Menu Options:");
            AvailableMenuOption.AvailableOptions.forEach((menuOption, index) => {
                console.log(`${index + 1}. ${menuOption.getName()} - $${menuOption.getBasePrice()}`);
            });
            const selection = prompt("Please select a menu item by entering the corresponding number:");
            selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > AvailableMenuOption.AvailableOptions.length) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            break;
        }

        const selectedMenuOption = AvailableMenuOption.AvailableOptions[selectedIndex - 1];

        var order: IOrder;
        switch (selectedMenuOption.getType()) {
            case "drink":
                order = new DrinkOrder(selectedMenuOption);
                break;
            case "food":
                order = new BreakfastOrder(selectedMenuOption);
                break;
            default:
                break;
        }

        if (order instanceof DrinkOrder) {
            var drinkOrder = order as DrinkOrder;
            order = this.AskForServingStyle(drinkOrder);
            order = this.AskForServingSize(drinkOrder);
            order = this.AddWhippedCream(order);
            order = this.AddMilk(order);
            if (drinkOrder.getServingStyle().getName() == "Hot")
                order = this.AddChocolateSauce(order);
        }
        if (order instanceof BreakfastOrder) {
            var foodOrder = order as BreakfastOrder;
            switch (foodOrder.getBaseFood().getName()) {
                case "Sandwich":
                    order = this.AddTurkey(order);
                    break;
                case "Bagel":
                    order = this.AddCheeseCream(order);
                    break;
                default:
            }
        }
        return order;
    }

    /**
     * Adds cheese cream to the specified order.
     * @param order The order to add cheese cream to.
     * @returns The updated order with cheese cream.
    */
    private AddCheeseCream(order: IOrder): IOrder {
        console.clear();
        while (true) {
            console.log("Do you want to put cheese cream in your bagel instead of butter?");
            console.log("1: yes");
            console.log("2: no");

            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");
            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            return selectedIndex == 1 ? new CheeseCreamDecorator(order) : new ButterDecorator(order);
        }
    }


    /**
    * Adds turkey to the specified order.
    * @param order The order to add turkey to.
    * @returns The updated order with turkey.
    */
    private AddTurkey(order: IOrder): IOrder {
        console.clear();
        while (true) {
            console.log("Do you want to put turkey in your sandwich instead of egg?");
            console.log("1: yes");
            console.log("2: no");

            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            return selectedIndex == 1 ? new TurkeyDecorator(order) : new EggDecorator(order);
        }
    }

    /**
    * Adds chocolate sauce to the specified order.
    * @param order The order to add chocolate sauce to.
    * @returns The updated order with chocolate sauce.
    */
    private AddChocolateSauce(order: IOrder): IOrder {
        console.clear();
        while (true) {
            console.log("Do you want to add chocolate sauce to your drink?");
            console.log("1: yes");
            console.log("2: no");
            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            if (selectedIndex == 2) {
                return order;
            }
            break;
        }

        while (true) {
            console.log("How many pumps do you want to add?");
            const prompt = promptSync();
            const selection = prompt("Please entering the number (1-6):");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 6) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            return new ChocolateDecorator(order, selectedIndex);
        }
    }

    /**
    * Adds milk to the specified order.
    * @param order The order to add milk to.
    * @returns The updated order with milk.
    */
    private AddMilk(order: IOrder): IOrder {
        console.clear();

        while (true) {
            console.log("Do you want to add milk to your drink?");
            console.log("1: yes");
            console.log("2: no");
            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            if (selectedIndex == 2) {
                return order;
            }
            break;
        }

        while (true) {
            console.log("Do you want to add almond milk to your drink (+$0.5)?");
            console.log("1: yes");
            console.log("2: no");
            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            return new MilkDecorator(order, selectedIndex == 1);
        }
    }


    /**
    * Adds whipped cream to the specified order.
    * @param order The order to add whipped cream to.
    * @returns The updated order with whipped cream.
    */
    private AddWhippedCream(order: IOrder): IOrder {

        console.clear();
        while (true) {
            console.log("Do you want whipped cream?");
            console.log("1: yes");
            console.log("2: no");

            const prompt = promptSync();
            const selection = prompt("Please select by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > 2) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            return selectedIndex == 1 ? new WhippedCreamDecorator(order) : order;
        }
    }

    /**
     * Asks the user for the serving style of the drink order.
     * @returns The updated drink order with the serving style set.
     */
    public AskForServingStyle(drinkOrder: DrinkOrder): DrinkOrder {

        console.clear();
        while (true) {

            // Display available menu options to the user
            console.log("Available serving style:");
            ServingStyle.availableServingStyles.forEach((style, index) => {
                console.log(`${index + 1}. ${style.getName()} - $${style.getBasePrice()}`);
            });

            const prompt = promptSync();

            // Ask the user to select a menu item
            const selection = prompt("Please select a serving style by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > ServingStyle.availableServingStyles.length) {
                console.log("Invalid selection. Please try again.");
                continue;
            }
            const selectedStyle = ServingStyle.availableServingStyles[selectedIndex - 1];
            drinkOrder.setServingStyle(selectedStyle);
            return drinkOrder;
        }
    }

    /**
     * Asks the user for the serving size of the drink order.
     * @returns The updated drink order with the serving size set.
     */
    public AskForServingSize(drinkOrder: DrinkOrder): DrinkOrder {
        console.clear();
        while (true) {

            // Display available menu options to the user
            console.log("Available serving size:");

            ServingSize.AvailableServingSizes.forEach((size, index) => {
                console.log(`${index + 1}. ${size.getName()} - +$${size.getBasePrice()}`);
            });

            const prompt = promptSync();

            // Ask the user to select a menu item
            const selection = prompt("Please select a serving size by entering the corresponding number:");

            const selectedIndex = parseInt(selection);
            if (isNaN(selectedIndex) || selectedIndex < 1 || selectedIndex > ServingSize.AvailableServingSizes.length) {
                console.log("Invalid selection. Please try again.");
                continue;
            }

            const selectedSize = ServingSize.AvailableServingSizes[selectedIndex - 1];
            if (!selectedSize.hasSizeAvailable(drinkOrder.getServingStyle())) {
                console.log("Invalid selection. Please try again.");
                continue;
            }

            drinkOrder.setServingSize(selectedSize);
            return drinkOrder;
        }
    }
}
//import { AvailableMenuOption } from "./AvailableMenuOption";
//import { IOrder } from "./Interfaces/IOrder";
///**
// * Represents an abstract Order that implements the IOrder interface.
// */
//export abstract class Order implements IOrder {
//    /**
//     * The selected menu option for this order.
//     */
//    public readonly menuItemOption: AvailableMenuOption;
//    /**
//     * Creates a new Order instance.
//     * @param menuItemOption The selected menu option for this order.
//     */
//    constructor(menuItemOption: AvailableMenuOption) {
//        this.menuItemOption = menuItemOption;
//    }
//    /**
//     * Retrieves the selected menu option for this order.
//     * @returns The selected menu option.
//     */
//    public getMenuItemOption(): AvailableMenuOption {
//        return this.menuItemOption;
//    }
//    /**
//     * Retrieves the description of the order.
//     * Subclasses must implement this method.
//     * @returns The description of the order.
//     */
//    public abstract getDescription(): string;
//    /**
//     * Retrieves the price of the order.
//     * Subclasses must implement this method.
//     * @returns The price of the order.
//     */
//    public abstract getPrice(): number;
//}
//# sourceMappingURL=Oder.js.map
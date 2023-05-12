import { AvailableMenuOption } from "../AvailableMenuOption";
import { IOrder } from "./IOrder";

/**
 * Represents an abstract base class for order decorators that modify an existing order.
 */
export abstract class OrderDecorator implements IOrder {

    /**
     * The decorated order.
     */
    protected decoratedOrder: IOrder;

    /**
     * The menu item option of the decorated order.
     */
    public readonly menuItemOption: AvailableMenuOption;

    /**
     * Creates an instance of OrderDecorator.
     * @param decoratedOrder The order to decorate.
     */
    constructor(decoratedOrder: IOrder) {
        this.decoratedOrder = decoratedOrder;
        this.menuItemOption = decoratedOrder.menuItemOption;
    }

    /**
     * Gets the description of the order decorator.
     * @returns The description of the order decorator.
     */
    public abstract getDescription(): string;

    /**
     * Gets the price of the order decorator.
     * @returns The price of the order decorator.
     */
    public abstract getPrice(): number;

    /**
     * Gets the menu item option of the decorated order.
     * @returns The menu item option of the decorated order.
     */
    public getMenuItemOption(): AvailableMenuOption {
        return this.decoratedOrder.menuItemOption;
    }
}

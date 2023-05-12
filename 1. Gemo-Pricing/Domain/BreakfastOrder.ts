import { AvailableMenuOption } from "./AvailableMenuOption";
import { IOrder } from "./Interfaces/IOrder";

/**
 * Represents a Breakfast Order.
 */
export class BreakfastOrder implements IOrder {
    private baseFood: AvailableMenuOption;

    /**
     * Creates a new instance of the BreakfastOrder class.
     * @param option The base food option for the breakfast order.
     */
    constructor(option: AvailableMenuOption) {
        this.baseFood = option;
    }

    /**
     * Retrieves the description of the breakfast order.
     * @returns The description of the breakfast order.
     */
    public getDescription(): string {
        return `${this.baseFood.getName()}`;
    }

    /**
     * Retrieves the price of the breakfast order.
     * @returns The price of the breakfast order.
     */
    public getPrice(): number {
        const price = this.baseFood.getBasePrice();
        return price;
    }

    /**
     * Retrieves the base food option for the breakfast order.
     * @returns The base food option.
     */
    public getBaseFood(): AvailableMenuOption {
        return this.baseFood;
    }


}

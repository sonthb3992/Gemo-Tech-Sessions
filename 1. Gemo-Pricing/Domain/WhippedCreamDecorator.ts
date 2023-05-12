import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";

/**
 * Represents a Whipped Cream Decorator for an order.
 */
export class WhippedCreamDecorator extends OrderDecorator {
    /**
     * Creates a new instance of the WhippedCreamDecorator class.
     * @param order The order to decorate with whipped cream.
     */
    constructor(order: IOrder) {
        super(order);
        this.basePrice = 0.5;
    }

    /**
     * Retrieves the description of the decorated order with whipped cream.
     * @returns The description of the order with whipped cream.
     */
    public getDescription(): string {
        return `${this.decoratedOrder.getDescription()}, whipped cream`;
    }

    /**
     * Retrieves the price of the decorated order with whipped cream.
     * @returns The price of the order with whipped cream.
     */
    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}

import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";

/**
 * Represents a Turkey Decorator for an order.
 */
export class TurkeyDecorator extends OrderDecorator {
    /**
     * Creates a new instance of the TurkeyDecorator class.
     * @param order The order to decorate with turkey.
     */
    constructor(order: IOrder) {
        super(order);
        this.basePrice = 1;
    }

    /**
     * Retrieves the description of the decorated order with turkey.
     * @returns The description of the order with turkey.
     */
    public getDescription(): string {
        return `${this.decoratedOrder.getDescription()}, with turkey`;
    }

    /**
     * Retrieves the price of the decorated order with turkey.
     * @returns The price of the order with turkey.
     */
    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}

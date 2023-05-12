import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";

/**
 * Represents a Chocolate Decorator for an order.
 */
export class ChocolateDecorator extends OrderDecorator {
    private pumps: number;

    /**
     * Creates a new instance of the ChocolateDecorator class.
     * @param order The order to decorate with chocolate sauce.
     * @param pumps The number of pumps of chocolate sauce to add.
     */
    constructor(order: IOrder, pumps: number) {
        super(order);
        this.pumps = pumps;
        this.basePrice = Math.max(0, pumps - 2) * 0.5;
    }

    /**
     * Retrieves the description of the decorated order with chocolate sauce.
     * @returns The description of the order with chocolate sauce.
     */
    public getDescription(): string {
        if (this.pumps > 0) {
            return `${this.decoratedOrder.getDescription()}, chocolate sauce (${this.pumps.toString()})`;
        }
        return this.decoratedOrder.getDescription();
    }

    /**
     * Retrieves the price of the decorated order with chocolate sauce.
     * @returns The price of the order with chocolate sauce.
     */
    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}

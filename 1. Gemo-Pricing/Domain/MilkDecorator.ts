import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";

/**
 * Represents a Milk Decorator for an order.
 */
export class MilkDecorator extends OrderDecorator {
    private isAlmondMilk: boolean;

    /**
     * Creates a new instance of the MilkDecorator class.
     * @param order The order to decorate with milk.
     * @param isAlmondMilk Indicates whether almond milk is used.
     */
    constructor(order: IOrder, isAlmondMilk: boolean) {
        super(order);
        this.isAlmondMilk = isAlmondMilk;
        this.basePrice = isAlmondMilk ? 0.5 : 0;
    }

    /**
     * Retrieves the description of the decorated order with milk.
     * @returns The description of the order with milk.
     */
    public getDescription(): string {
        const milk = this.isAlmondMilk ? "almond milk" : "milk";
        return `${this.decoratedOrder.getDescription()}, ${milk}`;
    }

    /**
     * Retrieves the price of the decorated order with milk.
     * @returns The price of the order with milk.
     */
    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}

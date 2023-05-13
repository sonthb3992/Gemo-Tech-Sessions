"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
/**
 * Represents a Milk Decorator for an order.
 */
class MilkDecorator extends OderDecorator_1.OrderDecorator {
    /**
     * Creates a new instance of the MilkDecorator class.
     * @param order The order to decorate with milk.
     * @param isAlmondMilk Indicates whether almond milk is used.
     */
    constructor(order, isAlmondMilk) {
        super(order);
        this.isAlmondMilk = isAlmondMilk;
        this.basePrice = isAlmondMilk ? 0.5 : 0;
    }
    /**
     * Retrieves the description of the decorated order with milk.
     * @returns The description of the order with milk.
     */
    getDescription() {
        const milk = this.isAlmondMilk ? "almond milk" : "milk";
        return `${this.decoratedOrder.getDescription()}, ${milk}`;
    }
    /**
     * Retrieves the price of the decorated order with milk.
     * @returns The price of the order with milk.
     */
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.MilkDecorator = MilkDecorator;
//# sourceMappingURL=MilkDecorator.js.map
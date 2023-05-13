"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
/**
 * Represents a Whipped Cream Decorator for an order.
 */
class WhippedCreamDecorator extends OderDecorator_1.OrderDecorator {
    /**
     * Creates a new instance of the WhippedCreamDecorator class.
     * @param order The order to decorate with whipped cream.
     */
    constructor(order) {
        super(order);
        this.basePrice = 0.5;
    }
    /**
     * Retrieves the description of the decorated order with whipped cream.
     * @returns The description of the order with whipped cream.
     */
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, whipped cream`;
    }
    /**
     * Retrieves the price of the decorated order with whipped cream.
     * @returns The price of the order with whipped cream.
     */
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
//# sourceMappingURL=WhippedCreamDecorator.js.map
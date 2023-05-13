"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurkeyDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
/**
 * Represents a Turkey Decorator for an order.
 */
class TurkeyDecorator extends OderDecorator_1.OrderDecorator {
    /**
     * Creates a new instance of the TurkeyDecorator class.
     * @param order The order to decorate with turkey.
     */
    constructor(order) {
        super(order);
        this.basePrice = 1;
    }
    /**
     * Retrieves the description of the decorated order with turkey.
     * @returns The description of the order with turkey.
     */
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, with turkey`;
    }
    /**
     * Retrieves the price of the decorated order with turkey.
     * @returns The price of the order with turkey.
     */
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.TurkeyDecorator = TurkeyDecorator;
//# sourceMappingURL=TurkeyDecorator.js.map
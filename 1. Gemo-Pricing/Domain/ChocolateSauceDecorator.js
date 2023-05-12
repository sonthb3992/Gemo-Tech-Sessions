"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChocolateDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
/**
 * Represents a Chocolate Decorator for an order.
 */
class ChocolateDecorator extends OderDecorator_1.OrderDecorator {
    /**
     * Creates a new instance of the ChocolateDecorator class.
     * @param order The order to decorate with chocolate sauce.
     * @param pumps The number of pumps of chocolate sauce to add.
     */
    constructor(order, pumps) {
        super(order);
        this.pumps = pumps;
        this.basePrice = Math.max(0, pumps - 2) * 0.5;
    }
    /**
     * Retrieves the description of the decorated order with chocolate sauce.
     * @returns The description of the order with chocolate sauce.
     */
    getDescription() {
        if (this.pumps > 0) {
            return `${this.decoratedOrder.getDescription()}, chocolate sauce (${this.pumps.toString()})`;
        }
        return this.decoratedOrder.getDescription();
    }
    /**
     * Retrieves the price of the decorated order with chocolate sauce.
     * @returns The price of the order with chocolate sauce.
     */
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.ChocolateDecorator = ChocolateDecorator;
//# sourceMappingURL=ChocolateSauceDecorator.js.map
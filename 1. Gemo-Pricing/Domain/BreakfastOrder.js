"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakfastOrder = void 0;
/**
 * Represents a Breakfast Order.
 */
class BreakfastOrder {
    /**
     * Creates a new instance of the BreakfastOrder class.
     * @param option The base food option for the breakfast order.
     */
    constructor(option) {
        this.baseFood = option;
    }
    /**
     * Retrieves the description of the breakfast order.
     * @returns The description of the breakfast order.
     */
    getDescription() {
        return `${this.baseFood.getName()}`;
    }
    /**
     * Retrieves the price of the breakfast order.
     * @returns The price of the breakfast order.
     */
    getPrice() {
        const price = this.baseFood.getBasePrice();
        return price;
    }
    /**
     * Retrieves the base food option for the breakfast order.
     * @returns The base food option.
     */
    getBaseFood() {
        return this.baseFood;
    }
}
exports.BreakfastOrder = BreakfastOrder;
//# sourceMappingURL=BreakfastOrder.js.map
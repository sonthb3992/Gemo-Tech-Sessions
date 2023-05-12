"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServingStyleDecorator = void 0;
const OrderDecorator_1 = require("./Interfaces/OrderDecorator");
/**
 * Represents a decorator that adds serving style to an existing order.
 */
class ServingStyleDecorator extends OrderDecorator_1.OrderDecorator {
    constructor(decoratedOrder, servingStyle) {
        super(decoratedOrder);
        this.servingStyle = servingStyle;
    }
    getDescription() {
        const baseDescription = this.decoratedOrder.getDescription();
        return `${baseDescription}, ${this.servingStyle.getName()}`;
    }
    getPrice() {
        var basePrice = this.decoratedOrder.getPrice();
        basePrice += this.servingStyle.getBasePrice();
        return basePrice;
    }
    getStyle() {
        return this.servingStyle;
    }
}
exports.ServingStyleDecorator = ServingStyleDecorator;
//# sourceMappingURL=ServingStyleDecorator.js.map
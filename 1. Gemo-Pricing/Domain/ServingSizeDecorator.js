"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServingSizeDecorator = void 0;
const OrderDecorator_1 = require("./Interfaces/OrderDecorator");
/**
 * Represents a decorator that adds serving style to an existing order.
 */
class ServingSizeDecorator extends OrderDecorator_1.OrderDecorator {
    constructor(decoratedOrder, servingSize) {
        super(decoratedOrder);
        this.servingSize = servingSize;
    }
    getDescription() {
        const baseDescription = this.decoratedOrder.getDescription();
        return `${baseDescription}, size ${this.servingSize.getName()}`;
    }
    getPrice() {
        var basePrice = this.decoratedOrder.getPrice();
        basePrice += this.servingSize.getBasePrice();
        return basePrice;
    }
    /**
     * Checks if the menuItemOption of the given order is of drink type.
     * @param order The order to check.
     * @returns True if the menuItemOption is of drink type, false otherwise.
     */
    static hasAvailableSize(order, servingSize) {
        if (order.menuItemOption.getType() != "drink")
            return false;
        if (servingSize.getName() == "S" || servingSize.getName() == "M")
            return true;
        var servingStyleDecorator = order;
        if (servingStyleDecorator == null)
            return false;
        var style = servingStyleDecorator.getStyle().getName();
        return (style == "Cold" || style == "Blended");
    }
}
exports.ServingSizeDecorator = ServingSizeDecorator;
//# sourceMappingURL=ServingSizeDecorator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whippedCreamDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class whippedCreamDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order) {
        super(order);
        this.basePrice = 0.5;
    }
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, "whipped cream"`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.whippedCreamDecorator = whippedCreamDecorator;
//# sourceMappingURL=whippedCreamDecorator.js.map
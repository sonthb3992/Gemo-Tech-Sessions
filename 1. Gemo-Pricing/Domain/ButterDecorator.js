"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButterDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class ButterDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order) {
        super(order);
        this.basePrice = 0;
    }
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, with butter`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.ButterDecorator = ButterDecorator;
//# sourceMappingURL=ButterDecorator.js.map
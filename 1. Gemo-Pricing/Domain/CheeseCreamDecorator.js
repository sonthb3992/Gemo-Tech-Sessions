"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheeseCreamDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class CheeseCreamDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order) {
        super(order);
        this.basePrice = 0.5;
    }
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, with cheese cream`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.CheeseCreamDecorator = CheeseCreamDecorator;
//# sourceMappingURL=CheeseCreamDecorator.js.map
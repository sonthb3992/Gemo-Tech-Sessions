"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurkeyDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class TurkeyDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order) {
        super(order);
        this.basePrice = 1;
    }
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, with turkey`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.TurkeyDecorator = TurkeyDecorator;
//# sourceMappingURL=TurkeyDecorator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EggDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class EggDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order) {
        super(order);
        this.basePrice = 0;
    }
    getDescription() {
        return `${this.decoratedOrder.getDescription()}, with egg`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.EggDecorator = EggDecorator;
//# sourceMappingURL=EggDecorator.js.map
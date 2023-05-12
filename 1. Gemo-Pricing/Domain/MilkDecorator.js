"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
const OderDecorator_1 = require("./Interfaces/OderDecorator");
class MilkDecorator extends OderDecorator_1.OrderDecorator {
    constructor(order, isAlmondMilk) {
        super(order);
        this.isAlmondMilk = isAlmondMilk;
        this.basePrice = isAlmondMilk ? 0.5 : 0;
    }
    getDescription() {
        var milk = this.isAlmondMilk ? "almond milk" : "milk";
        return `${this.decoratedOrder.getDescription()}, ${milk}`;
    }
    getPrice() {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}
exports.MilkDecorator = MilkDecorator;
//# sourceMappingURL=MilkDecorator.js.map
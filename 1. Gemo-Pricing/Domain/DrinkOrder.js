"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkOrder = void 0;
class DrinkOrder {
    constructor(option) {
        this.baseDrink = option;
    }
    setServingStyle(servingStyle) {
        this.style = servingStyle;
    }
    setServingSize(servingSize) {
        if (this.style == null)
            throw new Error("Serving Style not set");
        if (servingSize.hasSizeAvailable(this.style))
            this.size = servingSize;
        else
            throw new Error("We don't serve the selected size");
    }
    getServingStyle() {
        return this.style;
    }
    getDescription() {
        var _a, _b;
        return `${this.baseDrink.getName()}, ${(_a = this.style) === null || _a === void 0 ? void 0 : _a.getName()}, size ${(_b = this.size) === null || _b === void 0 ? void 0 : _b.getName()}`;
    }
    getPrice() {
        var price = this.baseDrink.getBasePrice();
        price += this.size.getBasePrice();
        price += this.style.getBasePrice();
        return price;
    }
}
exports.DrinkOrder = DrinkOrder;
//# sourceMappingURL=DrinkOrder.js.map
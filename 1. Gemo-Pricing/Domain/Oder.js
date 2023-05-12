"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(menuItemOption) {
        this.menuItemOption = menuItemOption;
    }
    getMenuItemOption() {
        return this.menuItemOption;
    }
    getDescription() {
        return this.menuItemOption.getName();
    }
    getPrice() {
        return this.menuItemOption.getBasePrice();
    }
}
exports.Order = Order;
//# sourceMappingURL=Oder.js.map
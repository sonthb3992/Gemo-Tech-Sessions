"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDecorator = void 0;
/**
 * Represents an abstract base class for order decorators that modify an existing order.
 */
class OrderDecorator {
    /**
     * Creates an instance of OrderDecorator.
     * @param decoratedOrder The order to decorate.
     */
    constructor(decoratedOrder) {
        this.decoratedOrder = decoratedOrder;
        //    this.menuItemOption = decoratedOrder.menuItemOption;
    }
}
exports.OrderDecorator = OrderDecorator;
//# sourceMappingURL=OrderDecorator.js.map
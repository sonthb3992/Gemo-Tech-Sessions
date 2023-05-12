"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServingSize = void 0;
/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
class ServingSize {
    /**
     * Creates an instance of ServingStyle.
     * @param name The name of the style.
     * @param price The base price of the menu option.
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    /**
     * Gets the name of the menu option.
     * @returns The name of the menu option.
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the base price of the menu option.
     * @returns The base price of the menu option.
     */
    getBasePrice() {
        return this.price;
    }
}
exports.ServingSize = ServingSize;
//# sourceMappingURL=ServingSize.js.map
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
    constructor(name, price, ...acceptStyles) {
        this.name = name;
        this.price = price;
        this.acceptStyle = acceptStyles;
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
    hasSizeAvailable(style) {
        if (this.acceptStyle == null || this.acceptStyle.length == 0)
            return true;
        return this.acceptStyle.includes(style.getName());
    }
}
exports.ServingSize = ServingSize;
ServingSize.AvailableServingSizes = [
    new ServingSize("S", 0),
    new ServingSize("M", 0.5),
    new ServingSize("L", 1, "Cold", "Blended"),
    new ServingSize("XL", 1.5, "Cold", "Blended"),
];
//# sourceMappingURL=ServingSize.js.map
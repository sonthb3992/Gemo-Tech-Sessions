"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServingStyle = void 0;
/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
class ServingStyle {
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
exports.ServingStyle = ServingStyle;
// Initialize the list of available serving styles
ServingStyle.availableServingStyles = [
    new ServingStyle("Hot", 0),
    new ServingStyle("Cold", 0),
    new ServingStyle("Blended", 1),
];
//# sourceMappingURL=ServingStyle.js.map
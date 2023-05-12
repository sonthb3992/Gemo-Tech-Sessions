"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableMenuOption = void 0;
/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
class AvailableMenuOption {
    /**
     * Creates an instance of AvailableMenuOption.
     * @param name The name of the menu option.
     * @param type The type of the menu option (e.g., "drink" or "food").
     * @param basePrice The base price of the menu option.
     */
    constructor(name, type, basePrice) {
        this.name = name;
        this.type = type;
        this.basePrice = basePrice;
    }
    /**
     * Gets the name of the menu option.
     * @returns The name of the menu option.
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the type of the menu option.
     * @returns The type of the menu option.
     */
    getType() {
        return this.type;
    }
    /**
     * Gets the base price of the menu option.
     * @returns The base price of the menu option.
     */
    getBasePrice() {
        return this.basePrice;
    }
}
exports.AvailableMenuOption = AvailableMenuOption;
//# sourceMappingURL=AvailableMenuOption.js.map
/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
export class AvailableMenuOption {
    private name: string;
    private type: string;
    private basePrice: number;

    /**
     * Creates an instance of AvailableMenuOption.
     * @param name The name of the menu option.
     * @param type The type of the menu option (e.g., "drink" or "food").
     * @param basePrice The base price of the menu option.
     */
    constructor(name: string, type: string, basePrice: number) {
        this.name = name;
        this.type = type;
        this.basePrice = basePrice;
    }

    /**
     * Gets the name of the menu option.
     * @returns The name of the menu option.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Gets the type of the menu option.
     * @returns The type of the menu option.
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Gets the base price of the menu option.
     * @returns The base price of the menu option.
     */
    public getBasePrice(): number {
        return this.basePrice;
    }
}


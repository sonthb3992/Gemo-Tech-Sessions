/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
export class ServingStyle {

    // Initialize the list of available serving styles
    public static availableServingStyles = [
        new ServingStyle("Hot", 0),
        new ServingStyle("Cold", 0),
        new ServingStyle("Blended", 1),
    ];


    private name: string;
    private price: number;

    /**
     * Creates an instance of ServingStyle.
     * @param name The name of the style.
     * @param price The base price of the menu option.
     */
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    /**
     * Gets the name of the menu option.
     * @returns The name of the menu option.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Gets the base price of the menu option.
     * @returns The base price of the menu option.
     */
    public getBasePrice(): number {
        return this.price;
    }
}


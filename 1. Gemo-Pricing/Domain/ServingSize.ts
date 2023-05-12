import { ServingStyle } from "./ServingStyle";

/**
 * Represents an available menu option (drink or food) with its name, type, and base price.
 */
export class ServingSize {

    public static AvailableServingSizes = [
        new ServingSize("S", 0),
        new ServingSize("M", 0.5),
        new ServingSize("L", 1, "Cold", "Blended"),
        new ServingSize("XL", 1.5, "Cold", "Blended"),
    ];

    private name: string;
    private price: number;
    private acceptStyle: string[];

    /**
     * Creates an instance of ServingStyle.
     * @param name The name of the style.
     * @param price The base price of the menu option.
     */
    constructor(name: string, price: number, ...acceptStyles: string[]) {
        this.name = name;
        this.price = price;
        this.acceptStyle = acceptStyles;
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

    public hasSizeAvailable(style: ServingStyle) : boolean {
        if (this.acceptStyle == null || this.acceptStyle.length == 0)
            return true;
        return this.acceptStyle.includes(style.getName());
    }
}


/**
 * Represents an interface for an order.
 */
export interface IOrder {
    /**
     * Retrieves the description of the order.
     * Subclasses or implementing classes must implement this method.
     * @returns The description of the order.
     */
    getDescription(): string;

    /**
     * Retrieves the price of the order.
     * Subclasses or implementing classes must implement this method.
     * @returns The price of the order.
     */
    getPrice(): number;
}

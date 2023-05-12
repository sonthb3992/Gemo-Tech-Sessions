import { AvailableMenuOption } from "./AvailableMenuOption";
import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OrderDecorator";
import { ServingStyle } from "./ServingStyle";

/**
 * Represents a decorator that adds serving style to an existing order.
 */
export class ServingStyleDecorator extends OrderDecorator {
    private servingStyle: ServingStyle;

    constructor(decoratedOrder: IOrder, servingStyle: ServingStyle) {
        super(decoratedOrder);
        this.servingStyle = servingStyle;
    }

    public getDescription(): string {
        const baseDescription = this.decoratedOrder.getDescription();
        return `${baseDescription}, ${this.servingStyle.getName()}`;
    }

    public getPrice(): number {
        var basePrice = this.decoratedOrder.getPrice();
        basePrice += this.servingStyle.getBasePrice();
        return basePrice;
    }

    public getStyle(): ServingStyle {
        return this.servingStyle;
    }
}

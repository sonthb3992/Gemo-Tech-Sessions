import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";


export class CheeseCreamDecorator extends OrderDecorator {

    constructor(order: IOrder) {
        super(order);
        this.basePrice = 0.5;
    }

    public getDescription(): string {
        return `${this.decoratedOrder.getDescription()}, with cheese cream`;
    }

    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }
}

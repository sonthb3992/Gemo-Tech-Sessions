import { IOrder } from "./Interfaces/IOrder";
import { OrderDecorator } from "./Interfaces/OderDecorator";


export class EggDecorator extends OrderDecorator {

    constructor(order: IOrder) {
        super(order);
        this.basePrice = 0;
    }

    public getDescription(): string {
        return `${this.decoratedOrder.getDescription()}, with egg`;
    }

    public getPrice(): number {
        return this.decoratedOrder.getPrice() + this.basePrice;
    }

}

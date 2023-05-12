import { AvailableMenuOption } from "./AvailableMenuOption";
import { ServingSize } from "./ServingSize";
import { ServingStyle } from "./ServingStyle";
import * as promptSync from 'prompt-sync';
import { IOrder } from "./Interfaces/IOrder";

export class DrinkOrder implements IOrder {
    
    private size: ServingSize;
    private style: ServingStyle;
    private baseDrink: AvailableMenuOption;


    constructor(option: AvailableMenuOption) {
        this.baseDrink = option;
    }

    public setServingStyle(servingStyle : ServingStyle) {
        this.style = servingStyle;
    }

    public setServingSize(servingSize: ServingSize) {
        if (this.style == null)
            throw new Error("Serving Style not set");
        if (servingSize.hasSizeAvailable(this.style))
            this.size = servingSize;
        else
            throw new Error("We don't serve the selected size");
    }

    public getServingStyle() {
        return this.style;
    }

    public getDescription(): string {
        return `${this.baseDrink.getName()}, ${this.style?.getName()}, size ${this.size?.getName()}`;
    }

    public getPrice(): number {
        var price = this.baseDrink.getBasePrice();
        price += this.size.getBasePrice();
        price += this.style.getBasePrice();
        return price;
    }

}
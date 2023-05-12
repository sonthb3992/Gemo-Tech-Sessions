import { AvailableMenuOption } from "./AvailableMenuOption";
import { IOrder } from "./Interfaces/IOrder";

export class Order implements IOrder{

    public readonly menuItemOption: AvailableMenuOption;

    constructor(menuItemOption: AvailableMenuOption) {
        this.menuItemOption = menuItemOption;
    }

    public getMenuItemOption(): AvailableMenuOption {
        return this.menuItemOption;
    }

    public getDescription(): string {
        return this.menuItemOption.getName();
    }

    public getPrice(): number {
        return this.menuItemOption.getBasePrice();
    }
}

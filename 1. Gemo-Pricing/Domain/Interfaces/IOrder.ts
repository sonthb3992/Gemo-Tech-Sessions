import { AvailableMenuOption } from "../AvailableMenuOption"

export interface IOrder {
    menuItemOption: AvailableMenuOption;
    getDescription(): string;
    getPrice(): number;
}

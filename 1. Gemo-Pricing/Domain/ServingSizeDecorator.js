//import { AvailableMenuOption } from "./AvailableMenuOption";
//import { IOrder } from "./Interfaces/IOrder";
//import { OrderDecorator } from "./Interfaces/OrderDecorator";
//import { ServingSize } from "./ServingSize";
//import { ServingStyleDecorator } from "./ServingStyleDecorator";
///**
// * Represents a decorator that adds serving style to an existing order.
// */
//export class ServingSizeDecorator extends OrderDecorator {
//    private servingSize: ServingSize;
//    constructor(decoratedOrder: IOrder, servingSize: ServingSize) {
//        super(decoratedOrder);
//        this.servingSize = servingSize;
//    }
//    public getDescription(): string {
//        const baseDescription = this.decoratedOrder.getDescription();
//        return `${baseDescription}, size ${this.servingSize.getName()}`;
//    }
//    public getPrice(): number {
//        var basePrice = this.decoratedOrder.getPrice();
//        basePrice += this.servingSize.getBasePrice();
//        return basePrice;
//    }
//    /**
//     * Checks if the menuItemOption of the given order is of drink type.
//     * @param order The order to check.
//     * @returns True if the menuItemOption is of drink type, false otherwise.
//     */
//    public static hasAvailableSize(order: IOrder, servingSize: ServingSize): boolean {
//        if (order.menuItemOption.getType() != "drink")
//            return false;
//        if (servingSize.getName() == "S" || servingSize.getName() == "M")
//            return true;
//        var servingStyleDecorator = order as ServingStyleDecorator;
//        if (servingStyleDecorator == null)
//            return false;
//        var style = servingStyleDecorator.getStyle().getName();
//        return (style == "Cold" || style == "Blended");
//    }
//}
//# sourceMappingURL=ServingSizeDecorator.js.map
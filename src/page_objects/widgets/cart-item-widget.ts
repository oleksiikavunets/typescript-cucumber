import { Selector } from "testcafe";
import { $ } from "../../utils";


export class CartItemsList{

    getItem(index:number){
        return new CartItemWidget(index);
    }
}


class CartItemWidget{
    private itemIndex: number;

    constructor(itemIndex: number) {
        this.itemIndex = itemIndex;
    }

    root() {
        return $('.cart_item').nth(this.itemIndex);
    }

    quantityInput() {
        return $('.cart_quantity_input').nth(this.itemIndex);
    }

    qtyPlusButton() {
        return $('.icon-plus').nth(this.itemIndex);
    }

    qtyMinusButton() {
        return $('.icon-minus').nth(this.itemIndex);
    }

    removeButton() {
        return $('.icon-trash').nth(this.itemIndex);
    }
}
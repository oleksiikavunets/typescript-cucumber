import { CartItemsList } from "./widgets/cart-item-widget";
import { $ } from "../utils";


export class ShoppingCartSummaryPage{

    cartItemsList(){
        return new CartItemsList()
    }

    proceedToCheckoutButton(){
        return $('[class*="standard-checkout"]');
    }
}
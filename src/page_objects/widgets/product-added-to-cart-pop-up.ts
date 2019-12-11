import { $ } from '../../utils';


export class PoductAddedToCartPopUp {
    
    continueShoppingButton(){
        return $('[class*="continue btn"]');
    }
    
    proceedToCheckoutButton() {
        return $('[class*="button-medium"]');
    }
}
import { $ } from '../../utils';
import { Selector } from 'testcafe';


export class ProductList{
    getProduct(index: number) {
        return new ProductItem(index);
    }
}

class ProductItem{
    private productIndex: number;

    constructor(productIndex: number){
        this.productIndex = productIndex;
    }

    root(){
        return $('[class*="product-container"]').nth(this.productIndex);
    }


    addToCartButton(){
        return $('[class*="add_to_cart_button"]').nth(this.productIndex);
    }
}
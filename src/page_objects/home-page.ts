import { $ } from '../utils';

import { PoductAddedToCartPopUp } from './widgets/product-added-to-cart-pop-up';
import { ProductList } from './widgets/product-list';
import { CartWidget } from './widgets/cart-widget';


export class HomePage {
    url() {
        return 'http://automationpractice.com/';
    }

    signInButton() {
        return $('.login');
    }

    searchInput()  {
        return $('#search_query_top');
    }

    searchButton() {
        return $('[name="submit_search"]');
    }

    viewShoppingCartButton(){
        return $('.shopping_cart>a')
    }

    cartWidget(){
        return new CartWidget();
    }

    productsList() {
        return new ProductList();
    }

    productAddedToCartPopUp() {
        return new PoductAddedToCartPopUp()
    }
}
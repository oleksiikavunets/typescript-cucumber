import { Given, When } from 'cucumber';
import { HomePage } from '../page_objects/home-page';


let t: TestController;

const homePage: HomePage = new HomePage();

Given(/^user opens Home page$/, async function() {
    t = await this.waitForTestController();
    return t.navigateTo(homePage.url());
});

When(/^user clicks `Sign In` button$/, async function() {
    await t.click(homePage.signInButton());
});

When(/^user searches "([^"]*)"$/, async function (text) {
    await t.typeText(homePage.searchInput(), text)
        .click(homePage.searchButton());
});

When(/^user adds product (\d+) to cart$/, async function (index) {
    var product  = homePage.productsList().getProduct(index - 1);
    await t.hover(product.root())
            .click(product.addToCartButton())
            .click(homePage.productAddedToCartPopUp().continueShoppingButton());
});

When(/^user proceeds to checkout$/, async function () {
    await t.hover(homePage.viewShoppingCartButton());
    await t.click(homePage.cartWidget().checkoutButton());
});

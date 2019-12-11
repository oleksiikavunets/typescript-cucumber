import { When } from 'cucumber';
import { ShoppingCartSummaryPage } from '../page_objects/shopping-cart-summary-page';


let t: TestController;

const shoppingCartSummaryPage: ShoppingCartSummaryPage = new ShoppingCartSummaryPage();

When(/^user changes product (\d+) quantity to "([^"]*)"$/, async function (index: number, qty: string) {
    t = await this.waitForTestController();
    const qtyInput = shoppingCartSummaryPage.cartItemsList().getItem(index - 1).quantityInput();
    await t.selectText(qtyInput).pressKey('delete').typeText(qtyInput, qty);
});

When(/^product (\d+) quantity should be "([^"]*)"$/, async function (index: number, qty: string) {
    const qtyInput = shoppingCartSummaryPage.cartItemsList().getItem(index - 1).quantityInput();
    await t.expect(qtyInput.value).eql(qty);
});

When(/^user removes product (\d+) from the cart$/, async function (index) {
    await t.click(shoppingCartSummaryPage.cartItemsList().getItem(index - 1).removeButton())
});

When(/^amount of cart items should be (\d+)$/, async function (amount) {
    await t.expect(shoppingCartSummaryPage.cartItemsList().length()).eql(amount);
});

When(/^user clicks `Proceed to checkout` button$/, async function () {
    await t.click(shoppingCartSummaryPage.proceedToCheckoutButton())
});

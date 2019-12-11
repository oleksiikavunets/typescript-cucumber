import { When, Then } from 'cucumber';
import { AuthenticationPage } from '../page_objects/authentication-page';

let t: TestController;

const authenticationPage: AuthenticationPage = new AuthenticationPage();

Then(/^`Authentication page` should be opened$/, async function() {
    t = await this.waitForTestController();
    await t.expect(authenticationPage.isOpened()).ok();
})

When(/^user tries to login using email "([^"]*)" and password "([^"]*)"$/, async function(email: string, pass: string) {
    t = await this.waitForTestController();
    return t.typeText(authenticationPage.loginWidget().emailInput(), email)
        .typeText(authenticationPage.loginWidget().passwordInput(), pass)
        .click(authenticationPage.loginWidget().signInButton())
});

Then(/^error message should be shown$/, async function() {
    t = await this.waitForTestController();
    return t.expect(authenticationPage.errorMessage().visible).ok();
});
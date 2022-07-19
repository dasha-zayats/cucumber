
import { assert } from 'chai'; 
import { Given, When, Then } from "@cucumber/cucumber";
import { MainPage } from "../pages/main.page";


Given(/main page/, async function ({ page }) {
    this.mainPage = new MainPage(page);
    await this.mainPage.open();
});
When(/fill in Login form with short password/, async function () {
    await this.mainPage.login("123456789123", "123");
    this.message = await this.mainPage.getErrorText();
});

Then(/get error message '([^']*)'/, function (expectedAnswer) {
    assert.deepEqual(expectedAnswer,this.message);
});

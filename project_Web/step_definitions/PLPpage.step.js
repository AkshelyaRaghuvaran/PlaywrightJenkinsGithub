const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pageobjects/Pages/LoginPage.js');
const { HomePage } = require('../pageobjects/Pages/HomePage.js');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I am on the PLP page', { timeout: 60 * 1000 }, async function () {
  await loginPage.goTo();
});

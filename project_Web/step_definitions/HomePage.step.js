const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pageobjects/Pages/LoginPage.js');
const { HomePage } = require('../pageobjects/Pages/HomePage.js');

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I am on the login page', { timeout: 60 * 1000 }, async function () {
  await loginPage.goTo();
});

When(
  'I login with {string} and {string}',
  { timeout: 60 * 1000 },
  async function (userName, passWord) {
    await loginPage.validLogin(userName, passWord);
  },
);

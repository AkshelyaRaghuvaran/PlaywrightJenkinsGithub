const { test, expect } = require('@playwright/test');
const { ReportLog } = require('../../../Utils/report-util');
const el = require('../elements/elements');

const objReportLog = new ReportLog();

class LoginPage {
  async goTo() {
    await page.goto('https://www.amazon.com');
    await objReportLog.log('Navigated to the URL');
  }

  async validLogin(userName, passWord) {
    await page.locator(el.loginPage.username).fill(userName);
    await page.locator(el.loginPage.password).fill(passWord);
    await page.locator(el.loginPage.btnLogin).click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(50000);
  }
}

module.exports = { LoginPage };

const { test, expect } = require('@playwright/test');
const { ReportLog } = require('../../../Utils/report-util');
const el = require('../elements/elements');

const objReportLog = new ReportLog();

class HomePage {
  async getModules() {
    const modules = await page.locator(el.homePage.titles).allTextContents();
    await objReportLog.log('Modules are displayed');
    console.log('Modules : ', modules);
    return modules;
  }

  async selectModule(moduleName) {
    const count = await page.locator(el.homePage.titles).count();
    for (let i = 0; i < count; ++i) {
      const text = await page.locator(el.homePage.titles.nth(i)).textContent();
      if (text.trim() === moduleName) {
        await el.homePage.titles.nth(i).click();
        break;
      }
    }
    await objReportLog.log('Module Selected');
  }

  async searchInDropdown() {
    await page.locator(el.homePage.searchIn).click();
    const countDD = await page.locator(el.homePage.searchDD).count();
    for (let j = 0; j < countDD; ++j) {
      const options = await page
        .locator(el.homePage.searchDD.nth(i))
        .textContent();
      if (options.trim() === optionName) {
        await page.locator(el.homePage.searchDD.nth(i)).click();
        break;
      }
    }
  }

  async startSearching(searchText) {
    await page.locator(el.homePage.searchBox).fill(searchText);
    await page.locator(el.homePage.btnGo).click();
    await objReportLog.log('Searched');
    await page.waitForTimeout(50000);
  }
}
module.exports = { HomePage };

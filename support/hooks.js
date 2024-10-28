const playwright = require('@playwright/test');
const { request } = require('@playwright/test');
require('dotenv').config();

const {
  BeforeAll,
  Before,
  After,
  AfterStep,
  BeforeStep,
  Status,
  AfterAll,
} = require('@cucumber/cucumber');
const { afterEach } = require('node:test');

BeforeAll({ timeout: 1000 * 1000 }, async () => {
  let browserType = process.env.browser;

  switch (browserType) {
    case 'chromium':
    case 'chrome':
      global.browser = await playwright.chromium.launch({
        headless: false,
        viewport: null, // This will use the full screen size
      });
      break;
    case 'firefox':
      global.browser = await playwright.firefox.launch({
        headless: false,
        viewport: null, // This will use the full screen size
      });
      break;
    case 'webkit':
      global.browser = await playwright.webkit.launch({
        headless: false,
        viewport: null, // This will use the full screen size
      });
      break;
    case 'msedge':
    case 'edge':
      global.browser = await playwright.chromium.launch({
        headless: false,
        channel: 'msedge',
        viewport: null, // This will use the full screen size
      });
      break;
    default:
      global.browser = await playwright.chromium.launch({
        headless: false,
        viewport: null, // This will use the full screen size
      });
  }

  global.browser = browser;
  global.context = await browser.newContext();
  global.page = await context.newPage();
  // global.page = page;
});

Before({ timeout: 1000 * 1000 }, async function () {});

BeforeStep({ timeout: 60 * 1000 }, async function () {
  await global.page.waitForTimeout(5000);
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    const screenshot = await global.page.screenshot({
      path: './screenshots/screenshot.png',
    });
    this.attach(screenshot, 'image/png');
  }
});

After(async function () {
  await global.page.close();
  await global.context.close();
});

AfterAll(async function () {
  await global.browser.close();
});

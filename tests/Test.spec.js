const {test, expect} = require('@playwright/test');

 test('Client App login', async ({page})=>
 { 
    const userName = page.locator('#loginId');
    const passWord = page.locator('#linkedAccounts_providerUserId0');
    const loginButton = page.locator('#portalSignIn');
    await page.goto('https://lazboyuat.mizecx.com/login.html');
    await page.selectOption('#ssoOption', 'Okta-SAML');
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    await page.locator("(//*[contains(text(), 'Support Request')])[4]").click(); 

 }, {timeout: 60000});
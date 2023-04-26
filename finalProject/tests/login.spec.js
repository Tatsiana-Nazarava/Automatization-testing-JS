const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website`, async function () {
test('11 - should Login with Email', async ({ page }) => {
        const login = new Login(page);
        const header = new Header(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await expect(login.nickname).toContainText('Татьяна_Н');
    });
});

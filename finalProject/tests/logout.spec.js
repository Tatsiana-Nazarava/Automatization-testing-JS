const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const PersonalPage = require('../pageObjects/personalPage');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website - Logout`, async function () {
test('12 - should Sign out', async ({ page }) => {
        const login = new Login(page);
        const header = new Header(page);
        const personalPage = new PersonalPage(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.accountLink.click();
        await personalPage.buttonLogout.click();
        await expect(header.authorizationButton).toContainText('Войти');
    });
});

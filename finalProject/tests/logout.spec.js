const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const PersonalPage = require('../pageObjects/personalPage');

test.describe(`test OZ.by website - Logout`, async function () {
    let mainPage;
    let header;
    let login;
    let personalPage;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        login = new Login(page);
        header = new Header(page);
        personalPage = new PersonalPage(page);
        await mainPage.navigate('https://oz.by/');
    });
    test('12 - should Sign out', async () => {
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.accountLink.click();
        await personalPage.buttonLogout.click();
        await expect(header.authorizationButton).toContainText('Войти');
    });
});

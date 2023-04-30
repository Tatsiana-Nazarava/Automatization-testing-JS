const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let header;
    let login;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        login = new Login(page);
        await mainPage.navigate('https://oz.by/');
    });
    test('11 - should Login with Email', async () => {
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await expect(login.nickname).toContainText('Татьяна_Н');
    });
});

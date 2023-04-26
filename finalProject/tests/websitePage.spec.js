const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website`, async function () {
    test('18 - should contain logo and title', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.logo.isVisible();
        await expect(mainPage.page).toHaveTitle('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    test('19 - should open help page by clicking to the link in header', async ({ page }) => {
        const mainPage = new MainPage(page);
        const topNavMenu = new TopNavMenu(page);
        const header = new Header(page);
        await header.helperLink.click();
        await expect(topNavMenu.breadCrumbLink).toContainText('Помощь');
    });

    test('20 - should open page with sales by clicking to the link in header', async ({ page }) => {
        const mainPage = new MainPage(page);
        const topNavMenu = new TopNavMenu(page);
        const header = new Header(page);
        await header.salesLink.click();
        await expect(topNavMenu.breadCrumbLinkLast).toHaveText('Акции и скидки');
    });

    test('21 - should open page with message window by clicking to the link in header', async ({ page }) => {
        const mainPage = new MainPage(page);
        const topNavMenu = new TopNavMenu(page);
        const header = new Header(page);
        await header.supportLink.click();
        await expect(topNavMenu.breadCrumbLink).toContainText('Напишите нам');
    });
});

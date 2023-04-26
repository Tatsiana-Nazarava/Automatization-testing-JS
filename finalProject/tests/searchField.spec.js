const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website`, async function () {
    test('17 - should open a new page with search results when using the search field', async ({ page }) => {
        const header = new Header(page);
        const searchField = new SearchField(page);
        const topNavMenu = new TopNavMenu(page);
        await header.searchField.click();
        await searchField.findItemsBySearchField('ручки');
        await expect(topNavMenu.breadCrumbLink).toContainText('ручки');
    });
});

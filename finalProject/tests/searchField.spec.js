const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let searchField;
    let header;
    let topNavMenu;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        searchField = new SearchField(page);
        topNavMenu = new TopNavMenu(page);
        await mainPage.navigate('https://oz.by/');
    });
    test('17 - should open a new page with search results when using the search field', async () => {
        await header.searchField.click();
        await searchField.findItemsBySearchField('ручки');
        await expect(topNavMenu.breadCrumbLink).toContainText('ручки');
    });
});

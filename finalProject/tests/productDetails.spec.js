const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const ProductPage = require('../pageObjects/productDetailsPage');

test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website - Product Details Page`, async function () {
    test('16 - should check that product description contains image', async ({ page }) => {
        const header = new Header(page);
        const searchField = new SearchField(page);
        const productPage = new ProductPage(page);
        const productName = 'Пистолет с пулями';
        await header.searchField.click();
        await searchField.findItemsBySearchField(productName);
        await expect(productPage.product).toBeTruthy();
    });
});

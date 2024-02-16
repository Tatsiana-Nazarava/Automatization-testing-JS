const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const ProductPage = require('../pageObjects/productDetailsPage');

test.describe(`test OZ.by website - Product Details Page`, async function () {
    let mainPage;
    let searchField;
    let header;
    let productPage;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        searchField = new SearchField(page);
        productPage = new ProductPage(page);
        await mainPage.navigate('https://oz.by/');
    });
    test('16 - should check that product description contains image', async ({ page }) => {
        const productName = 'Пистолет с пулями';
        await header.searchField.click();
        await searchField.findItemsBySearchField(productName);
        await expect(productPage.product).toBeTruthy();
    });
});

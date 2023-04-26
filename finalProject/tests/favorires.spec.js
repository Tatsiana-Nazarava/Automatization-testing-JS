const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Cookies = require('../pageObjects/components/cookies');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const Favorities = require('../pageObjects/favorites');
const ProductPage = require('../pageObjects/productDetailsPage');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
    const cookies = new Cookies(page);
    await cookies.goToAcceptCookies;
    const login = new Login(page);
    const header = new Header(page);
    const cart = new Cart(page);
    const searchField = new SearchField(page);
    const favorites = new Favorities(page);
    const productName = 'телефон';
    await header.loginIcon.click();
    await login.goToLoginWithEmail();
    await header.searchField.click();
    await searchField.findItemsBySearchField(productName);
    await cart.fillCart();
    await header.cartIcon.click();
    await cart.checkboxInCart.click();
    await favorites.addItemToFavorities();
});

test.describe(`test OZ.by website`, async function () {
    test('7 - should add item to favorites icon counter on the cart page', async function ({ page }) {
        const favorites = new Favorities(page);
        await favorites.buttonConfirmAddToFavorities.click();
        await expect(favorites.counterFavorities).toContainText('1');
    });

    test('8 - should check that added item is on the favorites page', async function ({ page }) {
        const productPage = new ProductPage(page);
        const favorites = new Favorities(page);
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await favorites.lastAddedFavoritiesItem.click();
        await expect(productPage.buttonAlreadyAddedToFavoritesFromProductPage).toContainText('В избранном');
    });

    test('9 - should delete added item from favorites page', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const favorites = new Favorities(page);
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await favorites.lastAddedFavoritiesItem.hover();
        await cart.item.hover();
        await favorites.deleteItemFromFavoritiesPage();
        await expect(favorites.counterFavorities).toContainText('');
    });
});

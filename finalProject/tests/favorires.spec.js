const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Cookies = require('../pageObjects/components/cookies');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const Favorities = require('../pageObjects/favorites');
const ProductPage = require('../pageObjects/productDetailsPage');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let cookies;
    let login;
    let header;
    let cart;
    let searchField;
    let favorites;
    let productPage;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        cookies = new Cookies(page);
        login = new Login(page);
        header = new Header(page);
        cart = new Cart(page);
        searchField = new SearchField(page);
        favorites = new Favorities(page);
        productPage = new ProductPage(page);
        await mainPage.navigate('https://oz.by/');
        await cookies.goToAcceptCookies;
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
    test('7 - should add item to favorites icon counter on the cart page', async function () {
        await favorites.buttonConfirmAddToFavorities.click();
        await expect(favorites.counterFavorities).toContainText('1');
    });

    test('8 - should check that added item is on the favorites page', async function () {
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await favorites.lastAddedFavoritiesItem.click();
        await expect(productPage.buttonAlreadyAddedToFavoritesFromProductPage).toContainText('В избранном');
    });

    test('9 - should delete added item from favorites page', async function () {
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await favorites.lastAddedFavoritiesItem.hover();
        await cart.item.hover();
        await favorites.deleteItemFromFavoritiesPage();
        await expect(favorites.counterFavorities).toContainText('');
    });
});

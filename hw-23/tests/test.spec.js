const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const Favorities = require('../pageObjects/favorites');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website`, async function () {
    test('should contain logo and title', async ({ page }) => {
        await page.locator('.top-panel__logo__item');
        await expect(page).toHaveTitle('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    test('should open a new page with search results when using the search field', async ({ page }) => {
        const header = new Header(page);
        const searchField = new SearchField(page);
        await header.searchField.click();
        await searchField.findItemsBySearchField('ручки');
        await expect(page.locator('.breadcrumbs__inner')).toContainText('ручки');
    });

    test('the cart counter should display the number of items in it after adding them in unauthorized mode', async ({ page }) => {
        const header = new Header(page);
        const searchField = new SearchField(page);
        const cart = new Cart(page);
        await header.searchField.click();
        await searchField.findItemsBySearchField('биология');
        await cart.fillCart();
        await expect(page.locator('.top-panel__userbar__cart__count')).toContainText('1');
        await searchField.findItemsBySearchField('физика');
        await cart.fillCart();
        await expect(page.locator('.top-panel__userbar__cart__count')).toContainText('2');
    });

    test('should Login with Email', async ({ page }) => {
        const login = new Login(page);
        const header = new Header(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await expect(page.locator('//span[@class="top-panel__userbar__user__name"]')).toContainText('Татьяна_Н');
    });

    test('should add items in the cart in authorized mode', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const searchField = new SearchField(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('психология');
        await cart.fillCart();
        await expect(page.locator('.top-panel__userbar__cart__count')).toContainText('1');
    });

    test('should check that the selected product is in the added mode', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const searchField = new SearchField(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('учебник');
        await cart.fillCart();
        await expect(page.locator('.b-product-control__button.i-button.i-button_info.second-button ')).toContainText('Уже в корзине');
    });

    test('should delete the first item in cart', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.cartIcon.click();
        await cart.checkboxInCart.click();
        await cart.deleteFromCart();
        await cart.buttonConfirmDeletionFromCart.click();
        await expect(page.locator('.top-panel__userbar__cart__count')).toContainText('1');
    });

    test('should choose all items from the cart', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });

    test('should deselect all checkboxes for products in the cart', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.dblclick();
        await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });

    test('should cancel deleting all products and close the modal window', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await cart.deleteFromCart();
        await cart.buttonCancelDeletionFromCart.click();
        await expect(page.locator('.top-panel__userbar__cart__item')).toContainText('1');
    });

    test('should delete all chosen items from the cart', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await cart.deleteFromCart();
        await cart.buttonConfirmDeletionFromCart.click();
        await expect(page.locator('.top-panel__userbar__cart__item')).toContainText('');
    });

    test('should add item to favorites icon counter on the cart page', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const favorites = new Favorities(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('Детективы-футболисты');
        await cart.fillCart();
        await header.cartIcon.click();
        await cart.checkboxInCart.click();
        await favorites.addItemToFavorities();
        await favorites.buttonConfirmAddToFavorities.click();
        await expect(favorites.counterFavorities).toContainText('1');
    });

    test('should check that added item is on the favorites page', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const favorites = new Favorities(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('Розовое шампанское');
        await cart.fillCart();
        await header.cartIcon.click();
        await cart.checkboxInCart.click();
        await favorites.addItemToFavorities();
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await expect(favorites.lastAddedFavoritiesItem).toContainText('Розовое шампанское');
    });

    test('should cancel adding item to favorites from cart', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const favorites = new Favorities(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('Estel Prima Blonde');
        await cart.fillCart();
        await header.cartIcon.click();
        await cart.checkboxInCart.click();
        await favorites.addItemToFavorities();
        await favorites.buttonCancelAddToFavorities.click();
        await expect(favorites.counterFavorities).toContainText('2');
    });

    test('should delete added item from favorites page', async function ({ page }) {
        const login = new Login(page);
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const favorites = new Favorities(page);
        await header.loginIcon.click();
        await login.goToLoginWithEmail();
        await header.searchField.click();
        await searchField.findItemsBySearchField('Загадки');
        await cart.fillCart();
        await header.cartIcon.click();
        await cart.checkboxInCart.click();
        await favorites.addItemToFavorities();
        await favorites.buttonConfirmAddToFavorities.click();
        await favorites.goToFavoritiesPage();
        await cart.item.hover();
        await favorites.deleteItemFromFavoritiesPage();
        await expect(favorites.counterFavorities).toContainText('2');
    });
});

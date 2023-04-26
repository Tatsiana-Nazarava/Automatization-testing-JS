const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const ProductPage = require('../pageObjects/productDetailsPage');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
    const login = new Login(page);
    const header = new Header(page);
    await header.loginIcon.click();
    await login.goToLoginWithEmail();
});

test.describe(`test OZ.by website`, async function () {
    test('1 - should add items in the cart', async function ({ page }) {
        const header = new Header(page);
        const searchField = new SearchField(page);
        const cart = new Cart(page);
        await header.searchField.click();
        await searchField.findItemsBySearchField('психология');
        await cart.fillCart();
        await expect(cart.buttonAboutProductAlreadyInCart).toContainText('Уже в корзине');
    });

    test('2 - should check if additional window with recomenations is displayed', async ({ page }) => {
        const header = new Header(page);
        const cart = new Cart(page);
        const searchField = new SearchField(page);
        const productPage = new ProductPage(page);
        const productName = 'шоколад';
        await header.searchField.click();
        await searchField.findItemsBySearchField(productName);
        await cart.fillCart();
        await productPage.checkAdditionalWindowWithRecommends;
      await expect(productPage.nameOfAdditionalWindowWithRecommends).toContainText('Вам может понравиться');
    });

    test('3 - should choose all items from the cart', async function ({ page }) {
        const header = new Header(page);
        const cart = new Cart(page);
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });

    test('4 - should delete all checkboxes for products in the cart', async function ({ page }) {
        const header = new Header(page);
        const cart = new Cart(page);
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.dblclick();
        await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });

    test('5 - should cancel deleting all products and close the modal window', async function ({ page }) {
        const header = new Header(page);
        const cart = new Cart(page);
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await cart.deleteFromCart();
        await cart.buttonCancelDeletionFromCart.click();
        await expect(cart.cartCounter).toContainText('2');
    });

    test('6 - should delete all chosen items from the cart', async function ({ page }) {
        const header = new Header(page);
        const cart = new Cart(page);
        await header.cartIcon.click();
        await cart.checkboxInCartChooseAll.click();
        await cart.deleteFromCart();
        await cart.buttonConfirmDeletionFromCart.click();
        await expect(cart.cartCounter).toContainText('');
    });
});

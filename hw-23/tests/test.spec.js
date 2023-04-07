const { test, expect } = require('@playwright/test');
const MainPage = require('../pageobjects/mainPage');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
  });

test.describe(`test OZ.by website`, async function () {
    test('should contain logo', async ({ page }) => {
      await page.locator('.top-panel__logo__item');
     });

    test('should contain title', async ({ page }) => {
        await expect(page).toHaveTitle('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });

    test('should open a new page with search results when using the search field', async ({ page }) => {
        await page.locator('.top-panel__search__input.ui-autocomplete-input').click();
        await page.locator('.top-panel__search__input.ui-autocomplete-input').fill('книги');
        await page.locator('.top-panel__search__btn').click();
        await expect(page.locator('.breadcrumbs__inner')).toContainText('книги');
        await page.waitForLoadState();
        // await page.waitForTimeout(3000);
    });

    test('should close modal window with text about cookies', async ({ page }) => {
        await expect(page.locator('.popup.bg-light')).toContainText('cookies');
        await page.locator('.btn.btn-sm.btn-outline-tertiary').click();
    });

    test('the cart counter should display the number of items in it after adding them', async ({ page }) => {
        await page.locator('.top-panel__search__input.ui-autocomplete-input').click();
        await page.locator('.top-panel__search__input.ui-autocomplete-input').fill('пазлы');
        await page.locator('.top-panel__search__btn').click();
        await page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(2)').click();
        await expect(page.locator('.b-product.b-product_has-gallery')).toContainText('Пазл "Кот" (100 элементов)');
        await page.locator('.b-product-control__button.i-button.i-button_large.i-button_orange.addtocart-btn.first-button').click();
        await expect(page.locator('.top-panel__userbar__cart__count')).toContainText('1');
    });
});

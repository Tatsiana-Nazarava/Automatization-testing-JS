const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.beforeEach(async ({ page }, testInfo) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website - Navigation Menu`, async function () {
    test('13 - should follow the link selected in the top navigation menu by its name', async ({ page }) => {
        const topNavMenu = new TopNavMenu(page);
        const mainPage = new MainPage(page);
        const linkName = `Книги`;
        await topNavMenu.goToPageWithTopNavMenuLinkName(linkName);
        await expect(mainPage.pageTitleContainText).toContainText(linkName);
    });

    test('14 - should follow the section-link selected in the pop navigation list of topNavMenuLink by section name', async ({ page }) => {
        const topNavMenu = new TopNavMenu(page);
        const linkNameNew = `Детям и мамам`;
        const sectionNameNew = `Развивающие игрушки`;
        await topNavMenu.goToPageWithTopNavMenuSectionLinkName(linkNameNew, sectionNameNew);
        await expect(topNavMenu.breadCrumbLink).toContainText(sectionNameNew);
    });

    test('15 - should go to good page when clicked in the hidden topNavMenu under sandwich button', async ({ page }) => {
        const topNavMenu = new TopNavMenu(page);
        const mainPage = new MainPage(page);
        const linkNameNext = `Сувениры, галантерея`;
        const sandwichLinkNameNext = `Здоровье, медтехника`;
        await topNavMenu.goToPageWithTopNavMenuLinkName(linkNameNext);
        await topNavMenu.sandwichButton.hover();
        await topNavMenu.goToPageWithTopNavMenuLinkName(sandwichLinkNameNext);
        await expect(mainPage.pageTitleContainText).toContainText(sandwichLinkNameNext);
    });
});

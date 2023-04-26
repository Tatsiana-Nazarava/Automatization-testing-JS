const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const TopNavMenu = require('../pageObjects/topNavMenu');
const Footer = require('../pageObjects/components/footer');

test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://oz.by/');
});

test.describe(`test OZ.by website - Footer Menu`, async function () {
    test('10 - should follow the link selected in the footer by its name', async ({ page }) => {
        const footer = new Footer(page);
        const topNavMenu = new TopNavMenu(page);
        const linkName = `Помощь`;
        await footer.goToPageWithFooterLinks(linkName);
        await expect(topNavMenu.breadCrumbLink).toContainText(linkName);
    });
});

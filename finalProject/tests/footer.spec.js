const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const TopNavMenu = require('../pageObjects/topNavMenu');
const Footer = require('../pageObjects/components/footer');

test.describe(`test OZ.by website - Footer Menu`, async function () {
    let mainPage;
    let footer;
    let topNavMenu;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        footer = new Footer(page);
        topNavMenu = new TopNavMenu(page);
        await mainPage.navigate('https://oz.by/');
    });
    test('10 - should follow the link selected in the footer by its name', async () => {
        // const footer = new Footer(page);
        // const topNavMenu = new TopNavMenu(page);
        const linkName = `Помощь`;
        await footer.goToPageWithFooterLinks(linkName);
        await expect(topNavMenu.breadCrumbLink).toContainText(linkName);
    });
});

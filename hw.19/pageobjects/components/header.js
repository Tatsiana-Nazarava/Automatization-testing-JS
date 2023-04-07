const BasePage = require('../basePage');

class Header extends BasePage {
    navbarItem(item) {
        return $(`//a[@class ='navbar__item navbar__link' and text()='${item}']`);
    }

    async checkNavbarItem(item) {
        await this.navbarItem(item).click();
        await browser.pause(5000);
        const urlNew = await browser.getUrl();
        await expect(urlNew).toContain(item.toLowerCase());
        }
}

module.exports = new Header();

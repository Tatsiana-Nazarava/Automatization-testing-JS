class Cookies {
    constructor(page) {
        this.page = page;
        this.cookies = page.locator('#c-dialog');
        this.acceptCookies = page.locator('.button-accept-cookie');
        this.rejectCookies = page.locator('.button-reject-cookie');
    }

    async goToAcceptCookies() {
        const acceptCookies = await this.acceptCookies();
        await this.page.waitForSelector(acceptCookies);
        await this.page.hover(acceptCookies);
        await this.page.click(acceptCookies);
    }
}

module.exports = Cookies;

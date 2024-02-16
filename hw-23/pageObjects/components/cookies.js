class Cookies {
    constructor(page) {
        this.page = page;
        this.cookies = page.locator('#c-dialog');
        this.acceptCookies = page.locator('button-accept-cookie');
        this.rejectCookies = page.locator('button-reject-cookie');
    }

    async closeCookiesWindow() {
        await this.rejectCookies.click();
    }
}

module.exports = Cookies;

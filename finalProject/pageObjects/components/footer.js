class Footer {
    constructor(page) {
        this.page = page;
        this.footerLinks = async (footerLinkName) => {
            return `//a[@class = "footer-full__nav-link" and text() = "${footerLinkName}"]`;
        };
    }

    async goToPageWithFooterLinks(linkName) {
        const footerLinks = await this.footerLinks(linkName);
        await this.page.waitForSelector(footerLinks);
        await this.page.hover(footerLinks);
        await this.page.click(footerLinks);
    }
}

module.exports = Footer;

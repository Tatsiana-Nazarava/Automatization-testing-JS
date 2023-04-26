class TopNavMenu {
    constructor(page) {
        this.page = page;
        this.topNavLinks = async (linkName) => {
            return `//a[@class = "menu-link-action main-nav__list__item " and text() = "${linkName}"]`;
        };
        this.topNavSectionLinks = async (sectionName) => {
            return `//a[@class='global-ppnavlist__header menu-link-action ' and text() = '${sectionName} ']`;
        };
        this.breadCrumbLink = this.page.locator('.breadcrumbs__inner');
        this.breadCrumbLinkLast = this.page.locator('.breadcrumbs__list__li.active.last.a-open  > span');
        this.hiddenTopNavList = '.main-nav__list';
        this.sectionSubLinks = async (sectionSubLinkName) => {
            return `//a[@class = "global-ppnavlist__header menu-link-action " and text() = '${sectionSubLinkName} ']`;
        };
        this.sandwichButton = page.locator('.i-icon-2.i-icon-2_menu');
    }

    async goToPageWithTopNavMenuLinkName(nameOfLinks) {
        const topNavLinks = await this.topNavLinks(nameOfLinks);
        await this.page.waitForSelector(topNavLinks);
        await this.page.hover(topNavLinks);
        await this.page.click(topNavLinks);
    }

    async goToPageWithTopNavMenuSectionLinkName(nameOfLinks, nameOfSectionLink) {
        const topNavLinks = await this.topNavLinks(nameOfLinks);
        const topNavSectionLinks = await this.topNavSectionLinks(nameOfSectionLink);
        await this.page.waitForSelector(topNavLinks);
        await this.page.hover(topNavLinks);
        await this.page.waitForSelector(topNavSectionLinks);
        await this.page.hover(topNavSectionLinks);
        await this.page.click(topNavSectionLinks);
    }
}

module.exports = TopNavMenu;

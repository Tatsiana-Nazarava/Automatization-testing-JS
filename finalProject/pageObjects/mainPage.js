class MainPage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('.top-panel__logo__item');
        this.searchField = page.locator('.top-panel__search__input.ui-autocomplete-input');
        this.pageTitleContainText = page.locator('//h1[@class ="landing-header__title"]');
    }

    async navigate(url) {
        await this.page.goto(url);
    }
}

module.exports = MainPage;

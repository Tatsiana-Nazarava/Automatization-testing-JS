class Header {
    constructor(page) {
        this.page = page;
        this.loginIcon = page.locator('.top-panel__userbar__auth__lbl');
        this.searchField = page.locator('.top-panel__search__input.ui-autocomplete-input');
        this.cartIcon = page.locator('.top-panel__userbar__cart__item');
        this.topMainNavLinks = page.locator('.main-nav');
        this.topMainNavSubLinks = page.locator('//href[@class="menu-link-action main-nav__list__item "]');
        this.helperLink = page.locator('.top-panel__hnav.is-hide-mobile li:nth-child(6)');
        this.salesLink = page.locator('//a[@class = "main-nav__list__item menu-link-action main-nav__list__item_spec" and text() = "Акции и скидки"]');
        this.specialOfferLink = page.locator('.top-panel__hnav__spec');
        this.supportLink = page.locator('.dark.border');
        this.accountLink = page.locator('.top-panel__userbar__user__name');
        this.authorizationButton = page.locator('.top-panel__userbar__auth__lbl');
    }
}

module.exports = Header;

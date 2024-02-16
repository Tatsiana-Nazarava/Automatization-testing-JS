class Header {
    constructor(page) {
        this.page = page;
        this.loginIcon = page.locator('.top-panel__userbar__auth__lbl');
        this.searchField = page.locator('.top-panel__search__input.ui-autocomplete-input');
        this.cartIcon = page.locator('.top-panel__userbar__cart__item');
        this.topMainNavLinks = page.locator('.main-nav');
        this.topMainNavSubLinks = page.locator('//href[@class="menu-link-action main-nav__list__item "]');
        }
}

module.exports = Header;

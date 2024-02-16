class Favorities {
    constructor(page) {
        this.page = page;
        this.buttonAddToFavorities = page.locator('.i-button.i-button_small.addto-favs');
        this.buttonConfirmAddToFavorities = page.locator('.addto-favs-yes');
        this.buttonCancelAddToFavorities = page.locator('.addto-favs-no');
        this.iconFavorities = page.locator('.top-panel__userbar__ppnav__name.is-hide-mobile ');
        this.counterFavorities = page.locator('.top-panel__userbar__favs__count');
        this.lastAddedFavoritiesItem = page.locator('#goods-table li:nth-child(1)');
        this.deleteIconOnFavoritesPage = page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1) .i-icon-2_delete');
        this.confirmDeleteFromFavoritesPage = page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1) .item-type-card__controls-button');
    }

    async addItemToFavorities() {
        await this.page.waitForTimeout(1000);
        await this.buttonAddToFavorities.click();
    }

    async goToFavoritiesPage() {
        await this.page.waitForTimeout(1000);
        await this.iconFavorities.click();
    }

    async deleteItemFromFavorities() {
        await this.buttonAddToFavorities.click();
    }

    async deleteItemFromFavoritiesPage() {
        await this.deleteIconOnFavoritesPage.click();
        await this.confirmDeleteFromFavoritesPage.click();
    }
}

module.exports = Favorities;

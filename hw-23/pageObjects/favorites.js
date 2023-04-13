class Favorities {
    constructor(page) {
        this.page = page;
        this.buttonAddToFavorities = page.locator('.i-button.i-button_small.addto-favs');
        this.buttonConfirmAddToFavorities = page.locator('.addto-favs-yes');
        this.buttonCancelAddToFavorities = page.locator('.addto-favs-no');
        this.iconFavorities = page.locator('.top-panel__userbar__ppnav__name.is-hide-mobile ');
        this.counterFavorities = page.locator('.top-panel__userbar__favs__count');
        this.lastAddedFavoritiesItem = page.locator('#goods-table li:nth-child(1)');
}

    async addItemToFavorities() {
        await this.page.waitForTimeout(2000);
        await this.buttonAddToFavorities.click();
        await this.page.waitForTimeout(2000);
    }

    async goToFavoritiesPage() {
        await this.page.waitForTimeout(2000);
        await this.iconFavorities.click();
        await this.page.waitForTimeout(2000);
    }

    async deleteItemFromFavorities() {
        await this.page.waitForTimeout(2000);
        await this.buttonAddToFavorities.click();
        await this.page.waitForTimeout(2000);
    }

    async deleteItemFromFavoritiesPage() {
        await this.page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1) .i-icon-2_delete').click();
        await this.page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1) .item-type-card__controls-button').click();
    }
}

module.exports = Favorities;

class Cart {
    constructor(page) {
        this.page = page;
        this.item = page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1)');
        this.newItem = page.locator('.b-product-control__button.i-button.i-button_large.i-button_orange.addtocart-btn.first-button');
        this.checkboxInCart = page.locator('.goods-table__body tr:nth-child(2) .i-checkbox.i-checkbox_large');
        this.buttonDeleteFromCart = page.locator('.i-button_small.remove');
        this.messageToConfirmDeletion = page.locator('.goods-table-popup.remove.goods-table-popup_visible');
        this.buttonConfirmDeletionFromCart = page.locator('.remove-yes');
        this.buttonCancelDeletionFromCart = page.locator('.remove-no');
        this.popupHelpInformationLeft = page.locator('.goods-table__cell.goods-table__cell_first .goods-order-help-popup');
        this.popupHelpInformationRight = page.locator('.i-popover_ok.i-popover_right-top.i-popover_visible');
        this.checkboxInCartChooseAll = page.locator('.i-checkbox__real.checkAll');
    }

    async fillCart() {
        await this.item.click();
        await this.newItem.click();
    }

    async chooseItem(itemNumber) {
        await this.item.click(itemNumber);
        await this.newItem.click();
    }

    async deleteFromCart() {
        await this.page.waitForTimeout(2000);
        await this.buttonDeleteFromCart.click();
        await this.page.waitForTimeout(2000);
    }
}

module.exports = Cart;

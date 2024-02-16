class ProductPage {
    constructor(page) {
        this.page = page;
        this.buttonAddToFavoritesFromProductPage = page.locator('//div[@class="b-product__media"]//span[@class="b-product-action__text b-product-action__text_in"]');
        this.buttonAlreadyAddedToFavoritesFromProductPage = page.locator('//div[@class="b-product__media"]//span[@class="b-product-action__text b-product-action__text_out"]');
        this.additionalWindowWithRecommends = page.locator('goods-items-popup goods-items-popup_right goods-items-popup_visible');
        this.nameOfAdditionalWindowWithRecommends = page.locator('//div[@class = "goods-items-popup goods-items-popup_right goods-items-popup_visible"]//span[@class="goods-items-popup__title" and text() = "Вам может понравиться"]');
        this.product = async (productName) => {
            return `img[alt = '${await productName}']`;
        };
    }
    async checkProductContainImage(productName) {
        const product = await this.product(productName);
        await this.page.waitForSelector(product);
        await this.page.hover(product);
    }
    async checkAdditionalWindowWithRecommends() {
        const additionalWindow = await this.additionalWindowWithRecommends;
        await this.page.waitForSelector(additionalWindow);
        await this.page.hover(additionalWindow);
    }
}

module.exports = ProductPage;

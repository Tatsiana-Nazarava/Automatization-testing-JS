const BasePage = require('../basePage');

class Footer extends BasePage {
    footerBlock() {
        return $('//footer');
    }

    chooseLinkWithText(text) {
        return $(`//*[text()="${text}"]`);
    }

    async getTextInFooter(text) {
        await this.footerBlock().waitForDisplayed();
        await this.chooseLinkWithText(text).click();
        }
}

module.exports = new Footer();

const BasePage = require('./basePage');

class PageContent extends BasePage {
    expectedPage() {
        return $(`div.docPage__5DB`);
    }

    letHover(element) {
        return $(`//*[text()="${element}"]`);
    }

    async checkContent(element) {
        await this.expectedPage().waitForDisplayed();
        await this.letHover(element);
        }
}

module.exports = new PageContent();

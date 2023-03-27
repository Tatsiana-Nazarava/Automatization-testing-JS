const BasePage = require('./basePage');

class pageContent extends BasePage {
    navbarItem() {
        return $(`div.navbar__items a:nth-child(7)`)
    }

    chosenPage() {
        return $(`div.container.padding-top--md.padding-bottom--lg`)
    }

    linkName() {
        return $(`//a[@class="table-of-contents__link toc-highlight" and text()="News"]`)
    }

    expectedPage() {
        return $(`div.docPage__5DB`)
    }
    
    getText() {
        return $(`//h2[@class ='anchor anchorWithStickyNavbar_LWe7' and text()="News"]`)
    }

    async checkContent() {
        await this.navbarItem().click();
        await this.chosenPage().waitForDisplayed();
        await this.linkName().click();
        await this.expectedPage().waitForDisplayed();
        await this.getText();
        }
}

module.exports = new pageContent();

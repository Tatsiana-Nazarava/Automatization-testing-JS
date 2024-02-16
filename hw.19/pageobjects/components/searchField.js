const BasePage = require('../basePage');

class SearchField extends BasePage {
    searchField() {
        return $(`span.DocSearch-Button-Placeholder`);
    }

    searchForm(elementName) {
        return $(`input.DocSearch-Input`);
    }

    showResults() {
        return $(`div.DocSearch-Dropdown-Container`);
    }

    chosenResult(elementName) {
        return $('#docsearch-item-0');
    }

    listResultOfChosenElement() {
        return $('div.container.padding-top--md.padding-bottom--lg');
    }

    async goToSearchField(text) {
        await this.searchField().click();
        await this.searchForm().waitForDisplayed();
        await this.searchForm().setValue(text);
        await this.showResults().waitForDisplayed();
        await this.chosenResult().click();
        await this.listResultOfChosenElement().waitForDisplayed();
        }
}

module.exports = new SearchField();

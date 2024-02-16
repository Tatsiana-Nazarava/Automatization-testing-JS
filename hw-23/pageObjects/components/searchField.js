class SearchField {
    constructor(page) {
        this.page = page;
        this.searchField = page.locator('.top-panel__search__input.ui-autocomplete-input');
        this.activeSearchFieldForFinding = page.locator('.top-panel__search__input.ui-autocomplete-input');
        this.searchIcon = page.locator('.top-panel__search__btn');
    }

    async findItemsBySearchField(text) {
        await this.activeSearchFieldForFinding.type(text);
        await this.searchIcon.click();
    }
}

module.exports = SearchField;

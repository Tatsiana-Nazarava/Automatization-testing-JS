class PersonalPage {
    constructor(page) {
        this.page = page;
        this.buttonLogout = page.locator('//a[text() = "Выйти"]');
    }
}

module.exports = PersonalPage;

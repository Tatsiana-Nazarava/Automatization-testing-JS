const BasePage = require('./basePage');

class MainPage extends BasePage {

    get checkIfFrameworkIsForNode() {
    return $('p.hero__subtitle`).getText()).to.contain("test framework for Node.js")');
}
}

module.exports = new MainPage();

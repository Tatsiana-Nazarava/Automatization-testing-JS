const BasePage = require('./basePage');

class Footer extends BasePage {

    footerBlock() {
        return $('//footer');
    }

    getTextInFooter() {
        return $('//div[@class ="footer__copyright" and text()="Copyright © 2023 OpenJS Foundation"]');
    }
}

module.exports = new Footer();

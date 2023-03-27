const { expect } = require('chai');
const pageContent = require('./pageobjects/pageContent');
const mainPage = require('./pageobjects/mainPage');
const searchField = require('./pageobjects/searchField');
const footer = require('./pageobjects/footer');

beforeEach(async () => {
  await mainPage.navigate('https://webdriver.io/');
});

describe('WebdriverIO site', () => {
  it('should check that site is right and used as "test framework for Node.js"', async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it('should display the pages found by the entered word (for example "action") and go to the page of the first result', async () => {
    await searchField.goToSearchField();
  });

  it('should contain world "news" in the title on the Community page', async () => {
    expect(await pageContent.checkContent());
  });

    it('should find text in the footer', async () => {
      await footer.footerBlock();
      await footer.getTextInFooter();
      });
});

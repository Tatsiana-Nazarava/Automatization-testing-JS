const { expect } = require('chai');
const pageContent = require('../pageobjects/pageContent');
const mainPage = require('../pageobjects/mainPage');
const searchField = require('../pageobjects/components/searchField');
const footer = require('../pageobjects/components/footer');
const header = require('../pageobjects/components/header');

beforeEach(async () => {
  await mainPage.navigate('https://webdriver.io/');
});

describe('WebdriverIO site', () => {
  it('should display the pages found by the entered word and go to the page of the first result', async () => {
    await searchField.goToSearchField('each');
  });

  it('should contain chosen world in the text on the page (except for the Blog page)', async () => {
    await header.checkNavbarItem(`Docs`);
    await pageContent.checkContent(`Getting Started`);
  });

    it('should find text in the footer and follow the link', async () => {
      await footer.getTextInFooter('Twitter');
      });
});

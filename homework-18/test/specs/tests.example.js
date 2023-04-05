const { expect } = require('chai');

describe('WebdriverIO site', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('main title should contain text "test framework for Node.js"', async () => {
    expect(await $(`p.hero__subtitle`).getText()).to.contain('test framework for Node.js');
  });

  it('should open "actions" page', async () => {
    await $('span.DocSearch-Button-Placeholder').click();
    await $(`input.DocSearch-Input`).waitForDisplayed();
    await $(`input.DocSearch-Input`).setValue('action');
    await $(`div.DocSearch-Dropdown-Container`).waitForDisplayed();
    await $('#docsearch-item-0').click();
    await $(`div.container.padding-top--md.padding-bottom--lg`).waitForDisplayed();
    expect(await $('header h1').getText()).to.contain('actions');
  });

  it('should contain world "news" in the url when click news link on the Community page', async () => {
    await $('div.navbar__items a:nth-child(7)').click();
    await $(`div.container.padding-top--md.padding-bottom--lg`).waitForDisplayed();
    await $('//a[@class="table-of-contents__link toc-highlight" and text()="News"]').click();
    await $(`div.docPage__5DB`).waitForDisplayed();
    const url = await browser.getUrl();
    await expect(url).to.contain('news');
   });

    it('should return my browser window size', async () => {
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);
    });

    it('should scroll down and find text', async () => {
      console.log(await browser.execute(() => window.scrollY));
      await browser.scroll(0, 4000);
      console.log(await browser.execute(() => window.scrollY));
      expect(await $('div.footer__copyright').getText()).to.equal('Copyright © 2023 OpenJS Foundation');
  });
});

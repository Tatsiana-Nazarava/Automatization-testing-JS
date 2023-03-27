const { expect } = require('chai');

describe('WebdriverIO site', () => {
  it('should check that site is right and used as "test framework for Node.js"', async () => {
    await mainPage.navigate('https://webdriver.io/');
    });

  it.skip('should open "actions" page', async () => {
    await $('span.DocSearch-Button-Placeholder').click();
    await $(`input.DocSearch-Input`).waitForDisplayed();
    await $(`input.DocSearch-Input`).setValue('action');
    await $(`div.DocSearch-Dropdown-Container`).waitForDisplayed();
    await $('#docsearch-item-0').click();
    await $(`div.container.padding-top--md.padding-bottom--lg`).waitForDisplayed();
    expect(await $('header h1').getText()).to.contain('actions');
  });

  it.skip('should contain world "news" in the url when click news link on the Community page', async () => {
    await $('div.navbar__items a:nth-child(7)').click();
    await $(`div.container.padding-top--md.padding-bottom--lg`).waitForDisplayed();
    await $('//a[@class="table-of-contents__link toc-highlight" and text()="News"]').click();
    await $(`div.docPage__5DB`).waitForDisplayed();
    const url = await browser.getUrl();
    await expect(url).to.contain('news');
   });

    it.skip('should return my browser window size', async () => {
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);
    });

    it.skip('should scroll down and find text', async () => {
      console.log(await browser.execute(() => window.scrollY));
      await browser.scroll(0, 4000);
      console.log(await browser.execute(() => window.scrollY));
      expect(await $('div.footer__copyright').getText()).to.equal('Copyright © 2023 OpenJS Foundation');
  });
});
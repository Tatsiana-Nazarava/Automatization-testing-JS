const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');
const { urlContains } = require("selenium-webdriver/lib/until");

describe('WebDriver test', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts( { implicit: 10000 } );
    });

    after(async () => {
        await driver.quit();
    });

    it('text in title should be ChromeDriver', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const titleText = await driver.findElement(By.css('span.Rn3Z1b.C9DxTc'));
        expect(await titleText.getText()).to.equal('ChromeDriver');
    });

    it('new text in title should be Chrome Extensions', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuItems = await driver.findElements(By.xpath('//ul[@class="K1Ci7d oXBWEc jYxBte"]/li[3]'));
        await menuItems[0].click();
        let titleColor = driver.findElement(By.xpath('//span[@class=" Rn3Z1b"]'));
        await driver.executeScript("arguments[0].style.background='yellow'", titleColor)
        const titleText = await driver.findElement(By.xpath('//span[@class=" Rn3Z1b"]'));
        expect(await titleText.getText()).to.equal('Chrome Extensions');
    });

    it('when you type "driver" on the search page, the first link should contain the word driver', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuItems = await driver.findElements(By.xpath('//*[@class="vu8Pwe tCHXDc YSH9J"]'));
        await menuItems[0].click();
        const fieldSearch = await driver.findElement(By.xpath('//div[@class="ndJi5d snByac"]'));
        await driver.actions().move({ origin: fieldSearch }).press().sendKeys('driver').keyDown(Key.ENTER).perform();
        const linksWithResults = await driver.findElements(By.xpath('//div[@class ="lZsZxe"]'));
        expect(await linksWithResults[0].getText()).to.contain('driver')
    });

    it('when going to the page after clicking on the "Mobile Emulation" link in the "Дополнительно" menu, the url should contain /mobile-emulation when', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuItems = await driver.findElements(By.xpath('//ul[@class="K1Ci7d oXBWEc jYxBte"]//li[13]'));
        await menuItems[0].click();
        const menuItems2 = await driver.findElements(By.xpath('//ul[@class="VcS63b"]//li[10]'));
        await menuItems2[0].click();
        const url = driver.getCurrentUrl();
        expect(urlContains('/mobile-emulation'))
    })
})


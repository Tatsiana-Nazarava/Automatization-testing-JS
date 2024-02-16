class Login {
    constructor(page) {
        this.page = page;
        this.loginFormMobile = page.locator('.i-popup__group.i-popup__group_responsive');
        this.loginFormEmail = page.locator('#loginFormLoginEmailLink');
        this.username = page.locator('//div[@class = "i-input-group__cell"]//input[@class = "i-input i-input_full-width i-popup__input"]');
        this.password = page.locator('//input[@tabindex="2"]');
        this.loginButtonForEmailForm = page.locator('//div[@data-tab-content="email"]//button[@class="i-button i-button_full-width i-button_large i-button_primary i-popup__form-button"]');
        this.phoneNumber = page.locator('#formInputLoginPhone');
        this.loginButtonForPhoneForm = page.locator('#phoneForm button');
        this.securityCodeField = page.locator('.i-input.i-input_full-width.i-popup__input.auth-input-code');
        this.buttonConfirmSMS = page.locator('//div[@class ="i-popup__tab-item i-popup__tab-item_active code-sent-state-visible"]//button[@class="i-button i-button_full-width i-button_large i-button_primary i-popup__form-button i-button_disabled"]');
        this.nickname = page.locator('//span[@class="top-panel__userbar__user__name"]');
    }

    async goToLoginWithEmail(username, password) {
        username = 'tatyana_kravec@inbox.ru';
        password = 'HZ63R4';
        await this.loginFormMobile.isEnabled();
        await this.loginFormEmail.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButtonForEmailForm.isEnabled();
        await this.loginButtonForEmailForm.click();
    }
}

module.exports = Login;

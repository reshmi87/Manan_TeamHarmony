const { expect } = require('@playwright/test');
const SigninData = require('../TestData/SigninData.json');

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.userMenuButton = page.getByRole('navigation').locator('div');
        this.upgradenowlink = page.getByRole('button', { name: 'Upgrade now →' });
        this.subscriptionPlansLink = page.getByLabel('', { exact: true }).getByText('Subscription Plans');
        this.dashboardButton = page.getByRole('button', { name: 'Dashboard' });
        this.subscribeNowButton = page.getByRole('button', { name: 'Subscribe Now' });
        this.checkoutContainer = page.getByTestId('checkout-container');
        this.paymentForm = page.locator('#payment-form');
        this.cardNumberField = page.getByRole('textbox', { name: 'Card number' });
        this.expirationField = page.getByRole('textbox', { name: 'Expiration' });
        this.cvcField = page.getByRole('textbox', { name: 'CVC' });
        this.cardholderNameField = page.getByRole('textbox', { name: 'Cardholder name' });
        this.zipField = page.getByRole('textbox', { name: 'ZIP' });
        this.subscribeButton = page.getByTestId('hosted-payment-submit-button');
        this.backArrow = page.getByTestId('business-link');
        this.subscriptionCancelledText = page.getByText('Subscription CancelledYour');
        this.goToDashboardBtn = page.getByRole('button', { name: 'Go to Dashboard' });
        this.viewPlansBtn = page.getByRole('button', { name: 'View Subscription Plans' });
        this.rootLocator = page.locator('#root');
        this.heading = page.getByRole('heading');
        //this.saveInfoCheckbox = page.getByRole('checkbox', { name: 'Save my info for 1-click' });
        this.saveInfoCheckbox = page.getByRole('checkbox', { name: 'Save my information for' });
        this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone number' });
        this.successMessage = page.getByRole('status');
        this.subscriptionStatus = page.getByText('Subscription Status: active');
        this.viewDetailsBtn = page.getByRole('button', { name: 'View Subscription Details' });
    }
     
    async gotoCheckoutPage() {
        await this.dashboardButton.click();
        await this.upgradenowlink.click();
        // await this.userMenuButton.click();
        // await Promise.all([
        //     this.subscriptionPlansLink.click(),
        //     this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        // ]);
        await this.subscribeNowButton.click();
    }

    async verifyCheckoutPageVisible() {
        const data = SigninData.existingUser;
        await expect(this.checkoutContainer).toContainText('BackNumpyNinja FZ LLCTest ModeTestSubscribe to Premium Subscription$19.99per monthUnlimited AI analyses and premium features',{ timeout: 50000 });
        await expect(this.paymentForm).toContainText(data.email);
        await expect(this.subscribeButton).toBeVisible();
    }

    async verifyCheckoutPageforSignedupuser() {
        const data = SigninData.existingUser;
        await expect(this.checkoutContainer).toContainText('BackNumpyNinja FZ LLCTest ModeTestSubscribe to Premium Subscription$19.99per monthUnlimited AI analyses and premium features',{ timeout: 50000 });
        await expect(this.subscribeButton).toBeVisible();
        await expect(this.paymentForm).toContainText(data.emailfromapp);
    }

    async clickPayWithLinkButton() {
        const context = this.page.context();
        await this.page.waitForSelector('iframe[name^="__privateStripeFrame"]', { timeout: 30000 });
        const frames = await this.page.$$('iframe[name^="__privateStripeFrame"]');
            for (const iframeElement of frames) {
            const frame = await iframeElement.contentFrame();
            if (!frame) continue;
            try {
                const button = await frame.getByRole('button', { name: /Pay with Link/i });
                await button.waitFor({ state: 'visible', timeout: 30000 });
                const [popup] = await Promise.all([
                context.waitForEvent('page', { timeout: 30000 }),
                button.click()
                ]);
                await popup.waitForLoadState('domcontentloaded');
                return popup;
            } catch (_) {
                 // Trying next iframe silently
            }
        }
        throw new Error('Popup did not appear after clicking Pay with Link button');
    }
    
    async submitPaymentForm() {
        await this.subscribeButton.click();
    }

    async assertSubscribeButtonIsEnabled() {
        await expect(this.subscribeButton).toBeEnabled();
    }

    async isSubscribeButtonEnabled() {
        return await this.subscribeButton.isEnabled();
    }

    async cardNumberError() {
        await this.page.getByText('Your card number is incomplete.').waitFor();
    }

    async invalidCardError() {
        await this.page.getByText('Your card number is invalid.').waitFor();    
    }

    async cardExpirederror() {
        await this.page.getByText('Your card’s expiration year is in the past.').waitFor();
    }

    async formErrors() {
        return await this.page.locator('div', { hasText: /required/i }).count
    }
        
    async fillCardDetailsfromJson(card) {
        await this.cardNumberField.fill(card.cardNumber || '');
        await this.expirationField.fill(card.expiration || '');
        await this.cvcField.fill(card.cvv || '');
        await this.cardholderNameField.fill(card.cardHolderName || '');
        await this.zipField.fill(card.zipCode || '');
    }

    async submitWithoutCardDetails() {
        await this.cardNumberField.fill('');
        await this.expirationField.fill('');
        await this.cvcField.fill('');
        await this.cardholderNameField.fill('');
        await this.zipField.fill('');
        await this.subscribeButton.click();
    }

    async clickBackArrow() {
        await this.backArrow.click(); 
    }

    async verifySubscriptionCancelledPage() {
        await expect(this.subscriptionCancelledText).toBeVisible();
        await expect(this.goToDashboardBtn).toBeVisible();
        await expect(this.viewPlansBtn).toBeVisible();
        await expect(this.rootLocator).toContainText('Your subscription process was cancelled.');
        await expect(this.heading).toContainText('Subscription Cancelled');
    }

    async uncheckSaveInfoCheckbox() {
        if (await this.saveInfoCheckbox.isChecked()) {
        await this.saveInfoCheckbox.uncheck();
        }
    }

    async checkSaveInfoCheckbox() {
        if (!(await this.saveInfoCheckbox.isChecked())) {
        await this.saveInfoCheckbox.check();
        }
    }

    async isPhoneNumberFieldVisible() {
        return await this.phoneNumberInput.isVisible();
    }


    async toggleSaveInfoCheckbox() {
        if (await this.saveInfoCheckbox.isChecked()) {
         await this.saveInfoCheckbox.uncheck();
        }
        await this.saveInfoCheckbox.check();
    }

    async enterPhoneNumber(phone) {
        await this.phoneNumberInput.click();
        await this.phoneNumberInput.fill(phone);
        await this.subscribeButton.click();
    }
            
    async getErrorMessage() {
        return await this.paymentForm.textContent();
    }

    async verifyPaymentSuccess() {
        await expect(this.successMessage).toContainText('Subscription Activated');
        await expect(this.subscriptionStatus).toBeVisible();
        await expect(this.goToDashboardBtn).toBeVisible();
        await expect(this.viewDetailsBtn).toBeVisible();
    }

    async gotoSubscriptionPage() {
        await this.dashboardButton.click();
        await this.upgradenowlink.click();
    }

    async clickSubscribeNowButton() {
        await this.subscribeNowButton.click();
    }

    async checkoutSubscribe() {
        await this.subscribeButton.click();
    }

}
module.exports = { CheckoutPage };
  
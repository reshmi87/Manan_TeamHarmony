const { expect } = require('@playwright/test');

export class SubscriptionPage {
    constructor(page) {
        this.page = page;
        this.pricingLink = page.getByText('Pricing', { exact: true });
        this.getStartedFreeButton = page.getByRole('button', { name: 'Get Started Free' });
        this.subscribeNowButton = page.getByRole('button', { name: 'Subscribe Now' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.subscribeNowButton = page.getByRole('button', { name: 'Subscribe Now' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.emptyButton = page.getByRole('button').filter({ hasText: /^$/ });
        this.viewPricingPlansButton = page.getByRole('button', { name: 'View Pricing Plans' });
        this.statusRole = page.getByRole('status');
        this.listRole = page.getByRole('list');

    }

   

    // Actions
    async clickPricingLink() {
        await this.pricingLink.click();
    }

    async clickGetStartedFree() {
        await this.getStartedFreeButton.click();
    }

    async closeModal() {
        await this.closeButton.click();
    }

    async clickSubscribeNow() {
         await this.subscribeNowButton.click();
    }
    
    async clickLogin() {
        await this.loginButton.click();
    }

    async clickEmptyButton() {
        await this.emptyButton.click();
    }

    async clickViewPricingPlans() {
        await this.viewPricingPlansButton.click();
    }

    // Assertions
    async expectAuthMessageInList() {
        await expect(this.listRole).toContainText(
            'Authentication RequiredPlease log in to subscribe to PremiumLogin'
        );
    }

    async expectLoginButtonVisible() {
        await expect(this.loginButton).toBeVisible();
    }
    
}
module.exports = { SubscriptionPage };

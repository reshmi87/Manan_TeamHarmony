const { expect } = require('@playwright/test');

export class HomePage {
    constructor(page) {
        this.page = page;
        this.navigationMenu = page.getByText('MananHomeTry NowPricingSign');
        this.Homebutton = page.getByRole('link', { name: 'Home' });
        this.MananLogo = page.getByRole('link', { name: 'Manan' });
        this.tryNowLink = page.getByRole('link', { name: 'Try Now' });
        this.pricingLink = page.getByText('Pricing', { exact: true });
        this.signInLink = page.getByRole('button', { name: 'Sign In' });
        this.tryForFreeButton = page.getByRole('button', { name: 'Try for Free' });
        this.forMedicalProfessionalsButton = page.getByRole('button', { name: 'For Medical Professionals' });
        this.startMedicalTriageAssessmentButton = page.getByRole('button', { name: 'Start Medical Triage Assessment' });
        this.viewPricingPlansButton = page.getByRole('button', { name: 'View pricing plans' });   
        this.popwindow = page.getByRole('dialog', { name: 'Welcome to MANAN' });
        this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to MANAN' });
        this.signInText = page.getByText('Sign in to access your');    
    }   
    async navigateToHomePage() {
       await this.page.goto(process.env.appurl);
    }

    async subscriptionPage() {
        await expect(this.page).toHaveURL(process.env.appurl + 'subscription');
    }
    
    async clickMananLogo() {
        await this.MananLogo.click();
    }
    async clickHomeButton() {
        await this.Homebutton.click();
    }
    async verifyHomepage() {
        await expect(this.navigationMenu).toBeVisible();
        await expect(this.MananLogo).toBeVisible();
        await expect(this.Homebutton).toBeVisible();
    }
    async clickTryNowLink() {
        await this.tryNowLink.click();
    }   
    async clickPricingLink() {
        await this.pricingLink.click();
    }
    async clickSignInLink() {
        await this.signInLink.click();
    }
    async clickTryForFreeButton() {
        await this.tryForFreeButton.click();
    }
    async clickForMedicalProfessionalsButton() {
        await this.forMedicalProfessionalsButton.click();
    }
    async clickStartMedicalTriageAssessmentButton() {
        await this.startMedicalTriageAssessmentButton.click();
    }
    async clickViewPricingPlansButton() {
        await this.viewPricingPlansButton.click();
    }
    async verifyNavigationMenu() {
        await this.navigationMenu.waitFor({ state: 'visible' });
        await expect(this.MananLogo).toBeVisible();
        await expect(this.Homebutton).toBeVisible();
        await expect(this.tryNowLink).toBeVisible();
        await expect(this.pricingLink).toBeVisible();
        await expect(this.signInLink).toBeVisible();   
    }
    async verifyActionButtons() {
        await expect(this.tryForFreeButton).toBeVisible();
        await expect(this.forMedicalProfessionalsButton).toBeVisible();
        await expect(this.startMedicalTriageAssessmentButton).toBeVisible();
        await expect(this.viewPricingPlansButton).toBeVisible();
    }
    async verifyPopUpWindow() {
        await expect(this.popwindow).toBeVisible();
        await expect(this.welcomeHeading).toContainText('Welcome to MANAN');
        await expect(this.signInText).toBeVisible();
    }

}

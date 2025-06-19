import { createBdd } from 'playwright-bdd';
const { HomePage } = require('../PageObject/HomePage.js');

const { Given, When, Then } = createBdd();

let homePage;

Given('The user is on the Home page', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});

Then('The user should see a navigation menu with following links Home, Try now, Pricing, Sign in', async ({}) => {
    await homePage.verifyNavigationMenu();
});

Then('The user should see the following actions buttons Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans', async ({}) => {
    await homePage.verifyActionButtons();
    console.log('User views the Action buttons')
});

When('The user clicks Manan logo', async ({}) => {
    await homePage.clickMananLogo();
    console.log('User clicks MANAN Logo')
});

Then('The user should be redirected to the Home page', async ({}) => {
    await homePage.verifyHomepage();
});

When('The user clicks Home link', async ({}) => {
    await homePage.clickHomeButton();
});

When('The user clicks Sign in link', async ({}) => {
    await homePage.clickSignInLink();
});

Then('The user should see a pop-up window prompting sign-in with a Google account', async ({}) => {
    await homePage.verifyPopUpWindow() 
    console.log('User sees a sign-in popup')
});

When('The user clicks Try for free button', async () => {
    await homePage.clickTryForFreeButton();
});

When('The user clicks For Medical Professionals button', async () => {
    await homePage.clickForMedicalProfessionalsButton();
});

When('The user clicks Try Now link', async () => {
    await homePage.clickTryNowLink();
});

When('The user clicks Pricing link', async () => {
    await homePage.clickPricingLink();
});

Then('The user should be redirected to the Subscription page', async ({ page }) => {
    await homePage.subscriptionPage();
});

When('The user clicks Start Medical Triage Assessment button', async () => {
    await homePage.clickStartMedicalTriageAssessmentButton();
    console.log('User clicks Start Medical Triage Assessment button')
});

When('The user clicks view Pricing plans button', async () => {
    await homePage.clickViewPricingPlansButton();
    console.log('User clicks "View Pricing plans button')
});
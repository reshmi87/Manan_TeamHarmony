import { createBdd } from 'playwright-bdd';
//const { expect } = require('@playwright/test');
const { HomePage } = require('../PageObjects/HomePage.js');
// adjust path as needed

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
});

When('The user clicks Manan logo', async ({}) => {
  await homePage.clickMananLogo();
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
});

When('The user clicks view Pricing plans button', async () => {
  await homePage.clickViewPricingPlansButton();
});




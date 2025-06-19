import { createBdd } from 'playwright-bdd';
//const { expect } = require('@playwright/test');
const { SubscriptionPage } = require('../PageObject/SubscriptionPage.js');
const { HomePage } = require('../PageObject/HomePage.js');
// adjust path as needed

const { Given, When, Then } = createBdd();

let subscriptionPage;
let homePage;

Given('The user is on the Subscription Page', async ({page}) => {
      subscriptionPage = new SubscriptionPage(page);
      homePage = new HomePage(page);
      await homePage.navigateToHomePage();
      await subscriptionPage.clickPricingLink();
});

When('The user clicks Get Started Free button', async ({}) => {
      await subscriptionPage.clickGetStartedFree();
      console.log('User clicks Get started Free Button')
        
});

Then('The user should see a pop-up window prompting sign-in', async ({}) => {
      await homePage.verifyPopUpWindow();
});

When('The user clicks Subscribe now button', async ({}) => {
      await subscriptionPage.clickSubscribeNow();
      console.log('User clicks Subscribe now button')
});

Then('The user should get the pop-up toast notification window with login button to sign-in', async ({}) => {
      await subscriptionPage.expectAuthMessageInList();
      await subscriptionPage.expectLoginButtonVisible();
});

Then('The user should see a pop-up toast notification window with login button to sign-in', async ({}) => {
      await subscriptionPage.expectAuthMessageInList();
      await subscriptionPage.expectLoginButtonVisible();
});
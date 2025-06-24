import { createBdd } from 'playwright-bdd';
//const { expect } = require('@playwright/test');
const { SubscriptionPage } = require('../PageObject/SubscriptionPage.js');
const { HomePage } = require('../PageObject/HomePage.js');
const { CheckoutPage } = require('../PageObject/CheckoutPage.js');
const { SigninWindowPage } = require('../PageObject/SigninWindowPage.js');
const checkoutData = require('../TestData/checkoutData.json'); 

const { Given, When, Then } = createBdd();

let subscriptionPage;
let homePage;
let checkoutPage;
let signinWindowPage;


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

 
Given('The user signs in using a valid username and password from the Signin window', async ({page}) => {
        homePage = new HomePage(page);
        checkoutPage = new CheckoutPage(page);
        signinWindowPage = new SigninWindowPage(page);
        await homePage.clickTryForFreeButton();
        await signinWindowPage.validSigninwithexistingusernamePassword();
        await checkoutPage.gotoSubscriptionPage();
        console.log('User signed in with username password/not logged in via continue with Google option')
});

When('The user attempts to upgrade to a Premium subscription', async ({}) => {
        await checkoutPage.clickSubscribeNowButton();
});

Then('The user should be redirected to the checkout page', async ({}) => {
        await checkoutPage.verifyCheckoutPageforSignedupuser();
        console.log('User Should redirected to checkout process')
});

Given('The user signs in using a valid username and password from the Signin window with random email', async ({page}) => {
        homePage = new HomePage(page);
        checkoutPage = new CheckoutPage(page);
        signinWindowPage = new SigninWindowPage(page);
        await homePage.clickTryForFreeButton();
        await signinWindowPage.validSignUpwithrandomusername();
        await checkoutPage.gotoSubscriptionPage();
});

When('The user submits the payment form with valid credit card information', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        //await checkoutPage.clickSubscribeNowButton();
        await checkoutPage.fillCardDetailsfromJson(checkoutData.validCheckoutData);
        await checkoutPage.uncheckSaveInfoCheckbox();
        await checkoutPage.checkoutSubscribe();
        
});

Then('A confirmation message should appear indicating successful payment', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyPaymentSuccess();
});
import { createBdd } from 'playwright-bdd';
const { expect } = require('@playwright/test');
const { CheckoutPage } = require('../PageObject/CheckoutPage.js');
const { HomePage } = require('../PageObject/HomePage.js');
const { SigninWindowPage } = require('../PageObject/SigninWindowPage.js');
const checkoutData = require('../TestData/checkoutData.json'); 

const { Given, When, Then } = createBdd();


let checkoutPage;
let signinWindowPage;
let homePage;
let popup;

Given('The user is signed in and on the Checkout page', async ({page}) => {
        homePage = new HomePage(page);
        checkoutPage = new CheckoutPage(page);
        signinWindowPage = new SigninWindowPage(page);
        await homePage.clickSignInLink();
        await signinWindowPage.clickContinueWithGoogle();
        await checkoutPage.gotoCheckoutPage();       
});

Then('The checkout page should display the Pay with Link button, user email ID, and the payment method form', async ({}) => {
        await checkoutPage.verifyCheckoutPageVisible();
        console.log('User is in the Checkout Page')
});

When('The user clicks the Pay with Link button', async ({}) => {
        popup = await checkoutPage.clickPayWithLinkButton();
        console.log('User clicks Pay with link button')     
});

Then('A pop-up window should appear prompting the user to log in with their Email ID and proceed to the payment gateway with the Pay button enabled', async ({}) => {
        await expect(popup.getByRole('button', { name: 'Link logo' })).toBeVisible();
        await expect(popup.getByRole('heading', { name: 'Fast, secure, 1-click checkout' })).toBeVisible();
        await expect(popup.getByRole('main')).toContainText('Pay $19.99');
        console.log('User views the popup window for link account')
});

When('The user enters valid credit card information in the payment method form', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.validCheckoutData);        
});

Then('The Subscribe button should be enabled, indicating the form is ready for submission', async ({}) => {
        // const enabled = await checkoutPage.isSubscribeButtonEnabled();
        // if (!enabled) {
        // throw new Error('Subscribe button is not enabled');
        // }
        await checkoutPage.assertSubscribeButtonIsEnabled();
       console.log('User entered valid informations in all field and the ready to submit the payment')
});

When('The user enters a credit card number with a missing digit', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.MissingadigitcardNumber);
        console.log('User entered CC number with a missing digit')
});

Then('An error message should appear indicating that the card number is incomplete', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.cardNumberError();
});

When('The user enters an invalid credit card number', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.InvalidCardNumber);
});

Then('An error message should appear indicating that the card number is invalid', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.invalidCardError();
        console.log('User entered invalid CC number')
});

When('The user enters an expired credit card', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.Invalidexpiration);
});

Then('An error message should appear indicating that the card has expired', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.cardExpirederror();
        console.log('User entered expired CC number')
});

When('The user submits the payment form without entering any credit card information', async ({}) => {
        await checkoutPage.submitWithoutCardDetails();
});

Then('Then an error message should appear indicating that all fields are required', async ({}) => {
        await checkoutPage.formErrors();        
});

When('The user clicks the Subscribe button without entering any card number', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.EmptyCardNumber);
});

Then('The user receives field validation error', async ({}) => {
        await checkoutPage.formErrors();
});

When('The user clicks the Subscribe button without entering cardholder Name', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.MissingCardHolderName);
        console.log('User entering information without Card holder name')
});

When('The user clicks the Back arrow button', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.clickBackArrow(); 
        console.log('User clicks Back arrow') 
});

Then('The user should be redirected to the subscription cancelled page with Go to Dashboard and View Subscription Plans buttons visible', async ({}) => {
        await checkoutPage.verifySubscriptionCancelledPage();
});

When('The user unselects the Save my info for one-click checkout with Link option', async ({}) => {
        await checkoutPage.uncheckSaveInfoCheckbox();
});

Then('The phone number input field should not be visible', async ({}) => {
        const visible = await checkoutPage.isPhoneNumberFieldVisible();
        expect(visible).toBeFalsy(); // false if not visible
});

When('The user selects again the Save my info for one-click checkout with Link option', async ({}) => {
        await checkoutPage.checkSaveInfoCheckbox();  
});

Then('The phone number input field should be visible', async ({}) => {
        const visible = await checkoutPage.isPhoneNumberFieldVisible();
        expect(visible).toBeTruthy(); // true if visible
});

When('The user enters a mobile number with a missing digit', async ({}) => {
        await checkoutPage.toggleSaveInfoCheckbox();
        await checkoutPage.enterPhoneNumber('201555012');
});

Then('An error message should appear indicating that the mobile number is incomplete', async ({}) => {
        const error = await checkoutPage.getErrorMessage();
        expect(error).toContain('incomplete');
});

When('The user enters a mobile number with extra digits', async ({}) => {
        await checkoutPage.enterPhoneNumber('12345678901234'); 
});

Then('An error message should appear indicating the mobile number is invalid and to please ensure the correct country is selected in the dropdown', async ({}) => {
        const error = await checkoutPage.getErrorMessage();
        expect(error).toContain('invalid');
        expect(error).toContain('correct country');
});

When('The user submits the payment form with valid credit card information', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCardDetailsfromJson(checkoutData.validCheckoutData);
});

Then('A confirmation message should appear indicating successful payment', async ({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.verifyPaymentSuccess();
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

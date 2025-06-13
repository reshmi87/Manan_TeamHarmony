import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user is in the Checkout page after clicking upgrade to premium button', async ({}) => {
  // Step: Given The user is in the Checkout page after clicking upgrade to premium button
  // From: tests\Features\CheckoutPage.feature:6:1
});

Then('The user should see checkout page displayed with pay with link button, user\'s provided email ID and payment method form visible', async ({}) => {
  // Step: Then The user should see checkout page displayed with pay with link button, user's provided email ID and payment method form visible
  // From: tests\Features\CheckoutPage.feature:7:1
});

Given('The user is on the checkout page', async ({}) => {
  // Step: Given The user is on the checkout page
  // From: tests\Features\CheckoutPage.feature:10:1
});

When('they click the Pay with Link button', async ({}) => {
  // Step: When they click the Pay with Link button
  // From: tests\Features\CheckoutPage.feature:11:1
});

Then('The user should get a pop-up window to continue the payment process', async ({}) => {
  // Step: Then The user should get a pop-up window to continue the payment process
  // From: tests\Features\CheckoutPage.feature:12:1
});

When('The user enters valid credit card information in the payment method form', async ({}) => {
  // Step: When The user enters valid credit card information in the payment method form
  // From: tests\Features\CheckoutPage.feature:16:1
});

Then('The payment form should be ready for submission', async ({}) => {
  // Step: Then The payment form should be ready for submission
  // From: tests\Features\CheckoutPage.feature:17:1
});

When('The user submits the payment form with valid credit card information', async ({}) => {
  // Step: When The user submits the payment form with valid credit card information
  // From: tests\Features\CheckoutPage.feature:21:1
});

Then('The user should see a confirmation message indicating successful payment', async ({}) => {
  // Step: Then The user should see a confirmation message indicating successful payment
  // From: tests\Features\CheckoutPage.feature:22:1
});

When('The user enters invalid credit card information in the payment method form', async ({}) => {
  // Step: When The user enters invalid credit card information in the payment method form
  // From: tests\Features\CheckoutPage.feature:26:1
});

Then('The user should see an error message indicating payment failure due to invalid details', async ({}) => {
  // Step: Then The user should see an error message indicating payment failure due to invalid details
  // From: tests\Features\CheckoutPage.feature:27:1
});
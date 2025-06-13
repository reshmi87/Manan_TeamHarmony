import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user is on the Subscription Page', async ({}) => {
  // Step: Given The user is on the Subscription Page
  // From: tests\Features\SubscriptionPage.feature:6:1
});

When('The user clicks Get Started Free button', async ({}) => {
  // Step: When The user clicks Get Started Free button
  // From: tests\Features\SubscriptionPage.feature:7:1
});

Then('The user should see a pop-up window prompting sign-in with a Google account', async ({}) => {
  // Step: Then The user should see a pop-up window prompting sign-in with a Google account
  // From: tests\Features\SubscriptionPage.feature:8:1
});

When('The user clicks Subscribe now button', async ({}) => {
  // Step: When The user clicks Subscribe now button
  // From: tests\Features\SubscriptionPage.feature:12:1
});

Then('The user should get the pop-up toast notification window with login button to sign-in', async ({}) => {
  // Step: Then The user should get the pop-up toast notification window with login button to sign-in
  // From: tests\Features\SubscriptionPage.feature:13:1
});
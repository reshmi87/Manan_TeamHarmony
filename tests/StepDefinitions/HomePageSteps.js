import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user is on the Home page', async ({}) => {
  // Step: Given The user is on the Home page
  // From: tests\Features\HomePage.feature:7:1
});

Then('The user should see a navigation menu\\(Home, Try now, Pricing, Sign in)', async ({}) => {
  // Step: Then The user should see a navigation menu(Home, Try now, Pricing, Sign in)
  // From: tests\Features\HomePage.feature:8:1
});

Then('The user should see the actions buttons\\(Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans)', async ({}) => {
  // Step: Then The user should see the actions buttons(Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans)
  // From: tests\Features\HomePage.feature:12:1
});

When('The user clicks Try for free button', async ({}) => {
  // Step: When The user clicks Try for free button
  // From: tests\Features\HomePage.feature:16:1
});

Then('The user should see a pop-up window prompting sign-in with a Google account', async ({}) => {
  // Step: Then The user should see a pop-up window prompting sign-in with a Google account
  // From: tests\Features\HomePage.feature:17:1
});

When('The user clicks For Medical Professionals button', async ({}) => {
  // Step: When The user clicks For Medical Professionals button
  // From: tests\Features\HomePage.feature:21:1
});

When('The user clicks Try Now link', async ({}) => {
  // Step: When The user clicks Try Now link
  // From: tests\Features\HomePage.feature:26:1
});

When('The user clicks Pricing link', async ({}) => {
  // Step: When The user clicks Pricing link
  // From: tests\Features\HomePage.feature:31:1
});

When('The user clicks Start Medical Triage Assessment button', async ({}) => {
  // Step: When The user clicks Start Medical Triage Assessment button
  // From: tests\Features\HomePage.feature:36:1
});

When('The user clicks view Pricing plans button', async ({}) => {
  // Step: When The user clicks view Pricing plans button
  // From: tests\Features\HomePage.feature:41:1
});

Then('The user should be redirected to the Subscription page', async ({}) => {
  // Step: Then The user should be redirected to the Subscription page
  // From: tests\Features\HomePage.feature:42:1
});

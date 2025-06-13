import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user launched the Manan application and logged in successfully', async ({}) => {
  // Step: Given The user launched the Manan application and logged in successfully
  // From: tests\Features\Settings.feature:4:1
});

Given('The user is in the Dashboard page', async ({}) => {
  // Step: Given The user is in the Dashboard page
  // From: tests\Features\Settings.feature:7:1
});

When('The user clicks on the Update settings link from Account settings block', async ({}) => {
  // Step: When The user clicks on the Update settings link from Account settings block
  // From: tests\Features\Settings.feature:8:1
});

Then('User profile information with email id is displayed in the User Profile section in the settings page', async ({}) => {
  // Step: Then User profile information with email id is displayed in the User Profile section in the settings page
  // From: tests\Features\Settings.feature:9:1
});

Then('Notification preferences block with the notification settings is displayed', async ({}) => {
  // Step: Then Notification preferences block with the notification settings is displayed
  // From: tests\Features\Settings.feature:14:1
});

Then('Medical Research block is displayed in settings page', async ({}) => {
  // Step: Then Medical Research block is displayed in settings page
  // From: tests\Features\Settings.feature:19:1
});
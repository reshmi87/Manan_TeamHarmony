import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const DashboardPage  = require("../PageObject/DashboardPage.js");
const SettingsPage = require("../PageObject/SettingsPage.js");

const{Given,When,Then} = createBdd();

// When('The user clicks on the Update settings link from Account settings block', async ({page}) => {
//     const dashboard = new DashboardPage(page);
//     dashboard.clickupdatesettingslink();
// });

Then('User profile information with email id is displayed in the User Profile section in the settings page', async ({page}) => {
  // Step: Then User profile information with email id is displayed in the User Profile section in the settings page
  // From: tests\Features\Settings.feature:9:1
});

Then('Notification preferences block with the notification settings is displayed', async ({page}) => {
  // Step: Then Notification preferences block with the notification settings is displayed
  // From: tests\Features\Settings.feature:14:1
});

Then('Medical Research block is displayed in settings page', async ({page}) => {
  // Step: Then Medical Research block is displayed in settings page
  // From: tests\Features\Settings.feature:19:1
});
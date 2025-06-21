import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const DashboardPage  = require("../PageObject/DashboardPage.js");
const SettingsPage = require("../PageObject/SettingsPage.js");

const{Given,When,Then} = createBdd();

Then('User profile information with email id is displayed in the User Profile section in the settings page', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checkuserprofile();
  await page.pause();
});

Then('Notification preferences block with the notification settings is displayed', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checknotificationpreference();
});

Then('Medical Research block is displayed in settings page', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checkmedicalresearch();
});

Given('The user is in the Settings page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
  await dashboard.clickupdatesettingslink();
  });

When('The user make changes to the Email and App Notifications and clicks on save changes', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.makenotificationchanges();
});

Then('The changes are saved and the user is able to see the changes whenever he comes back to the page.', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checkifnotificationsaved();
});

Given('The user logged in as Google user', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const login = new Login(page);
  await dashboard.launchdashboard();
  await dashboard.clickprofilelink();
  await dashboard.clickprofilelogout();
  await login.Premiumusersignin();
  
});

When('User Navigates to the Settings page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
  await dashboard.clickprofilelink();
  await dashboard.clickprofilesettings();
  
});

Then('All the information are displayed properly for the user signed in through Google Account', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checkuserprofile();
  await setting.checknotificationpreference();
});

Given('The user is in the Settings Page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
  await dashboard.clickupdatesettingslink();
});

When('The user clicks on the link Manan at the top in Settings page', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.clickManan();
});

Then('Self Assessment page is displayed when the clicked on Manan from Settings Page', async ({page}) => {
  const setting = new SettingsPage(page);
  await setting.checkaftermananclick();
});
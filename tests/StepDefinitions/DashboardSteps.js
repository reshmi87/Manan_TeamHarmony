import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const SigninWindowPage = require("../PageObject/SigninWindowPage.js");
const  DashboardPage  = require("../PageObject/DashboardPage.js");

const{Given,When,Then} = createBdd();

Given('The user launched the Manan application and logged in successfully', async ({page}) => {
  const loginpage = new Login(page);
  await loginpage.signintomanan() ;
});

Given('The user is in the Self Assessment page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const textinpage = await dashboard.checkifselfassessmentpage();
  console.log("The user is in the "+textinpage+" page.");
  expect(textinpage).toContain('Multi-Algorithm Navigation and Analysis Node');
});

When('The user clicks on the Dashboard button on the top', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
});

Then('Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checkdashboardpageui();
});

Given('The user is in the Dashboard page', async ({page}) => {
   const dashboard = new DashboardPage(page);
   await dashboard.launchdashboard();
});

When('The user click on the Start New Assessment button in the Welcome block', async ({page}) => {
   const dashboard = new DashboardPage(page);
   await dashboard.clickstartnewassessmentbutton();
});

Then('Self Assessment page is displayed', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const textinpage = await dashboard.checkifselfassessmentpage();
  console.log("The user is in the "+textinpage+" page.");
  expect(textinpage).toContain('Multi-Algorithm Navigation and Analysis Node');
});

When('The user click on the View Previous Assessments button in the Welcome block', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickpreviousassessmentbutton();
});

Then('Previous Assessments page is displayed', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checkpreviousassessmentpage();
});

When('The user clicks on the Start your first assessment link in the Recent Assessment Block.', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickstartyourfirstassessmentlink();
});

When('The user clicks on the Update settings link from Account settings block', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickupdatesettingslink();
});

Then('Settings page is displayed', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checksettingpage();
});

When('The user clicks on Upgrade now link is from Subscription Plans block', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickupgradenowlink();
});

Then('Subscription page is displayed', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checksubscriptionpage();
});

When('The user clicks on the View History link from Assessment History page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickviewhistorylink();
});

When('The user clicks on the Upgrade to Premium button in Analysis usage block.', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickupgradetopremiumbutton();
});

When('The user clicks on the User Profile link on the top right corner', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickprofilelink();
});

Then('User profile with Profile name and email id and options Settings, Previous Assessment, Subscription Plan and Log out are displayed', async ({page}) => {      
  const dashboard = new DashboardPage(page);
  await dashboard.checkprofileoptions();
});

When('The user clicks on Settings from Profile link on the top', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickprofilelink();
  await dashboard.clickprofilesettings();
});

When('The user clicks on Previous Assessment from Profile link', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickprofilelink();
  await dashboard.clickprofilepreviousassess();
});

When('The user clicks on Subscription plan from Profile link', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickprofilelink();
  await dashboard.clickprofilesubscriptionplans();
});

When('The user clicks on Log out from Profile link on the top', async ({page}) => {
 const dashboard = new DashboardPage(page);
  await dashboard.clickprofilelink();
  await dashboard.clickprofilelogout();
});

Then('User is successfully logged out', async ({page}) => {
   const dashboard = new DashboardPage(page);
   await dashboard.checkloggedout();
});

Given('The user signed in to his premium account using Google Sign in', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const login = new Login(page);
  await dashboard.launchdashboard();
  await dashboard.clickprofilelink();
  await dashboard.clickprofilelogout();
  await login.Premiumusersignin();
});

When('The user navigates to the Dashboard page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
});

Then('Every blocks and link in the dashboard page are displayed properly for the Premium user', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checkpremiumaccount();
  await dashboard.clickviewyourplan();
});

Given('The new user signed to Manan application', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const login = new Login(page);
  await dashboard.launchdashboard();
  await dashboard.clickprofilelink();
  await dashboard.clickprofilelogout();
  await login.newusersignin();
});

Then('The graph under Analysis Usage shows the graph properly for new user', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.checkgraphfornewuser();
});
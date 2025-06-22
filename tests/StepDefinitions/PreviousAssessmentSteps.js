import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const DashboardPage  = require("../PageObject/DashboardPage.js");
const {PreviousAssessPage}  = require("../PageObject/PreviousAssessPage.js");
const{Given,When,Then} = createBdd();

Given('The user launched the Manan application system and logged in successfully', async ({page}) => {
  const loginpage = new Login(page);
  await loginpage.signintomanan() ;
});

Given('The user is in the dashboard page', async ({page}) => {
 const dashboard = new DashboardPage(page);
 await dashboard.launchdashboard();
});

When('The user clicks on the Previous assessments button from the dashboard page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.clickpreviousassessmentbutton();
});

Then('The Assessments page is displayed with Your Assessments details', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.checkpreviousassessmentdetails();
  await previousassess.expectedsections(page);
  console.log("I am in the Previous Assessment Page")
});

Given('The user is in the Previous assessments page', async ({page}) => {
 const dashboard = new DashboardPage(page);
 await dashboard.launchdashboard();
 await dashboard.clickpreviousassessmentbutton();
});

When('The user clicks on the latest Emergency Triage level Assessment', async ({page}) => {
 const  previousassess = new PreviousAssessPage(page);
  await previousassess.clickleftwordemergencybutton();
});

Then('All the details for the Emergency Triage level assessments are displayed properly in the Assessment tab on the right pane', async ({page}) => {
   const  previousassess = new PreviousAssessPage(page);
  await previousassess.verifyWordsMatchEmergencyTriage();
});

When('The user clicks on the latest High Triage level Assessment', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.clickleftwordhighbutton();
});

Then('All the details for the High Triage level assessments are displayed properly in the Assessment tab on the right pane', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.verifyWordsMatchHighTriage();
});

When('The user clicks on the latest Medium Triage level Assessment', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.clickleftwordmediumbutton();
});

Then('All the details for the Medium Triage level assessments are displayed properly in the Assessment tab on the right pane', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.verifyWordsMatchMediumTriage();
});

When('The user clicks on the latest Low Triage level Assessment', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.clickleftwordlowbutton();
});

Then('All the details for the Low Triage level assessments are displayed properly in the Assessment tab on the right pane', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.verifyWordsMatchLowTriage();
});

When('The user clicks on the latest medical condition name in the left pane', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.clickleftmedicalconditionname();
});

Then('The same medical condition name should be displayed in the top of the right pane', async ({page}) => {
  const  previousassess = new PreviousAssessPage(page);
  await previousassess.verifyWordsMatchMedicalCondition();
});

When('The user clicks the Case Details button', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.clickcasedetailsbutton();
});

Then('The user should be able to see the Case Details information', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.displaycasedetailsui();
});

When('The user clicks the Export as pdf button from Previous Assessments page.', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.clickexportpdfbutton();
});

Then('The user should be able to view Share options and the user is able to view new popup showing PDF generated', async ({page}) => {
 const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.checkpdfgeneratedmessage
});

When('The user clicks on the link Manan at the top', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.clickmananbutton();
});

Then('Self Assessment page is displayed when the clicked on Manan from Previous Assessment Page', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.verifydashboardpagegendertitle();
});

Given('New user logged in to the manan and navigate to the dashboard page', async ({page}) => {
  const dashboard = new DashboardPage(page);
  const login = new Login(page);
  await dashboard.launchdashboard();
  await dashboard.clickprofilelink();
  await dashboard.clickprofilelogout();
  await login.newusersignin();
});

When('The new user clicks on the Previous assessments button from the dashboard page', async({page}) => {
  const dashboard = new DashboardPage(page);
  await dashboard.launchdashboard();
  await dashboard.clickpreviousassessmentbutton();
});

Then('No assessments found is displayed in the Previous Assessments page', async ({page}) => {
  const previousAssessPage = new PreviousAssessPage(page);
  await previousAssessPage.newuservalidation();
});
import { createBdd } from 'playwright-bdd';
const {PatientDataPage} = require('../PageObject/PatientDataPage.js');
const {SigninWindowPage} = require('../PageObject/SigninWindowPage.js');

const { Given, When, Then } = createBdd();

let patientDataPage;
let signinWindowPage;


Given('The user completed a case and received the initial AI analysis', async ({page}) => {
    patientDataPage = new PatientDataPage(page);
    signinWindowPage = new SigninWindowPage(page);
    await signinWindowPage.openSignInModal();
    await signinWindowPage.premiumUserlogin(); 
    await patientDataPage.NoVitalSigns();
    await patientDataPage.clickVitalSigns();
    await patientDataPage.clickAnalyzeCase();  
    await patientDataPage.verifyTriageRecommendationsVisible();
});


When('The user clicks the {string} button and submits all {int} follow-up questions', async ({page},  buttonLabel, questionCount) => {
  patientDataPage = new PatientDataPage(page);
  await patientDataPage.openFurtherAnalysisForm();
  await patientDataPage.waitForFollowUpFormReady();
  await patientDataPage.fillAllFollowUpQuestionsDynamic();
  await patientDataPage.clickSubmitAddInfo();
});

Then('The user should receive a modified AI analysis based on the new inputs', async ({}) => {
  await patientDataPage.waitForSuccessMessage();
});

Given('The user is viewing the follow-up questions after clicking {string}', async ({page}, arg) => {
    patientDataPage = new PatientDataPage(page);  
    signinWindowPage = new SigninWindowPage(page);
    await signinWindowPage.openSignInModal();
    await signinWindowPage.premiumUserlogin(); 
    await patientDataPage.NoVitalSigns();
    await patientDataPage.clickVitalSigns();
    await patientDataPage.clickAnalyzeCase();  
    await patientDataPage.verifyTriageRecommendationsVisible();
});

When('The user submits the form with no questions unanswered', async ({page}) => {
    patientDataPage = new PatientDataPage(page);
    await patientDataPage.openFurtherAnalysisForm();
    await patientDataPage.waitForFollowUpFormReady();
    await patientDataPage.clickSubmitAddInfo();
});

Then('The user should see an error message {string}', async ({}, arg) => {
    await patientDataPage.followUpQuestionMissingError();   
});
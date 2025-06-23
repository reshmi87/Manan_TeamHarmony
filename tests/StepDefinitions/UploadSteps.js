import { createBdd } from 'playwright-bdd';
const { expect } = require('@playwright/test');
const {PatientDataPage} = require('../PageObject/PatientDataPage.js');
const {SigninWindowPage} = require('../PageObject/SigninWindowPage.js');
const path = require('path');

const { Given, When, Then } = createBdd();

let patientDataPage;
let signinWindowPage;

Given('The user navigates to the Assessment page after login to start new assessment', async ({page}) => {
  patientDataPage = new PatientDataPage(page);
  signinWindowPage = new SigninWindowPage(page);
  await signinWindowPage.openSignInModal();
  await signinWindowPage.premiumUserlogin();  
  await patientDataPage.CompleteForm();     
  await expect(page.getByRole('button', { name: /Upload Blood Report/i })).toBeVisible();
});

When('The user uploads multiple valid PDF test reports', async ({}) => {  
  const pdfFiles = [
  path.resolve('tests/Sample reports/CBC-sample 1.pdf'),
  path.resolve('tests/Sample reports/Diabetic and Hemogram Test_Thyrocare lab.pdf.pdf'),
  path.resolve('tests/Sample reports/Hypo Thyroid-Report.pdf.pdf'),
  path.resolve('tests/Sample reports/HyperThyroid_Report_final.pdf'),
  path.resolve('tests/Sample reports/Patient Portal - health _ labs.pdf')
  ];
  for (const pdf of pdfFiles) {
  await patientDataPage.uploadTestReport(pdf);
  }
});

Then('The user should see all uploaded files listed successfully', async ({page}) => {  
  await patientDataPage.fivefiles();
});

When('The user uploads six valid PDF test reports', async ({}) => {  
  const pdfFiles = [
  path.resolve('tests/Sample reports/CBC-sample 1.pdf'),
  path.resolve('tests/Sample reports/Diabetic and Hemogram Test_Thyrocare lab.pdf.pdf'),
  path.resolve('tests/Sample reports/Hypo Thyroid-Report.pdf.pdf'),
  path.resolve('tests/Sample reports/HyperThyroid_Report_final.pdf'),
  path.resolve('tests/Sample reports/Patient Portal - health _ labs.pdf'),
  path.resolve('tests/Sample reports/Diabetic and Hemogram Test_Thyrocare lab.pdf.pdf')
  ];
  for (const pdf of pdfFiles) {
     await patientDataPage.uploadMultipleTestReport(pdf);
  }
});

Then('The user should see the error message"Upload limit reached"', async ({page}) => {
  await patientDataPage.multiplefiles();
});
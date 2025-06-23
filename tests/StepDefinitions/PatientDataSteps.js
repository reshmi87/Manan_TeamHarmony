import { createBdd } from 'playwright-bdd';
const { expect } = require('@playwright/test');
const {PatientDataPage} = require('../PageObject/PatientDataPage.js');
const {SigninWindowPage} = require('../PageObject/SigninWindowPage.js');
const path = require('path');
const { Given, When, Then } = createBdd();

let patientDataPage;
let signinWindowPage;



Given('The user is on the Assessment page of the Manan medical triage system after sign in', async ({page}) => { 
    signinWindowPage = new SigninWindowPage(page);
    await signinWindowPage.openSignInModal();
    await signinWindowPage.premiumUserlogin();     
});

Given('The user navigates to the Assessment page after login', async ({page}) => {   
    await page.getByRole('button', { name: 'Dashboard' }).click();
    await page.getByRole('button', { name: 'Start New Assessment' }).click();
 
});

When('The user fills in all required information, uploads a valid PDF test report, and clicks the {string} button', async ({page}, buttonLabel) => {    
    patientDataPage = new PatientDataPage(page);
    await patientDataPage.CompleteForm();
    switch (buttonLabel) {
      case 'Analyze Case':
        await patientDataPage.clickAnalyzeCase();
        break;
      case 'Share Analysis':
        await patientDataPage.clickShareAnalysis();
        break;
      case 'Ask for Further Analysis':
        await patientDataPage.clickFurtherAnalysis();
        break;
      default:
        throw new Error(`Button with label "${buttonLabel}" is not supported`);
    }
  console.log(`Clicked "${buttonLabel}" successfully`);
});

Then('The user verifies the triage recommendations are displayed correctly', async ({}) => {
    await patientDataPage.verifyTriageRecommendationsVisible();
});

When('The user opens the gender dropdown and selects {string}', async ({page}, gender) => {
    patientDataPage = new PatientDataPage(page);
    await patientDataPage.SelectGender(gender); 
});

Then('The user verifies the selected gender is {string}', async ({page}, expectedGender) => {
    patientDataPage = new PatientDataPage(page);    
    const selectedGender = await patientDataPage.GenderDropdown.textContent();
    expect(selectedGender.trim()).toContain(expectedGender);   
});

When('The user opens the gender dropdown again and selects {string}', async ({page}, gender) => {
    patientDataPage = new PatientDataPage(page); 
    await patientDataPage.SelectGender(gender);  
});

Then('The user verifies the gender options {string} and {string} are visible in the dropdown', async ({page}, option1, option2) => {  
    patientDataPage = new PatientDataPage(page);
    await patientDataPage.GenderDropdown.click();  
    const maleVisible = await patientDataPage.MaleOption.isVisible();
    const femaleVisible = await patientDataPage.FemaleOption.isVisible();
    expect(maleVisible).toBeTruthy();
    expect(femaleVisible).toBeTruthy();  
});

When('The user uploads a valid PDF test report', async ({page}) => { 
    patientDataPage = new PatientDataPage(page);
    const pdfPath = 'tests/Sample reports/CBC-sample 1.pdf';
    await patientDataPage.uploadTestReport(pdfPath); 
});

Then('The user verifies the vital signs and lab values fields are populated correctly', async ({}) => { 
    const vitalsText = await patientDataPage.VitalSignField.inputValue();
    expect(vitalsText).toMatch(/AI ANALYSIS:/i);
    expect(vitalsText.length).toBeGreaterThan(20);  
});

When('The user manually enters vital signs and lab values', async ({page}) => {
     patientDataPage = new PatientDataPage(page);  
    await patientDataPage.clickVitalSigns();  
});

Then('The user verifies the values are saved correctly', async ({}) => {  
    await patientDataPage.verifyVitalsInTextarea();  
});

When('The user submits the form without entering patient age', async ({page}) => {
    patientDataPage = new PatientDataPage(page);   
    await patientDataPage.emptyAge();    
    await patientDataPage.clickAnalyzeCase(); // Submit form by clicking Analyze Case 
});

Then('The user verifies a validation error is shown for missing patient age', async ({page}) => { 
    await patientDataPage.AgeMissing(); // This will assert the error is visible
});

When('The user submits the form without selecting gender', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    await patientDataPage.withoutGender();
    await patientDataPage.clickAnalyzeCase();
});

Then('The user verifies a validation error is shown for missing gender', async ({page}) => {
    await patientDataPage.GenderMissing();
});

When('The user submits the form without entering chief complaint', async ({page}) => { 
    patientDataPage = new PatientDataPage(page); 
    await patientDataPage.emptyChiefcomplaints();
    await patientDataPage.clickAnalyzeCase(); // Submitting without chief complaint
});

Then('The user verifies a validation error is shown for missing chief complaint', async ({}) => {  
   await patientDataPage.ChiefComplaintMissing();
});

When('The user submits the form without entering symptom description', async ({page}) => {
    patientDataPage = new PatientDataPage(page);   
    await patientDataPage.emptySymptomdescription();
    await patientDataPage.clickAnalyzeCase(); // Submitting without symptoms
});

Then('The user verifies a validation error is shown for missing symptom description', async ({}) => { 
    await patientDataPage.SymptomsMissing();
});

When('The user submits the form without entering vital signs', async ({page}) => {  
    patientDataPage = new PatientDataPage(page);   
    await patientDataPage.NoVitalSigns();
    await patientDataPage.clickAnalyzeCase();
});

Then('The user verifies a validation error is shown for missing vital signs', async ({}) => {  
   await patientDataPage.VitalSignMissing();
});

When('The user submits the form without filling any fields', async ({page}) => {
    patientDataPage = new PatientDataPage(page);  
    await patientDataPage.clickAnalyzeCase();
});

Then('The user verifies validation errors for all required fields are shown', async ({}) => { 
    await patientDataPage.AgeMissing();
    await patientDataPage.GenderMissing();
    await patientDataPage.ChiefComplaintMissing();
    await patientDataPage.SymptomsMissing();
    await patientDataPage.VitalSignMissing();
});

When('The user uploads a test report with a docx file extension', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    const filePath = path.resolve('tests/Sample reports/HyperThyroid_Report_final.docx');
    await patientDataPage.uploadInvalidTestReport(filePath);
});

Then('The user verifies a validation error popup: {string} is shown', async ({page},arg) => {
    await patientDataPage.verifyValidationErrorPopup();
});

When('The user uploads a test report with a jpg file extension', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    const filePath = path.resolve('tests/Sample reports/sample-invalid.jpeg');
    await patientDataPage.uploadInvalidTestReport(filePath);
});

When('The user uploads a test report with a txt file extension', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    const filePath = path.resolve('tests/Sample reports/sample-invalid.txt');
    await patientDataPage.uploadInvalidTestReport(filePath);
});

Given('The user completes the patient assessment form with valid data', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    await patientDataPage.NoVitalSigns();
    await patientDataPage.clickVitalSigns();
});

When('The case is analyzed using the AI engine', async ({}) => {
    await patientDataPage.clickAnalyzeCase();
});

Then('The report should validate the presence of all required clinical sections', async ({}) => {
   // Wait for the AI analysis section to appear
    await expect(patientDataPage.AIAnalysis).toBeVisible({ timeout: 30000 });
    // Wait for the final section to ensure full report load
    await expect(patientDataPage.page.getByText('Warning signs requiring escalation', { exact: false })).toBeVisible({ timeout: 30000 });
    // Now verify all expected sections
    const expectedSections = [
    'Triage Level',
    'TOP 3-5 POSSIBLE DIAGNOSES',
    'Key clinical concerns and risk factors',
    'Immediate actions/interventions needed',
    'Recommended diagnostic tests',
    'Specialist referral recommendations',
    'Warning signs requiring escalation'
    ];
    for (const section of expectedSections) {
    await expect(patientDataPage.page.getByText(section, { exact: false })).toBeVisible({ timeout: 10000 });
    }
});

Given('The user completed a case and AI analysis is displayed', async ({page}) => {
    patientDataPage = new PatientDataPage(page); 
    await patientDataPage.NoVitalSigns();
    await patientDataPage.clickVitalSigns();    
    // Click Analyze Case and verify AI analysis results are visible
    await patientDataPage.clickAnalyzeCase();
    await patientDataPage.verifyTriageRecommendationsVisible();
});

When('The user click the {string} button', async ({page}, buttonName) => {
    await page.getByRole('button', { name: 'Share Analysis' }).click();
    await patientDataPage.verifyTriageRecommendationsVisible(); 
    await patientDataPage.clickShareAnalysis();  
});

Then('The Share option screen appears, the pdf is generated and the confirmation pop up which contains PDF generated successfully is displayed.', async ({page}) => {
    await patientDataPage.verifypdfSuccessPopup();
    await expect(page.getByRole('status')).toContainText('PDF Generated');     
});

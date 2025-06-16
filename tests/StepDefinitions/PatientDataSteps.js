// import { createBdd } from "playwright-bdd";

// const{Given,When,Then} = createBdd();

// Given('The user is on the Assessment page of the Manan medical triage system after sign in', async ({}) => {
//   // Step: Given The user is on the Assessment page of the Manan medical triage system after sign in
//   // From: tests\Features\PatientData.feature:4:3
// });

// Given('The user navigates to the Assessment page after login', async ({}) => {
//   // Step: Given The user navigates to the Assessment page after login
//   // From: tests\Features\PatientData.feature:8:5
// });

// When('The user fills in all required information, uploads a valid PDF test report, and clicks the {string} button', async ({}, arg) => {
//   // Step: When The user fills in all required information, uploads a valid PDF test report, and clicks the "Analyze Case" button
//   // From: tests\Features\PatientData.feature:9:5
// });

// Then('The user verifies the triage recommendations are displayed correctly', async ({}) => {
//   // Step: Then The user verifies the triage recommendations are displayed correctly
//   // From: tests\Features\PatientData.feature:10:5
// });

// When('The user opens the gender dropdown and selects {string}', async ({}, arg) => {
//   // Step: When The user opens the gender dropdown and selects "Male"
//   // From: tests\Features\PatientData.feature:15:5
// });

// Then('The user verifies the selected gender is {string}', async ({}, arg) => {
//   // Step: Then The user verifies the selected gender is "Male"
//   // From: tests\Features\PatientData.feature:16:5
// });

// When('The user opens the gender dropdown again and selects {string}', async ({}, arg) => {
//   // Step: When The user opens the gender dropdown again and selects "Female"
//   // From: tests\Features\PatientData.feature:17:5
// });

// Then('The user verifies the gender options {string} and {string} are visible in the dropdown', async ({}, arg, arg1) => {  
//   // Step: And The user verifies the gender options "Male" and "Female" are visible in the dropdown
//   // From: tests\Features\PatientData.feature:19:5
// });

// When('The user uploads a valid PDF test report', async ({}) => {
//   // Step: When The user uploads a valid PDF test report
//   // From: tests\Features\PatientData.feature:24:5
// });


// Then('The user verifies the vital signs and lab values fields are populated correctly', async ({}) => {
//   // Step: Then The user verifies the vital signs and lab values fields are populated correctly
//   // From: tests\Features\PatientData.feature:25:5
// });

// When('The user manually enters vital signs and lab values', async ({}) => {
//   // Step: When The user manually enters vital signs and lab values
//   // From: tests\Features\PatientData.feature:30:5
// });

// Then('The user verifies the values are saved correctly', async ({}) => {
//   // Step: Then The user verifies the values are saved correctly
//   // From: tests\Features\PatientData.feature:31:5
// });

// When('The user submits the form without entering patient age', async ({}) => {
//   // Step: When The user submits the form without entering patient age
//   // From: tests\Features\PatientData.feature:36:5
// });

// Then('The user verifies a validation error is shown for missing patient age', async ({}) => {
//   // Step: Then The user verifies a validation error is shown for missing patient age
//   // From: tests\Features\PatientData.feature:37:5
// });

// When('The user submits the form without selecting gender', async ({}) => {
//   // Step: When The user submits the form without selecting gender
//   // From: tests\Features\PatientData.feature:42:5
// });

// Then('The user verifies a validation error is shown for missing gender', async ({}) => {
//   // Step: Then The user verifies a validation error is shown for missing gender
//   // From: tests\Features\PatientData.feature:43:5
// });

// When('The user submits the form without entering chief complaint', async ({}) => {
//   // Step: When The user submits the form without entering chief complaint
//   // From: tests\Features\PatientData.feature:48:5
// });

// Then('The user verifies a validation error is shown for missing chief complaint', async ({}) => {
//   // Step: Then The user verifies a validation error is shown for missing chief complaint
//   // From: tests\Features\PatientData.feature:49:5
// });
// When('The user submits the form without entering symptom description', async ({}) => {
//   // Step: When The user submits the form without entering symptom description
//   // From: tests\Features\PatientData.feature:54:5
// });

// Then('The user verifies a validation error is shown for missing symptom description', async ({}) => {
//   // Step: Then The user verifies a validation error is shown for missing symptom description
//   // From: tests\Features\PatientData.feature:55:5
// });

// When('The user uploads a test report with a .docx file extension', async ({}) => {
//   // Step: When The user uploads a test report with a .docx file extension
//   // From: tests\Features\PatientData.feature:60:5
// });

// Then('The user verifies a validation error popup: {string} is shown', async ({}, arg) => {
//   // Step: Then The user verifies a validation error popup: "Failed to parse blood report. Please enter values manually" is shown    
//   // From: tests\Features\PatientData.feature:61:5
// });

// Given('The user has input all the required information on the Assessment page', async ({}) => {
//   // Step: Given The user has input all the required information on the Assessment page
//   // From: tests\Features\PatientData.feature:64:5
// });

// When('The user clicks the Analyze Case button', async ({}) => {
//   // Step: When The user clicks the Analyze Case button
//   // From: tests\Features\PatientData.feature:65:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Triage Level', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Triage Level
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven TOP {int}-{int} POSSIBLE DIAGNOSES', async ({}, arg, arg1) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven TOP 3-5 POSSIBLE DIAGNOSES        
//   // From: tests\Features\PatientData.feature:66:5
// });

// Given('The user has input all the required information on the Assessment page', async ({}) => {
//   // Step: Given The user has input all the required information on the Assessment page
//   // From: tests\Features\PatientData.feature:64:5
// });

// When('The user clicks the Analyze Case button', async ({}) => {
//   // Step: When The user clicks the Analyze Case button
//   // From: tests\Features\PatientData.feature:65:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Triage Level', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Triage Level
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven TOP {int}-{int} POSSIBLE DIAGNOSES', async ({}, arg, arg1) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven TOP 3-5 POSSIBLE DIAGNOSES        
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Key clinical concerns and risk factors', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Key clinical concerns and risk factors
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Immediate actions\\/interventions needed', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Immediate actions/interventions needed
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Recommended diagnostic tests', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Recommended diagnostic tests      
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Specialist referral recommendations', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Specialist referral recommendations
//   // From: tests\Features\PatientData.feature:66:5
// });

// Then('The system displays an AI-generated Analysis report containing the following seven Warning signs requiring escalation', async ({}) => {
//   // Step: Then The system displays an AI-generated Analysis report containing the following seven Warning signs requiring escalation
//   // From: tests\Features\PatientData.feature:66:5
// });
// Given('The user completed a case and AI analysis is displayed', async ({}) => {
//   // Step: Given The user completed a case and AI analysis is displayed
//   // From: tests\Features\PatientData.feature:78:5
// });

// When('The user click the {string} button', async ({}, arg) => {
//   // Step: When The user click the "Share Analysis" button
//   // From: tests\Features\PatientData.feature:79:5
// });

// Then('The Share option screen appears, the pdf is generated and the confirmation pop up which contains PDF generated successfully is displayed.', async ({}) => {
//   // Step: Then The Share option screen appears, the pdf is generated and the confirmation pop up which contains PDF generated successfully is displayed.
//   // From: tests\Features\PatientData.feature:80:5
// });

// Generated from: tests\Features\PatientData.feature
import { test } from "playwright-bdd";

test.describe('Patient Data & Symptom Entry', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user is on the Assessment page of the Manan medical triage system after sign in', null, { page }); 
  });
  
  test('Successful triage with complete and valid patient information', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user fills in all required information, uploads a valid PDF test report, and clicks the "Analyze Case" button', null, { page }); 
    await Then('The user verifies the triage recommendations are displayed correctly'); 
  });

  test('User can view and select gender options from the dropdown', { tag: ['@positive'] }, async ({ Given, page, When, Then, And }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user opens the gender dropdown and selects "Male"', null, { page }); 
    await Then('The user verifies the selected gender is "Male"', null, { page }); 
    await When('The user opens the gender dropdown again and selects "Female"', null, { page }); 
    await Then('The user verifies the selected gender is "Female"', null, { page }); 
    await And('The user verifies the gender options "Male" and "Female" are visible in the dropdown', null, { page }); 
  });

  test('Uploading a valid PDF test report auto-populates fields', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user uploads a valid PDF test report', null, { page }); 
    await Then('The user verifies the vital signs and lab values fields are populated correctly'); 
  });

  test('Manually entering vital signs and lab values saves correctly', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user manually enters vital signs and lab values', null, { page }); 
    await Then('The user verifies the values are saved correctly'); 
  });

  test('Validation error occurs for missing patient age', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without entering patient age', null, { page }); 
    await Then('The user verifies a validation error is shown for missing patient age', null, { page }); 
  });

  test('Validation error occurs for missing gender', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without selecting gender', null, { page }); 
    await Then('The user verifies a validation error is shown for missing gender', null, { page }); 
  });

  test('Validation error occurs for missing chief complaint', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without entering chief complaint', null, { page }); 
    await Then('The user verifies a validation error is shown for missing chief complaint'); 
  });

  test('Validation error occurs for missing symptom description', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without entering symptom description', null, { page }); 
    await Then('The user verifies a validation error is shown for missing symptom description'); 
  });

  test('Validation error occurs for missing vital signs', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without entering vital signs', null, { page }); 
    await Then('The user verifies a validation error is shown for missing vital signs'); 
  });

  test('Validation error occurs when form is submitted with all fields empty', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login', null, { page }); 
    await When('The user submits the form without filling any fields', null, { page }); 
    await Then('The user verifies validation errors for all required fields are shown'); 
  });

  test.describe('Validation error occurs for uploading unsupported test report files', () => {

    test('Example #1', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
      await Given('The user navigates to the Assessment page after login', null, { page }); 
      await When('The user uploads a test report with a docx file extension', null, { page }); 
      await Then('The user verifies a validation error popup: "Failed to parse blood report. Please enter values manually" is shown', null, { page }); 
    });

    test('Example #2', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
      await Given('The user navigates to the Assessment page after login', null, { page }); 
      await When('The user uploads a test report with a jpg file extension', null, { page }); 
      await Then('The user verifies a validation error popup: "Failed to parse blood report. Please enter values manually" is shown', null, { page }); 
    });

    test('Example #3', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
      await Given('The user navigates to the Assessment page after login', null, { page }); 
      await When('The user uploads a test report with a txt file extension', null, { page }); 
      await Then('The user verifies a validation error popup: "Failed to parse blood report. Please enter values manually" is shown', null, { page }); 
    });

  });

  test('AI-generated report includes all mandatory clinical sections', async ({ Given, page, When, Then }) => { 
    await Given('The user completes the patient assessment form with valid data', null, { page }); 
    await When('The case is analyzed using the AI engine'); 
    await Then('The report should validate the presence of all required clinical sections', null, { page }); 
  });

  test('Validation of Share Analysis with PDF Generation', async ({ Given, page, When, Then }) => { 
    await Given('The user completed a case and AI analysis is displayed', null, { page }); 
    await When('The user click the "Share Analysis" button', null, { page }); 
    await Then('The Share option screen appears, the pdf is generated and the confirmation pop up which contains PDF generated successfully is displayed.', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\PatientData.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user fills in all required information, uploads a valid PDF test report, and clicks the \"Analyze Case\" button","stepMatchArguments":[{"group":{"start":92,"value":"\"Analyze Case\"","children":[{"start":93,"value":"Analyze Case","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user verifies the triage recommendations are displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When The user opens the gender dropdown and selects \"Male\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Male\"","children":[{"start":48,"value":"Male","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then The user verifies the selected gender is \"Male\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Male\"","children":[{"start":42,"value":"Male","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When The user opens the gender dropdown again and selects \"Female\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Female\"","children":[{"start":54,"value":"Female","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The user verifies the selected gender is \"Female\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Female\"","children":[{"start":42,"value":"Female","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And The user verifies the gender options \"Male\" and \"Female\" are visible in the dropdown","stepMatchArguments":[{"group":{"start":37,"value":"\"Male\"","children":[{"start":38,"value":"Male","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"Female\"","children":[{"start":49,"value":"Female","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When The user uploads a valid PDF test report","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then The user verifies the vital signs and lab values fields are populated correctly","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":28,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When The user manually enters vital signs and lab values","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user verifies the values are saved correctly","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":34,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When The user submits the form without entering patient age","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error is shown for missing patient age","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":40,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When The user submits the form without selecting gender","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error is shown for missing gender","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":46,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When The user submits the form without entering chief complaint","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error is shown for missing chief complaint","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":52,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When The user submits the form without entering symptom description","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error is shown for missing symptom description","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":58,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When The user submits the form without entering vital signs","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error is shown for missing vital signs","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":64,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When The user submits the form without filling any fields","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then The user verifies validation errors for all required fields are shown","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":76,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When The user uploads a test report with a docx file extension","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error popup: \"Failed to parse blood report. Please enter values manually\" is shown","stepMatchArguments":[{"group":{"start":44,"value":"\"Failed to parse blood report. Please enter values manually\"","children":[{"start":45,"value":"Failed to parse blood report. Please enter values manually","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":81,"pickleLine":77,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When The user uploads a test report with a jpg file extension","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error popup: \"Failed to parse blood report. Please enter values manually\" is shown","stepMatchArguments":[{"group":{"start":44,"value":"\"Failed to parse blood report. Please enter values manually\"","children":[{"start":45,"value":"Failed to parse blood report. Please enter values manually","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":87,"pickleLine":78,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When The user uploads a test report with a txt file extension","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then The user verifies a validation error popup: \"Failed to parse blood report. Please enter values manually\" is shown","stepMatchArguments":[{"group":{"start":44,"value":"\"Failed to parse blood report. Please enter values manually\"","children":[{"start":45,"value":"Failed to parse blood report. Please enter values manually","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":95,"pickleLine":80,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given The user completes the patient assessment form with valid data","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When The case is analyzed using the AI engine","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then The report should validate the presence of all required clinical sections","stepMatchArguments":[]}]},
  {"pwTestLine":101,"pickleLine":85,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the Assessment page of the Manan medical triage system after sign in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given The user completed a case and AI analysis is displayed","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When The user click the \"Share Analysis\" button","stepMatchArguments":[{"group":{"start":19,"value":"\"Share Analysis\"","children":[{"start":20,"value":"Share Analysis","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":104,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then The Share option screen appears, the pdf is generated and the confirmation pop up which contains PDF generated successfully is displayed.","stepMatchArguments":[]}]},
]; // bdd-data-end
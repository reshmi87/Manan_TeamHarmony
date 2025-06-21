// Generated from: tests\Features\UploadMultiple.feature
import { test } from "playwright-bdd";

test.describe('Patient Data Uploading multiple documents.', () => {

  test('Upload multiple PDF test reports', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login to start new assessment', null, { page }); 
    await When('The user uploads multiple valid PDF test reports'); 
    await Then('The user should see all uploaded files listed successfully', null, { page }); 
  });

  test('Validation of error message when sixth pdf file is uploaded', { tag: ['@negative'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user navigates to the Assessment page after login to start new assessment', null, { page }); 
    await When('The user uploads six valid PDF test reports'); 
    await Then('The user should see the error message"Upload limit reached"', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\UploadMultiple.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login to start new assessment","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When The user uploads multiple valid PDF test reports","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should see all uploaded files listed successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@negative"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Assessment page after login to start new assessment","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When The user uploads six valid PDF test reports","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The user should see the error message\"Upload limit reached\"","stepMatchArguments":[]}]},
]; // bdd-data-end
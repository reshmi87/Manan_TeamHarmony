// Generated from: tests\Features\SubscriptionPage.feature
import { test } from "playwright-bdd";

test.describe('Subscription page for unauthenticated users', () => {

  test('Verify the "Get Started Free" button on Subscription page', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Subscription Page', null, { page }); 
    await When('The user clicks Get Started Free button'); 
    await Then('The user should see a pop-up window prompting sign-in'); 
  });

  test('Verify "Subscribe Now" on Subscription page', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Subscription Page', null, { page }); 
    await When('The user clicks Subscribe now button'); 
    await Then('The user should get the pop-up toast notification window with login button to sign-in'); 
  });

  test('Verify the pop-up toast notification on Subscription page', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Subscription Page', null, { page }); 
    await When('The user clicks Subscribe now button'); 
    await Then('The user should see a pop-up toast notification window with login button to sign-in'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\SubscriptionPage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user is on the Subscription Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When The user clicks Get Started Free button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is on the Subscription Page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe now button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The user should get the pop-up toast notification window with login button to sign-in","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given The user is on the Subscription Page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe now button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up toast notification window with login button to sign-in","stepMatchArguments":[]}]},
]; // bdd-data-end
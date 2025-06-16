// Generated from: tests\Features\Dashboard.feature
import { test } from "playwright-bdd";

test.describe('Dashboard Validation', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user launched the Manan application and logged in successfully', null, { page }); 
  });
  
  test('Validate that the Dashboard button is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Self Assessment page', null, { page }); 
    await When('The user clicks on the Dashboard button on the top', null, { page }); 
    await Then('Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly', null, { page }); 
  });

  test('Validate if Start New Assessment button in Welcome block in Dashboard page is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user click on the Start New Assessment button in the Welcome block', null, { page }); 
    await Then('Self Assessment page is displayed', null, { page }); 
  });

  test('Validate if View Previous Assessments button in Welcome block in Dashboard page is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user click on the View Previous Assessments button in the Welcome block', null, { page }); 
    await Then('Previous Assessments page is displayed', null, { page }); 
  });

  test('Validate the Start your first assessment link in the Recent Assessment Block is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Start your first assessment link in the Recent Assessment Block.', null, { page }); 
    await Then('Self Assessment page is displayed', null, { page }); 
  });

  test('Validate the update settings link is functional from Account settings block', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Update settings link from Account settings block', null, { page }); 
    await Then('Settings page is displayed', null, { page }); 
  });

  test('Validate the upgrade now link is functional from Subscription Plans block', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Upgrade now link is from Subscription Plans block', null, { page }); 
    await Then('Subscription page is displayed', null, { page }); 
  });

  test('Validate the View history link is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the View History link from Assessment History page', null, { page }); 
    await Then('Previous Assessments page is displayed', null, { page }); 
  });

  test('Validate the Upgrade to Premium button in Analysis usage is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Upgrade to Premium button in Analysis usage block.', null, { page }); 
    await Then('Subscription page is displayed', null, { page }); 
  });

  test('Validation of the Profile link at the top', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the User Profile link on the top right corner', null, { page }); 
    await Then('User profile with Profile name and email id and options Settings, Previous Assessment, Subscription Plan and Log out are displayed', null, { page }); 
  });

  test('Validation of settings from Profile link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Settings from Profile link on the top', null, { page }); 
    await Then('Settings page is displayed', null, { page }); 
  });

  test('Validation of Previous Assessment from Profile link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Previous Assessment from Profile link', null, { page }); 
    await Then('Previous Assessments page is displayed', null, { page }); 
  });

  test('Validation of Subscription plan from Profile link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Subscription plan from Profile link', null, { page }); 
    await Then('Subscription page is displayed', null, { page }); 
  });

  test('Validate log out', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Log out from Profile link on the top', null, { page }); 
    await Then('User is successfully logged out', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\Dashboard.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is in the Self Assessment page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks on the Dashboard button on the top","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user click on the Start New Assessment button in the Welcome block","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Self Assessment page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user click on the View Previous Assessments button in the Welcome block","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Previous Assessments page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user clicks on the Start your first assessment link in the Recent Assessment Block.","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Self Assessment page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When The user clicks on the Update settings link from Account settings block","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Settings page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When The user clicks on Upgrade now link is from Subscription Plans block","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Subscription page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When The user clicks on the View History link from Assessment History page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Previous Assessments page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When The user clicks on the Upgrade to Premium button in Analysis usage block.","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Subscription page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When The user clicks on the User Profile link on the top right corner","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User profile with Profile name and email id and options Settings, Previous Assessment, Subscription Plan and Log out are displayed","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When The user clicks on Settings from Profile link on the top","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then Settings page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":56,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When The user clicks on Previous Assessment from Profile link","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Previous Assessments page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When The user clicks on Subscription plan from Profile link","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Subscription page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When The user clicks on Log out from Profile link on the top","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then User is successfully logged out","stepMatchArguments":[]}]},
]; // bdd-data-end
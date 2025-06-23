// Generated from: tests\Features\Settings.feature
import { test } from "playwright-bdd";

test.describe('Settings Page validation', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user launched the Manan application and logged in successfully', null, { page }); 
  });
  
  test('Validation of User profile information in Settings page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Update settings link from Account settings block', null, { page }); 
    await Then('User profile information with email id is displayed in the User Profile section in the settings page', null, { page }); 
  });

  test('Validation of Notification Preferences in settings page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Update settings link from Account settings block', null, { page }); 
    await Then('Notification preferences block with the notification settings is displayed', null, { page }); 
  });

  test('Validation of Medical Research block in settings page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on the Update settings link from Account settings block', null, { page }); 
    await Then('Medical Research block is displayed in settings page', null, { page }); 
  });

  test('Validation of the save changes in Notification Preferences', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Settings page', null, { page }); 
    await When('The user make changes to the Email and App Notifications and clicks on save changes', null, { page }); 
    await Then('The changes are saved and the user is able to see the changes whenever he comes back to the page.', null, { page }); 
  });

  test('Validation of the Settings page through Google Account Signin', async ({ Given, page, When, Then }) => { 
    await Given('The user logged in as Google user', null, { page }); 
    await When('User Navigates to the Settings page', null, { page }); 
    await Then('All the information are displayed properly for the user signed in through Google Account', null, { page }); 
  });

  test('Validate Manan link is functional from the Settings page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Settings Page', null, { page }); 
    await When('The user clicks on the link Manan at the top in Settings page', null, { page }); 
    await Then('Self Assessment page is displayed when the clicked on Manan from Settings Page', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\Settings.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks on the Update settings link from Account settings block","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User profile information with email id is displayed in the User Profile section in the settings page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks on the Update settings link from Account settings block","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Notification preferences block with the notification settings is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user clicks on the Update settings link from Account settings block","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Medical Research block is displayed in settings page","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the Settings page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user make changes to the Email and App Notifications and clicks on save changes","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then The changes are saved and the user is able to see the changes whenever he comes back to the page.","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user logged in as Google user","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User Navigates to the Settings page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then All the information are displayed properly for the user signed in through Google Account","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given The user is in the Settings Page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When The user clicks on the link Manan at the top in Settings page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Self Assessment page is displayed when the clicked on Manan from Settings Page","stepMatchArguments":[]}]},
]; // bdd-data-end
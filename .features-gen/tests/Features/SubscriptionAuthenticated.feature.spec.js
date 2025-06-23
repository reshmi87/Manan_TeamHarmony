// Generated from: tests\Features\SubscriptionAuthenticated.feature
import { test } from "playwright-bdd";

test.describe('Subscription page for Authenticated users', () => {

  test('Validation of the Free Plan block in the Subscription page for Premium User', async ({ Given, page, When, Then }) => { 
    await Given('The Premium user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Free Plan block is displayed with the Switch for Free button for the Premium user', null, { page }); 
  });

  test('Validation of the Premium Plan block in the Subscription page for Premium User', async ({ Given, page, When, Then }) => { 
    await Given('The Premium user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Premium plan block is displayed with Cancel Subscription button for the Premium user', null, { page }); 
  });

  test('Validation of the Current Plan block in the Subscription page for Premium User', async ({ Given, page, When, Then }) => { 
    await Given('The Premium user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Current Plan shows it is Premium account with the Cancel Subscription button', null, { page }); 
  });

  test('Validation of the Free Plan block in the Subscription page for Newly signed in User', async ({ Given, page, When, Then }) => { 
    await Given('A New user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Free Plan block is displayed with the Current Plan button disabled', null, { page }); 
  });

  test('Validation of the Premium Plan block in the Subscription page for Newly signed in User', async ({ Given, page, When, Then }) => { 
    await Given('A New user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Premium plan block is displayed with Subscribe button enabled', null, { page }); 
  });

  test('Validation of the Current Plan block in the Subscription page for Newly signed in User', async ({ Given, page, When, Then }) => { 
    await Given('A New user logged in to the Manan Application', null, { page }); 
    await When('The user clicks on the Subscription Plans from the Profile at the top', null, { page }); 
    await Then('Verify the Current Plan shows it is Free and a Upgrade to Premium button is displayed', null, { page }); 
  });

  test('Validate Manan link is functional from the Subscription page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Subscription Page', null, { page }); 
    await When('The user clicks on the link Manan at the top in Subscription page', null, { page }); 
    await Then('Self Assessment page is displayed when the clicked on Manan from Subscription Page', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\SubscriptionAuthenticated.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The Premium user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Verify the Free Plan block is displayed with the Switch for Free button for the Premium user","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given The Premium user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Verify the Premium plan block is displayed with Cancel Subscription button for the Premium user","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given The Premium user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Verify the Current Plan shows it is Premium account with the Cancel Subscription button","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given A New user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Verify the Free Plan block is displayed with the Current Plan button disabled","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given A New user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Verify the Premium plan block is displayed with Subscribe button enabled","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given A New user logged in to the Manan Application","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When The user clicks on the Subscription Plans from the Profile at the top","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Verify the Current Plan shows it is Free and a Upgrade to Premium button is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When The user clicks on the link Manan at the top in Subscription page","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Self Assessment page is displayed when the clicked on Manan from Subscription Page","stepMatchArguments":[]}]},
]; // bdd-data-end
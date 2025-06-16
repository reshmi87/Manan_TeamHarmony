// Generated from: tests\Features\HomePage.feature
import { test } from "playwright-bdd";

test.describe('Home page Navigation', () => {

  test('User views the navigation links', async ({ Given, page, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await Then('The user should see a navigation menu with following links Home, Try now, Pricing, Sign in'); 
  });

  test('User views the action buttons', async ({ Given, page, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await Then('The user should see the following actions buttons Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans'); 
  });

  test('Verify Manan logo is accessible', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Manan logo'); 
    await Then('The user should be redirected to the Home page'); 
  });

  test('Verify "Home" link is accessible', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Home link'); 
    await Then('The user should be redirected to the Home page'); 
  });

  test('Verify "Sign in" link is accessible', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Sign in link'); 
    await Then('The user should see a pop-up window prompting sign-in with a Google account'); 
  });

  test('Verify "Try for free" button is accessible', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Try for free button'); 
    await Then('The user should see a pop-up window prompting sign-in with a Google account'); 
  });

  test('Verify "For Medical Professionals" button is accessible', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks For Medical Professionals button'); 
    await Then('The user should see a pop-up window prompting sign-in with a Google account'); 
  });

  test('Verify "Try Now" link', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Try Now link'); 
    await Then('The user should see a pop-up window prompting sign-in with a Google account'); 
  });

  test('Verify "Pricing" link', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Pricing link'); 
    await Then('The user should be redirected to the Subscription page', null, { page }); 
  });

  test('Verify "Start Medical Triage Assessment" button', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks Start Medical Triage Assessment button'); 
    await Then('The user should see a pop-up window prompting sign-in with a Google account'); 
  });

  test('Verify "View Pricing Plans" button', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page', null, { page }); 
    await When('The user clicks view Pricing plans button'); 
    await Then('The user should be redirected to the Subscription page', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\HomePage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then The user should see a navigation menu with following links Home, Try now, Pricing, Sign in","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then The user should see the following actions buttons Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When The user clicks Manan logo","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the Home page","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When The user clicks Home link","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the Home page","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user clicks Sign in link","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in with a Google account","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When The user clicks Try for free button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in with a Google account","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When The user clicks For Medical Professionals button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in with a Google account","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When The user clicks Try Now link","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in with a Google account","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When The user clicks Pricing link","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the Subscription page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":59,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When The user clicks Start Medical Triage Assessment button","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then The user should see a pop-up window prompting sign-in with a Google account","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":65,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When The user clicks view Pricing plans button","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the Subscription page","stepMatchArguments":[]}]},
]; // bdd-data-end
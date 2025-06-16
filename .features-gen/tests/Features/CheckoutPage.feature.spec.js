// Generated from: tests\Features\CheckoutPage.feature
import { test } from "playwright-bdd";

test.describe('Checkout page Validation', () => {

  test('Viewing the Premium subscription checkout page', async ({ Given, Then }) => { 
    await Given('The user is in the Checkout page after clicking upgrade to premium button'); 
    await Then('The user should see checkout page displayed with pay with link button, user\'s provided email ID and payment method form visible'); 
  });

  test('Paying with Link', async ({ Given, When, Then }) => { 
    await Given('The user is on the checkout page'); 
    await When('they click the Pay with Link button'); 
    await Then('The user should get a pop-up window to continue the payment process'); 
  });

  test('Providing payment details', async ({ Given, When, Then }) => { 
    await Given('The user is on the checkout page'); 
    await When('The user enters valid credit card information in the payment method form'); 
    await Then('The payment form should be ready for submission'); 
  });

  test('Submitting the payment', async ({ Given, When, Then }) => { 
    await Given('The user is on the checkout page'); 
    await When('The user submits the payment form with valid credit card information'); 
    await Then('The user should see a confirmation message indicating successful payment'); 
  });

  test('Handling payment errors', async ({ Given, When, Then }) => { 
    await Given('The user is on the checkout page'); 
    await When('The user enters invalid credit card information in the payment method form'); 
    await Then('The user should see an error message indicating payment failure due to invalid details'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\CheckoutPage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user is in the Checkout page after clicking upgrade to premium button","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should see checkout page displayed with pay with link button, user's provided email ID and payment method form visible","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given The user is on the checkout page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When they click the Pay with Link button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then The user should get a pop-up window to continue the payment process","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given The user is on the checkout page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When The user enters valid credit card information in the payment method form","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The payment form should be ready for submission","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given The user is on the checkout page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When The user submits the payment form with valid credit card information","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user should see a confirmation message indicating successful payment","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The user is on the checkout page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user enters invalid credit card information in the payment method form","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The user should see an error message indicating payment failure due to invalid details","stepMatchArguments":[]}]},
]; // bdd-data-end
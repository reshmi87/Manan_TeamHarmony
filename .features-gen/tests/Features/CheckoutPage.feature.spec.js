// Generated from: tests\Features\CheckoutPage.feature
import { test } from "playwright-bdd";

test.describe('Checkout Page Validation', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user is signed in and on the Checkout page', null, { page }); 
  });
  
  test('Viewing the Premium subscription checkout page', async ({ Then }) => { 
    await Then('The checkout page should display the Pay with Link button, user email ID, and the payment method form'); 
  });

  test('Paying with Link', async ({ When, Then }) => { 
    await When('The user clicks the Pay with Link button'); 
    await Then('A pop-up window should appear prompting the user to log in with their Email ID and proceed to the payment gateway with the Pay button'); 
  });

  test('Providing valid payment details', async ({ When, page, Then }) => { 
    await When('The user enters valid credit card information in the payment method form', null, { page }); 
    await Then('The Subscribe button should be enabled, indicating the form is ready for submission'); 
  });

  test('Submitting an incomplete card number', async ({ When, page, Then }) => { 
    await When('The user enters a credit card number with a missing digit', null, { page }); 
    await Then('An error message should appear indicating that the card number is incomplete', null, { page }); 
  });

  test('Submitting an invalid card number', async ({ When, page, Then }) => { 
    await When('The user enters an invalid credit card number', null, { page }); 
    await Then('An error message should appear indicating that the card number is invalid', null, { page }); 
  });

  test('Submitting an expired credit card', async ({ When, page, Then }) => { 
    await When('The user enters an expired credit card', null, { page }); 
    await Then('An error message should appear indicating that the card has expired', null, { page }); 
  });

  test('Submitting an empty payment form', async ({ When, Then }) => { 
    await When('The user submits the payment form without entering any credit card information'); 
    await Then('Then an error message should appear indicating that all fields are required'); 
  });

  test('Checking Empty card number', async ({ When, page, Then }) => { 
    await When('The user clicks the Subscribe button without entering any card number', null, { page }); 
    await Then('The user receives field validation error'); 
  });

  test('Checking Empty cardholder Name', async ({ When, page, Then }) => { 
    await When('The user clicks the Subscribe button without entering cardholder Name', null, { page }); 
    await Then('The user receives field validation error'); 
  });

  test('Checking Back arrow functionality', async ({ When, page, Then }) => { 
    await When('The user clicks the Back arrow button', null, { page }); 
    await Then('The user should be redirected to the subscription cancelled page with Go to Dashboard and View Subscription Plans buttons visible'); 
  });

  test('Enabling 1-click checkout with Link', async ({ When, Then }) => { 
    await When('The user unselects the Save my info for one-click checkout with Link option'); 
    await Then('The phone number input field should not be visible'); 
    await When('The user selects again the Save my info for one-click checkout with Link option'); 
    await Then('The phone number input field should be visible'); 
  });

  test('Submitting an incomplete mobile number', async ({ When, Then }) => { 
    await When('The user enters a mobile number with a missing digit'); 
    await Then('An error message should appear indicating that the mobile number is incomplete'); 
    await When('The user enters a mobile number with extra digits'); 
    await Then('An error message should appear indicating the mobile number is invalid and to please ensure the correct country is selected in the dropdown'); 
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
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The checkout page should display the Pay with Link button, user email ID, and the payment method form","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When The user clicks the Pay with Link button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then A pop-up window should appear prompting the user to log in with their Email ID and proceed to the payment gateway with the Pay button","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters valid credit card information in the payment method form","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then The Subscribe button should be enabled, indicating the form is ready for submission","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user enters a credit card number with a missing digit","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then An error message should appear indicating that the card number is incomplete","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When The user enters an invalid credit card number","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then An error message should appear indicating that the card number is invalid","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user enters an expired credit card","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then An error message should appear indicating that the card has expired","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When The user submits the payment form without entering any credit card information","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Then an error message should appear indicating that all fields are required","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When The user clicks the Subscribe button without entering any card number","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then The user receives field validation error","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When The user clicks the Subscribe button without entering cardholder Name","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then The user receives field validation error","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When The user clicks the Back arrow button","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the subscription cancelled page with Go to Dashboard and View Subscription Plans buttons visible","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When The user unselects the Save my info for one-click checkout with Link option","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then The phone number input field should not be visible","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When The user selects again the Save my info for one-click checkout with Link option","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then The phone number input field should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is signed in and on the Checkout page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When The user enters a mobile number with a missing digit","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then An error message should appear indicating that the mobile number is incomplete","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When The user enters a mobile number with extra digits","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then An error message should appear indicating the mobile number is invalid and to please ensure the correct country is selected in the dropdown","stepMatchArguments":[]}]},
]; // bdd-data-end
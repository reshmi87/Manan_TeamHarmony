// Generated from: tests\Features\PageFooter.feature
import { test } from "playwright-bdd";

test.describe('Page footer validation', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user launched the Manan application and logged in successfully', null, { page }); 
  });
  
  test('Validate the About Us footer link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on About Us from the page footer', null, { page }); 
    await Then('Numpy Ninja - About Us page is displayed', null, { page }); 
  });

  test('Validate the Blogs footer link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Blogs from the page footer', null, { page }); 
    await Then('Numpy Ninja - Blog page is displayed', null, { page }); 
  });

  test('Validate the Contact Us footer link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Contact Us from the page footer', null, { page }); 
    await Then('Numpy Ninja - Contact page is displayed', null, { page }); 
  });

  test('Validate the Terms footer link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Terms from the page footer', null, { page }); 
    await Then('Numpy Ninja - Terms of Service page is displayed', null, { page }); 
  });

  test('Validate the Privacy footer link', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { page }); 
    await When('The user clicks on Privacy from the page footer', null, { page }); 
    await Then('Numpy Ninja - Privacy Policy page is displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\PageFooter.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks on About Us from the page footer","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Numpy Ninja - About Us page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks on Blogs from the page footer","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Numpy Ninja - Blog page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user clicks on Contact Us from the page footer","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Numpy Ninja - Contact page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user clicks on Terms from the page footer","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Numpy Ninja - Terms of Service page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When The user clicks on Privacy from the page footer","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Numpy Ninja - Privacy Policy page is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end
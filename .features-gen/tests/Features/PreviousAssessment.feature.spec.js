// Generated from: tests\Features\PreviousAssessment.feature
import { test } from "playwright-bdd";

test.describe('View Previous Assessment Validation', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user launched the Manan application system and logged in successfully', null, { page }); 
  });
  
  test('Validate that the user is able to launch the Previous Assessment page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the dashboard page', null, { page }); 
    await When('The user clicks on the Previous assessments button from the dashboard page', null, { page }); 
    await Then('The Assessments page is displayed with Your Assessments details', null, { page }); 
  });

  test('Validate that the user is able to view all the details for Emergency Triage level', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks on the latest Emergency Triage level Assessment', null, { page }); 
    await Then('All the details for the Emergency Triage level assessments are displayed properly in the Assessment tab on the right pane', null, { page }); 
  });

  test('Validate that the user is able to view all the details for High Triage level', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks on the latest High Triage level Assessment', null, { page }); 
    await Then('All the details for the High Triage level assessments are displayed properly in the Assessment tab on the right pane', null, { page }); 
  });

  test('Validate that the user is able to view all the details for Medium Triage level', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks on the latest Medium Triage level Assessment', null, { page }); 
    await Then('All the details for the Medium Triage level assessments are displayed properly in the Assessment tab on the right pane', null, { page }); 
  });

  test('Validate that the user is able to view all the details for Low Triage level', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks on the latest Low Triage level Assessment', null, { page }); 
    await Then('All the details for the Low Triage level assessments are displayed properly in the Assessment tab on the right pane', null, { page }); 
  });

  test('Validate that the Case Details button is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks the Case Details button', null, { page }); 
    await Then('The user should be able to see the Case Details information', null, { page }); 
  });

  test('Validate Manan link is functional from the Previous assessment page', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks on the link Manan at the top', null, { page }); 
    await Then('Self Assessment page is displayed when the clicked on Manan from Previous Assessment Page', null, { page }); 
  });

  test('Validate Previous assessment page when signed in as a new user', async ({ Given, page, When, Then }) => { 
    await Given('New user logged in to the manan and navigate to the dashboard page', null, { page }); 
    await When('The new user clicks on the Previous assessments button from the dashboard page', null, { page }); 
    await Then('No assessments found is displayed in the Previous Assessments page', null, { page }); 
  });

  test('Validate PDF Format button is functional', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the Previous assessments page', null, { page }); 
    await When('The user clicks the Export as pdf button from Previous Assessments page.', null, { page }); 
    await Then('The user should be able to view Share options and the user is able to view new popup showing PDF generated', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\PreviousAssessment.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is in the dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks on the Previous assessments button from the dashboard page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then The Assessments page is displayed with Your Assessments details","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks on the latest Emergency Triage level Assessment","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then All the details for the Emergency Triage level assessments are displayed properly in the Assessment tab on the right pane","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user clicks on the latest High Triage level Assessment","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then All the details for the High Triage level assessments are displayed properly in the Assessment tab on the right pane","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user clicks on the latest Medium Triage level Assessment","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then All the details for the Medium Triage level assessments are displayed properly in the Assessment tab on the right pane","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When The user clicks on the latest Low Triage level Assessment","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then All the details for the Low Triage level assessments are displayed properly in the Assessment tab on the right pane","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When The user clicks the Case Details button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to see the Case Details information","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When The user clicks on the link Manan at the top","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Self Assessment page is displayed when the clicked on Manan from Previous Assessment Page","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given New user logged in to the manan and navigate to the dashboard page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When The new user clicks on the Previous assessments button from the dashboard page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then No assessments found is displayed in the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user launched the Manan application system and logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous assessments page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When The user clicks the Export as pdf button from Previous Assessments page.","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view Share options and the user is able to view new popup showing PDF generated","stepMatchArguments":[]}]},
]; // bdd-data-end
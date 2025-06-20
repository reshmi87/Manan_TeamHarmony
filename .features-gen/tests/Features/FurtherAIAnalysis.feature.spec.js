// Generated from: tests\Features\FurtherAIAnalysis.feature
import { test } from "playwright-bdd";

test.describe('Patient Data Further AI Analysis validation', () => {

  test('Request further analysis with follow-up questions', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user completed a case and received the initial AI analysis', null, { page }); 
    await When('The user clicks the "Ask for Further Analysis" button and submits all 25 follow-up questions', null, { page }); 
    await Then('The user should receive a modified AI analysis based on the new inputs'); 
  });

  test('Show error if follow-up questions are unanswered', { tag: ['@positive'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user is viewing the follow-up questions after clicking "Ask for Further Analysis"', null, { page }); 
    await When('The user submits the form with no questions unanswered', null, { page }); 
    await Then('The user should see an error message "Please answer all questions before submitting."'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\FurtherAIAnalysis.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user completed a case and received the initial AI analysis","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Ask for Further Analysis\" button and submits all 25 follow-up questions","stepMatchArguments":[{"group":{"start":20,"value":"\"Ask for Further Analysis\"","children":[{"start":21,"value":"Ask for Further Analysis","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":70,"value":"25","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should receive a modified AI analysis based on the new inputs","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@positive"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is viewing the follow-up questions after clicking \"Ask for Further Analysis\"","stepMatchArguments":[{"group":{"start":59,"value":"\"Ask for Further Analysis\"","children":[{"start":60,"value":"Ask for Further Analysis","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When The user submits the form with no questions unanswered","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The user should see an error message \"Please answer all questions before submitting.\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Please answer all questions before submitting.\"","children":[{"start":38,"value":"Please answer all questions before submitting.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
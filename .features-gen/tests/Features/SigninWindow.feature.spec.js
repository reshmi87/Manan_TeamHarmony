// Generated from: tests\Features\SigninWindow.feature
import { test } from "playwright-bdd";

test.describe('Authentication Modal for MANAN Dashboard', () => {

  test('Open Sign In modal', async ({ Given, page, When, Then }) => { 
    await Given('The user is on the Home page to Sign in.', null, { page }); 
    await When('The user clicks on the Sign In button'); 
    await Then('The sign-in modal should be displayed with Continue with Google button, username, password, and Sign In button'); 
  });

  test('Switch to Sign Up tab', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user clicks on the Sign Up tab'); 
    await Then('The registration form should be displayed with username, password, Confirm Password, and Create Account button'); 
  });

  test('Sign up with existing username', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a username that already exists and clicks the Create Account button'); 
    await Then('An error message should be displayed indicating that the username is already exists'); 
  });

  test('Sign up with mismatched passwords', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a password and a different Confirm Password and clicks the Create Account button'); 
    await Then('An error message should be displayed indicating that the passwords do not match'); 
  });

  test('Sign up with missing fields', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user leaves the Username, Password, or Confirm Password fields blank and clicks the Create Account button'); 
    await Then('An error message should be displayed prompting to Please fill in all fields'); 
  });

  test('Sign up with only username and password', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a username and password but leaves Confirm Password blank and clicks the Create Account button'); 
    await Then('An error message should be displayed prompting to Please fill in all fields'); 
  });

  test('Sign up with username only', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a username but leaves Password and Confirm Password blank and clicks the Create Account button'); 
    await Then('An error message should be displayed prompting to Please fill in all fields'); 
  });

  test('Enter credentials to signup', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters credentials to sign up and clicks Create Account button'); 
    await Then('The user should be redirected to Assessment page with a success toast notification that account has been created successfully'); 
  });

  test('Switch to Sign In tab', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user clicks on the Sign In tab'); 
    await Then('The sign-in form should be displayed with username, password, and Sign In button'); 
  });

  test('Sign in with missing credentials', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user leaves the Username and Password fields blank and The user clicks the Sign In button'); 
    await Then('An error message should be displayed prompting to Please fill in all fields'); 
  });

  test('Sign in with invalid username', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters an invalid username and clicks the Sign In button'); 
    await Then('An error message should be displayed indicating that incorrect username'); 
  });

  test('sign in with invalid password', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a valid username and an invalid password and clicks the Sign In button'); 
    await Then('An error message should be displayed indicating that incorrect password'); 
  });

  test('Sign in with valid credentials', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user enters a valid username and password and clicks the Sign In button'); 
    await Then('The user should be redirected to Assessment page with a success toast notification'); 
  });

  test('Sign in using Google', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user clicks the Continue with Google button'); 
    await Then('The user should be redirected to the Assessment page of the app after signing in with gmail ID'); 
  });

  test('Close Sign In modal', async ({ Given, page, When, Then }) => { 
    await Given('The user is in the pop-up window to sign in or sign up to try the assessment', null, { page }); 
    await When('The user clicks the Close button on the sign-in modal'); 
    await Then('The sign-in modal should be closed and the user should return to the previous page'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\SigninWindow.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page to Sign in.","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks on the Sign In button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then The sign-in modal should be displayed with Continue with Google button, username, password, and Sign In button","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks on the Sign Up tab","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then The registration form should be displayed with username, password, Confirm Password, and Create Account button","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user enters a username that already exists and clicks the Create Account button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed indicating that the username is already exists","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user enters a password and a different Confirm Password and clicks the Create Account button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed indicating that the passwords do not match","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When The user leaves the Username, Password, or Confirm Password fields blank and clicks the Create Account button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed prompting to Please fill in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When The user enters a username and password but leaves Confirm Password blank and clicks the Create Account button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed prompting to Please fill in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When The user enters a username but leaves Password and Confirm Password blank and clicks the Create Account button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed prompting to Please fill in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When The user enters credentials to sign up and clicks Create Account button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to Assessment page with a success toast notification that account has been created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When The user clicks on the Sign In tab","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then The sign-in form should be displayed with username, password, and Sign In button","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When The user leaves the Username and Password fields blank and The user clicks the Sign In button","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed prompting to Please fill in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":56,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When The user enters an invalid username and clicks the Sign In button","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed indicating that incorrect username","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When The user enters a valid username and an invalid password and clicks the Sign In button","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then An error message should be displayed indicating that incorrect password","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When The user enters a valid username and password and clicks the Sign In button","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to Assessment page with a success toast notification","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":85,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When The user clicks the Continue with Google button","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the Assessment page of the app after signing in with gmail ID","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":76,"tags":[],"steps":[{"pwStepLine":91,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given The user is in the pop-up window to sign in or sign up to try the assessment","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When The user clicks the Close button on the sign-in modal","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then The sign-in modal should be closed and the user should return to the previous page","stepMatchArguments":[]}]},
]; // bdd-data-end
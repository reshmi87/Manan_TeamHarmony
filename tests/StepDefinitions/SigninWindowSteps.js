import { createBdd } from 'playwright-bdd';

const { SigninWindowPage } = require('../PageObject/SigninWindowPage.js');
const { HomePage } = require('../PageObject/HomePage.js');

const { Given, When, Then } = createBdd();

let signinPage;
let homePage;

Given('The user is on the Home page to Sign in.', async ({page}) => {
    signinPage = new SigninWindowPage(page);
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    console.log('User is on the Home page to Sign in.');
});

When('The user clicks on the Sign In button', async ({}) => {
    await signinPage.openSignInModal();
});

Then('The sign-in modal should be displayed with Continue with Google button, username, password, and Sign In button', async ({}) => {
    await signinPage.verifySignInModal();
    console.log('Sign-in modal is displayed with required elements.');
});

Given('The user is in the pop-up window to sign in or sign up to try the assessment', async ({page}) => {
    signinPage = new SigninWindowPage(page);
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await signinPage.openSignInModal();
    console.log('User is in the pop-up window to sign in or sign up to try the assessment.');
});

When('The user clicks on the Sign Up tab', async ({}) => {
    await signinPage.switchToSignUpTab();
});

Then('The registration form should be displayed with username, password, Confirm Password, and Create Account button', async ({}) => {
    await signinPage.verifySignUpForm();
    console.log('Registration form is displayed with required elements.');
});

When('The user enters a username that already exists and clicks the Create Account button', async ({}) => {
    await signinPage.existingUser();
    console.log('User entered an existing username and clicked Create Account button.');
});

Then('An error message should be displayed indicating that the username is already exists', async ({}) => {
    await signinPage.Existingerror();
    console.log('Error message displayed: Username already exists');
});

When('The user enters a password and a different Confirm Password and clicks the Create Account button', async ({}) => {      
    await signinPage.mismatchedPassword();
    console.log('User entered a password and a different Confirm Password and clicked Create Account button.');
});

Then('An error message should be displayed indicating that the passwords do not match', async ({}) => {
    await signinPage.expectErrorMismatchedPasswords();
    console.log('Error message displayed: Passwords do not match');
});

When('The user leaves the Username, Password, or Confirm Password fields blank and clicks the Create Account button', async ({}, arg, arg1, arg2, arg3) => {
    await signinPage.switchToSignUpTab();
    await signinPage.createAccountButton.click();
    console.log('User left fields blank and clicked Create Account button.');
});

Then('An error message should be displayed prompting to Please fill in all fields', async ({}) => {
    await signinPage.blanksfieldserror();
    console.log('Error message displayed: Please fill in all fields');
});

When('The user enters a username and password but leaves Confirm Password blank and clicks the Create Account button', async ({}) => {
    await signinPage.blankConfirmPassword();
    console.log('User entered a username and password but left Confirm Password blank and clicked Create Account button.');
});

When('The user enters a username but leaves Password and Confirm Password blank and clicks the Create Account button', async ({}) => {
    await signinPage.blankPasswords();
    console.log('User entered a username but left Password and Confirm Password blank and clicked Create Account button.');
});

When('The user enters credentials to sign up and clicks Create Account button', async ({}) => {
    await signinPage.validSignUpwithrandomusername();
    console.log('User entered valid credentials and clicked Create Account button.');
});

Then('The user should be redirected to Assessment page with a success toast notification that account has been created successfully', async ({}) => {       
    await signinPage.expectAuthenticationSuccess();
    console.log('User redirected to medical triage dashboard with success notification: Account created successfully');
});

When('The user clicks on the Sign In tab', async ({}) => {
    await signinPage.switchToSignInTab();
    console.log('User clicked on the Sign In tab.');
});

Then('The sign-in form should be displayed with username, password, and Sign In button', async ({}) => {
    await signinPage.verifySignInModal();
    console.log('Sign-in form is displayed with required elements.');
});

When('The user leaves the Username and Password fields blank and The user clicks the Sign In button', async ({}) => {
    await signinPage.signInButton.click();
    console.log('User left Username and Password fields blank and clicked Sign In button.');
});

When('The user enters an invalid username and clicks the Sign In button', async ({}) => {
    await signinPage.invalidUsername();
    console.log('User entered an invalid username and clicked Sign In button.');
});

Then('An error message should be displayed indicating that incorrect username', async ({}) => {
    await signinPage.LoginfailedwithIncorrectusername();
    console.log('Error message displayed: Incorrect username');
});

When('The user enters a valid username and an invalid password and clicks the Sign In button', async ({}) => {
    await signinPage.invalidPassword();
    console.log('User entered a valid username and an invalid password and clicked Sign In button.');
});

Then('An error message should be displayed indicating that incorrect password', async ({}) => {
    await signinPage.LoginfailedwithIncorrectPassword();
    console.log('Error message displayed: Incorrect correct password');
});

When('The user enters a valid username and password and clicks the Sign In button', async ({}) => {
    await signinPage .validSigninwithexistingusernamePassword();
    console.log('User entered a valid username and password and clicked Sign In button.');
});

Then('The user should be redirected to Assessment page with a success toast notification', async ({}) => {       
    await signinPage.StatusVisible();
    console.log('User redirected to medical triage dashboard with success notification: Authentication Successful');
});

When('The user clicks the Continue with Google button', async ({}) => {
    await signinPage.clickContinueWithGoogle();
    console.log('User clicked the Continue with Google button.');
});

Then('The user should be redirected to the Assessment page of the app after signing in with gmail ID', async ({}) => {        
    //await signinPage.expectAuthenticationSuccess();
    await signinPage.AssessmentPage();   
});

When('The user clicks the Close button on the sign-in modal', async ({}) => {
    await signinPage.closeSignInModal();
    console.log('User clicked the Close button on the sign-in modal.');
});

Then('The sign-in modal should be closed and the user should return to the previous page', async ({}) => {
    await signinPage.verifySignInModalClosed();
    console.log('Sign-in modal is closed and user returned to the previous page.');
});
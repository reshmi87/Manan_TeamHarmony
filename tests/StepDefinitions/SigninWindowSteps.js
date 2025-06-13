import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user is in the pop-up window to sign in\\/Sign up to try the assessment', async ({}) => {
  // Step: Given The user is in the pop-up window to sign in/Sign up to try the assessment
  // From: tests\Features\SigninWindow.feature:3:2
});

When('The user clicks the {string} button', async ({}, arg) => {
  // Step: When The user clicks the "Continue with Google" button
  // From: tests\Features\SigninWindow.feature:6:5
});

Then('The user should be redirected to the Assessment page of the app after signing in with gmail ID', async ({}) => {
  // Step: Then The user should be redirected to the Assessment page of the app after signing in with gmail ID
  // From: tests\Features\SigninWindow.feature:7:5
});

When('The user clicks on the {string} tab', async ({}, arg) => {
  // Step: When The user clicks on the "Sign Up" tab
  // From: tests\Features\SigninWindow.feature:10:5
});

Then('The registration form should be displayed with username, password, Confirm Password, and Create Account button', async ({}) => {
  // Step: Then The registration form should be displayed with username, password, Confirm Password, and Create Account button
  // From: tests\Features\SigninWindow.feature:11:5
});

When('The user enters credentials to sign up and clicks Create Account button', async ({}) => {
  // Step: When The user enters credentials to sign up and clicks Create Account button
  // From: tests\Features\SigninWindow.feature:14:5
});

Then('The user should be redirected to the medical triage dashboard with a success toast notification', async ({}) => {
  // Step: Then The user should be redirected to the medical triage dashboard with a success toast notification
  // From: tests\Features\SigninWindow.feature:15:5
});

When('The user leaves the {string} and {string} fields blank and The user clicks the {string} button', async ({}, arg, arg1, arg2) => {
  // Step: When The user leaves the "Username" and "Password" fields blank and The user clicks the "Sign In" button
  // From: tests\Features\SigninWindow.feature:18:5
});

Then('An error message should be displayed prompting to Please fill in all fields', async ({}) => {
  // Step: Then An error message should be displayed prompting to Please fill in all fields
  // From: tests\Features\SigninWindow.feature:19:5
});

Feature: Authentication Modal for MANAN Dashboard
Background:
	Given The user is in the pop-up window to sign in/Sign up to try the assessment

Scenario: Sign in using Google
    When The user clicks the "Continue with Google" button
    Then The user should be redirected to the Assessment page of the app after signing in with gmail ID

Scenario: Switch to Sign Up tab
    When The user clicks on the "Sign Up" tab
    Then The registration form should be displayed with username, password, Confirm Password, and Create Account button

Scenario: Enter credentials to signup
    When The user enters credentials to sign up and clicks Create Account button   
    Then The user should be redirected to the medical triage dashboard with a success toast notification

Scenario: Sign in with missing credentials
    When The user leaves the "Username" and "Password" fields blank and The user clicks the "Sign In" button
    Then An error message should be displayed prompting to Please fill in all fields



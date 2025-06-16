Feature: Authentication Modal for MANAN Dashboard

Background:
	The user is in the Home page of the app 
 
Scenario: Open Sign In modal
    Given The user is on the Home page to Sign in.
    When The user clicks on the Sign In button
    Then The sign-in modal should be displayed with Continue with Google button, username, password, and Sign In button

Scenario: Switch to Sign Up tab
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user clicks on the Sign Up tab
    Then The registration form should be displayed with username, password, Confirm Password, and Create Account button

Scenario: Sign up with existing username
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a username that already exists and clicks the Create Account button
    Then An error message should be displayed indicating that the username is already exists

Scenario: Sign up with mismatched passwords
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a password and a different Confirm Password and clicks the Create Account button
    Then An error message should be displayed indicating that the passwords do not match

Scenario: Sign up with missing fields
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user leaves the Username, Password, or Confirm Password fields blank and clicks the Create Account button
    Then An error message should be displayed prompting to Please fill in all fields

Scenario: Sign up with only username and password
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a username and password but leaves Confirm Password blank and clicks the Create Account button
    Then An error message should be displayed prompting to Please fill in all fields

Scenario: Sign up with username only
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a username but leaves Password and Confirm Password blank and clicks the Create Account button
    Then An error message should be displayed prompting to Please fill in all fields
    
Scenario: Enter credentials to signup
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters credentials to sign up and clicks Create Account button   
    Then The user should be redirected to Assessment page with a success toast notification that account has been created successfully

Scenario: Switch to Sign In tab
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user clicks on the Sign In tab
    Then The sign-in form should be displayed with username, password, and Sign In button
   
Scenario: Sign in with missing credentials
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user leaves the Username and Password fields blank and The user clicks the Sign In button
    Then An error message should be displayed prompting to Please fill in all fields

Scenario: Sign in with invalid username
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters an invalid username and clicks the Sign In button
    Then An error message should be displayed indicating that incorrect username

Scenario: sign in with invalid password
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a valid username and an invalid password and clicks the Sign In button
    Then An error message should be displayed indicating that incorrect password

Scenario: Sign in with valid credentials
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user enters a valid username and password and clicks the Sign In button
    Then The user should be redirected to Assessment page with a success toast notification
   
Scenario: Sign in using Google
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user clicks the Continue with Google button
    Then The user should be redirected to the Assessment page of the app after signing in with gmail ID

Scenario: Close Sign In modal
    Given The user is in the pop-up window to sign in or sign up to try the assessment
    When The user clicks the Close button on the sign-in modal
    Then The sign-in modal should be closed and the user should return to the previous page
   
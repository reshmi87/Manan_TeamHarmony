Feature: Home page Navigation

Background: 
    User is in home page of manan app.

Scenario: User views the navigation links
    Given The user is on the Home page
    Then The user should see a navigation menu with following links Home, Try now, Pricing, Sign in

Scenario: User views the action buttons
    Given The user is on the Home page
    Then The user should see the following actions buttons Try for Free, For Medical Professionals, Start Medical Triage Assessment, View pricing plans

Scenario: Verify Manan logo is accessible
    Given The user is on the Home page
    When The user clicks Manan logo
    Then The user should be redirected to the Home page

Scenario: Verify "Home" link is accessible
    Given The user is on the Home page
    When The user clicks Home link
    Then The user should be redirected to the Home page

Scenario: Verify "Sign in" link is accessible
    Given The user is on the Home page
    When The user clicks Sign in link
    Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "Try for free" button is accessible
    Given The user is on the Home page
    When The user clicks Try for free button
    Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "For Medical Professionals" button is accessible
    Given The user is on the Home page
    When The user clicks For Medical Professionals button
    Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "Try Now" link
    Given The user is on the Home page
    When The user clicks Try Now link
    Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "Pricing" link
    Given The user is on the Home page
    When The user clicks Pricing link
    Then The user should be redirected to the Subscription page

Scenario: Verify "Start Medical Triage Assessment" button
    Given The user is on the Home page
    When The user clicks Start Medical Triage Assessment button
    Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "View Pricing Plans" button
    Given The user is on the Home page
    When The user clicks view Pricing plans button
    Then The user should be redirected to the Subscription page
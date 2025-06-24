Feature: Subscription page for unauthenticated users

Background: User is in the subscription page without signing in

Scenario: Verify the "Get Started Free" button on Subscription page
    Given The user is on the Subscription Page
    When The user clicks Get Started Free button
    Then The user should see a pop-up window prompting sign-in

Scenario: Verify "Subscribe Now" on Subscription page
    Given The user is on the Subscription Page
    When The user clicks Subscribe now button
    Then The user should get the pop-up toast notification window with login button to sign-in

Scenario: Verify the pop-up toast notification on Subscription page
    Given The user is on the Subscription Page
    When The user clicks Subscribe now button
    Then The user should see a pop-up toast notification window with login button to sign-in

Scenario: Verifying that a signed-up user can subscribe to Premium
  Given The user signs in using a valid username and password from the Signin window
  When The user attempts to upgrade to a Premium subscription
  Then The user should be redirected to the checkout page

# Scenario: Completing the subscription
#     Given The user signs in using a valid username and password from the Signin window with random email
#     When The user submits the payment form with valid credit card information
#     Then A confirmation message should appear indicating successful payment


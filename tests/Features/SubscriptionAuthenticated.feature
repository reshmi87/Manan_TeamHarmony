Feature: Subscription page for Authenticated users

Scenario: Validation of the Free Plan block in the Subscription page for Premium User
    Given The Premium user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Free Plan block is displayed with the Switch for Free button for the Premium user

Scenario: Validation of the Premium Plan block in the Subscription page for Premium User
    Given The Premium user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Premium plan block is displayed with Cancel Subscription button for the Premium user

Scenario: Validation of the Current Plan block in the Subscription page for Premium User
    Given The Premium user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Current Plan shows it is Premium account with the Cancel Subscription button

Scenario: Validation of the Free Plan block in the Subscription page for Newly signed in User
    Given A New user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Free Plan block is displayed with the Current Plan button disabled

Scenario: Validation of the Premium Plan block in the Subscription page for Newly signed in User
    Given A New user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Premium plan block is displayed with Subscribe button enabled

Scenario: Validation of the Current Plan block in the Subscription page for Newly signed in User
    Given A New user logged in to the Manan Application
    When The user clicks on the Subscription Plans from the Profile at the top
    Then Verify the Current Plan shows it is Free and a Upgrade to Premium button is displayed
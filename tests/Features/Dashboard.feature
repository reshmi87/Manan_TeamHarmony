Feature: Dashboard Validation

Background:
  Given The user launched the Manan application and logged in successfully

Scenario: Validate that the Dashboard button is functional
   Given The user is in the Self Assessment page
   When The user clicks on the Dashboard button on the top
   Then Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly

Scenario: Validate if Start New Assessment button in Welcome block in Dashboard page is functional
   Given The user is in the Dashboard page
   When The user click on the Start New Assessment button in the Welcome block
   Then Self Assessment page is displayed

Scenario: Validate if View Previous Assessments button in Welcome block in Dashboard page is functional
   Given The user is in the Dashboard page
   When The user click on the View Previous Assessments button in the Welcome block
   Then Previous Assessments page is displayed

Scenario: Validate the Start your first assessment link in the Recent Assessment Block is functional
   Given The user is in the Dashboard page
   When The user clicks on the Start your first assessment link in the Recent Assessment Block.
   Then Self Assessment page is displayed

Scenario: Validate the update settings link is functional from Account settings block
   Given The user is in the Dashboard page
   When The user clicks on the Update settings link from Account settings block
   Then Settings page is displayed

Scenario: Validate the upgrade now link is functional from Subscription Plans block
   Given The user is in the Dashboard page
   When The user clicks on Upgrade now link is from Subscription Plans block
   Then Subscription page is displayed

Scenario: Validate the View history link is functional
   Given The user is in the Dashboard page
   When The user clicks on the View History link from Assessment History page
   Then Previous Assessments page is displayed

Scenario: Validate the Upgrade to Premium button in Analysis usage is functional
   Given The user is in the Dashboard page
   When The user clicks on the Upgrade to Premium button in Analysis usage block.
   Then Subscription page is displayed

Scenario: Validation of the Profile link at the top
   Given The user is in the Dashboard page 
   When The user clicks on the User Profile link on the top right corner
   Then User profile with Profile name and email id and options Settings, Previous Assessment, Subscription Plan and Log out are displayed

Scenario: Validation of settings from Profile link
   Given The user is in the Dashboard page
   When The user clicks on Settings from Profile link on the top
   Then Settings page is displayed

Scenario: Validation of Previous Assessment from Profile link
   Given The user is in the Dashboard page
   When The user clicks on Previous Assessment from Profile link
   Then Previous Assessments page is displayed

Scenario: Validation of Subscription plan from Profile link
   Given The user is in the Dashboard page
   When The user clicks on Subscription plan from Profile link
   Then Subscription page is displayed

Scenario: Validate log out
   Given The user is in the Dashboard page
   When The user clicks on Log out from Profile link on the top
   Then User is successfully logged out

Scenario: Validate the Dashboard page when signed in to the premium accoutn through Google Sign in
   Given The user signed in to his premium account using Google Sign in
   When The user navigates to the Dashboard page
   Then Every blocks and link in the dashboard page are displayed properly for the Premium user

Scenario: Validate the Analysis Usage graph shows 0 of 20 for the new user
   Given The new user signed to Manan application
   When The user navigates to the Dashboard page
   Then The graph under Analysis Usage shows the graph properly for new user
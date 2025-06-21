Feature: Settings Page validation

Background:
    Given The user launched the Manan application and logged in successfully

Scenario: Validation of User profile information in Settings page
    Given The user is in the Dashboard page
    When The user clicks on the Update settings link from Account settings block
    Then User profile information with email id is displayed in the User Profile section in the settings page

Scenario: Validation of Notification Preferences in settings page
    Given The user is in the Dashboard page
    When The user clicks on the Update settings link from Account settings block
    Then Notification preferences block with the notification settings is displayed

Scenario: Validation of Medical Research block in settings page
    Given The user is in the Dashboard page
    When The user clicks on the Update settings link from Account settings block
    Then Medical Research block is displayed in settings page

Scenario: Validation of the save changes in Notification Preferences
    Given The user is in the Settings page
    When The user make changes to the Email and App Notifications and clicks on save changes
    Then The changes are saved and the user is able to see the changes whenever he comes back to the page.

Scenario: Validation of the Settings page through Google Account Signin
    Given The user logged in as Google user
    When User Navigates to the Settings page
    Then All the information are displayed properly for the user signed in through Google Account

Scenario: Validate Manan link is functional from the Settings page
    Given The user is in the Settings Page
    When The user clicks on the link Manan at the top in Settings page
    Then Self Assessment page is displayed when the clicked on Manan from Settings Page
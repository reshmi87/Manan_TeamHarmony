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
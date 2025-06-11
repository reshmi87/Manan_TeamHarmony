Feature: Subscription page for unauthenticated users

Background: User is in the subscription page without signing in

Scenario: Verify the "Get Started Free" button on Subscription page
Given The user is on the Subscription Page
When The user clicks Get Started Free button
Then The user should see a pop-up window prompting sign-in with a Google account

Scenario: Verify "Subscribe Now" on Subscription page
Given The user is on the Subscription Page
When The user clicks Subscribe now button
Then The user should get the pop-up toast notification window with login button to sign-in


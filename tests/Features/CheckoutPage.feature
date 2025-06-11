Feature: Checkout page Validation

Background: User is in the checkout page

Scenario: Viewing the Premium subscription checkout page
Given The user is in the Checkout page after clicking upgrade to premium button
Then The user should see checkout page displayed with pay with link button, user's provided email ID and payment method form visible

Scenario: Paying with Link
Given The user is on the checkout page
When they click the Pay with Link button
Then The user should get a pop-up window to continue the payment process 

Scenario: Providing payment details
Given The user is on the checkout page
When The user enters valid credit card information in the payment method form 
Then The payment form should be ready for submission 

Background: User provided the payment details 

Scenario: Verify the subscribe button
Given The user entered the valid information
When The user clicks the subscribe button
Then The user should get the Success notification

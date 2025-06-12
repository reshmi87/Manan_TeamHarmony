Feature: Checkout page Validation

Background: User is in the checkout page

Scenario: Viewing the Premium subscription checkout page
Given The user is in the Checkout page after clicking upgrade to premium button
Then The user should see checkout page displayed with pay with link button, user's provided email ID and payment method form visible

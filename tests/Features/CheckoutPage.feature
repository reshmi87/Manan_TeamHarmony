Feature: Checkout Page Validation

Background: 
  Given The user is signed in and on the Checkout page

Scenario: Viewing the Premium subscription checkout page
  Then The checkout page should display the Pay with Link button, user email ID, and the payment method form

Scenario: Paying with Link
  When The user clicks the Pay with Link button
  Then A pop-up window should appear prompting the user to log in with their Email ID and proceed to the payment gateway with the Pay button enabled

Scenario: Providing valid payment details
  When The user enters valid credit card information in the payment method form 
  Then The Subscribe button should be enabled, indicating the form is ready for submission

Scenario: Submitting an incomplete card number
  When The user enters a credit card number with a missing digit
  Then An error message should appear indicating that the card number is incomplete

Scenario: Submitting an invalid card number
  When The user enters an invalid credit card number
  Then An error message should appear indicating that the card number is invalid

Scenario: Submitting an expired credit card
  When The user enters an expired credit card
  Then An error message should appear indicating that the card has expired

Scenario: Submitting an empty payment form
  When The user submits the payment form without entering any credit card information
  Then Then an error message should appear indicating that all fields are required

Scenario: Checking Empty card number
  When The user clicks the Subscribe button without entering any card number
  Then The user receives field validation error

  # Scenario: Checking declined card error
  # When The user enters a credit card number that is known to be declined to subscribe
  # Then An error message should appear indicating that the card was declined
   
Scenario: Checking Empty cardholder Name
  When The user clicks the Subscribe button without entering cardholder Name
  Then The user receives field validation error

Scenario: Checking Back arrow functionality
  When The user clicks the Back arrow button
  Then The user should be redirected to the subscription cancelled page with Go to Dashboard and View Subscription Plans buttons visible

Scenario: Enabling 1-click checkout with Link
  When The user unselects the Save my info for one-click checkout with Link option
  Then The phone number input field should not be visible
  When The user selects again the Save my info for one-click checkout with Link option
  Then The phone number input field should be visible

Scenario: Submitting an incomplete mobile number
  When The user enters a mobile number with a missing digit
  Then An error message should appear indicating that the mobile number is incomplete
  When The user enters a mobile number with extra digits
  Then An error message should appear indicating the mobile number is invalid and to please ensure the correct country is selected in the dropdown

Scenario: Completing the payment process
  When The user submits the payment form with valid credit card information
  Then A confirmation message should appear indicating successful payment


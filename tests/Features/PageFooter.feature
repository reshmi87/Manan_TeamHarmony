Feature: Page footer validation

Background:
Given The user launched the Manan application and logged in successfully

Scenario: Validate the About Us footer link
Given The user is in the Dashboard page
When The user clicks on About Us from the page footer
Then Numpy Ninja - About Us page is displayed

Scenario: Validate the Blogs footer link
Given The user is in the Dashboard page
When The user clicks on Blogs from the page footer
Then Numpy Ninja - Blog page is displayed

Scenario: Validate the Contact Us footer link
Given The user is in the Dashboard page
When The user clicks on Contact Us from the page footer
Then Numpy Ninja - Contact page is displayed

Scenario: Validate the Terms footer link
Given The user is in the Dashboard page
When The user clicks on Terms from the page footer
Then Numpy Ninja - Terms of Service page is displayed

Scenario: Validate the Privacy footer link
Given The user is in the Dashboard page
When The user clicks on Privacy from the page footer
Then Numpy Ninja - Privacy Policy page is displayed
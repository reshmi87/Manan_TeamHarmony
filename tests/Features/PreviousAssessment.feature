Feature: View Previous Assessment Validation

Background:
  Given The user launched the Manan application system and logged in successfully

Scenario: Validate that the user is able to launch the Previous Assessment page
  Given The user is in the dashboard page
  When The user clicks on the Previous assessments button from the dashboard page
  Then The Assessments page is displayed with Your Assessments details

Scenario: Validate that the user is able to view all the details for Emergency Triage level
  Given The user is in the Previous assessments page
  When The user clicks on the latest Emergency Triage level Assessment
  Then All the details for the Emergency Triage level assessments are displayed properly in the Assessment tab on the right pane

Scenario: Validate that the user is able to view all the details for High Triage level
  Given The user is in the Previous assessments page
  When The user clicks on the latest High Triage level Assessment
  Then All the details for the High Triage level assessments are displayed properly in the Assessment tab on the right pane

Scenario: Validate that the user is able to view all the details for Medium Triage level
  Given The user is in the Previous assessments page
  When The user clicks on the latest Medium Triage level Assessment
  Then All the details for the Medium Triage level assessments are displayed properly in the Assessment tab on the right pane

Scenario: Validate that the user is able to view all the details for Low Triage level
  Given The user is in the Previous assessments page
  When The user clicks on the latest Low Triage level Assessment
  Then All the details for the Low Triage level assessments are displayed properly in the Assessment tab on the right pane

Scenario: Validate that the Case Details button is functional
  Given The user is in the Previous assessments page
  When The user clicks the Case Details button
  Then The user should be able to see the Case Details information

Scenario: Validate Manan link is functional from the Previous assessment page
  Given The user is in the Previous assessments page
  When The user clicks on the link Manan at the top
  Then Self Assessment page is displayed when the clicked on Manan from Previous Assessment Page

Scenario: Validate Previous assessment page when signed in as a new user
  Given New user logged in to the manan and navigate to the dashboard page
  When The new user clicks on the Previous assessments button from the dashboard page
  Then No assessments found is displayed in the Previous Assessments page

Scenario: Validate PDF Format button is functional
  Given The user is in the Previous assessments page
  When The user clicks the Export as pdf button from Previous Assessments page.
  Then The user should be able to view Share options and the user is able to view new popup showing PDF generated
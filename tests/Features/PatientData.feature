Feature: Patient Data & Symptom Entry

Background:
  Given The user is on the Assessment page of the Manan medical triage system after sign in

  @positive
  Scenario: Successful triage with complete and valid patient information
    Given The user navigates to the Assessment page after login
    When The user fills in all required information, uploads a valid PDF test report, and clicks the "Analyze Case" button
    Then The user verifies the triage recommendations are displayed correctly

  @positive
  Scenario: User can view and select gender options from the dropdown
    Given The user navigates to the Assessment page after login
    When The user opens the gender dropdown and selects "Male"
    Then The user verifies the selected gender is "Male"
    When The user opens the gender dropdown again and selects "Female"
    Then The user verifies the selected gender is "Female"
    And The user verifies the gender options "Male" and "Female" are visible in the dropdown

  @positive
  Scenario: Uploading a valid PDF test report auto-populates fields
    Given The user navigates to the Assessment page after login
    When The user uploads a valid PDF test report
    Then The user verifies the vital signs and lab values fields are populated correctly

  @positive
  Scenario: Manually entering vital signs and lab values saves correctly
    Given The user navigates to the Assessment page after login
    When The user manually enters vital signs and lab values
    Then The user verifies the values are saved correctly

  @negative
  Scenario: Validation error occurs for missing patient age
    Given The user navigates to the Assessment page after login
    When The user submits the form without entering patient age
    Then The user verifies a validation error is shown for missing patient age

  @negative
  Scenario: Validation error occurs for missing gender
    Given The user navigates to the Assessment page after login
    When The user submits the form without selecting gender
    Then The user verifies a validation error is shown for missing gender

  @negative
  Scenario: Validation error occurs for missing chief complaint
    Given The user navigates to the Assessment page after login
    When The user submits the form without entering chief complaint
    Then The user verifies a validation error is shown for missing chief complaint

  @negative
  Scenario: Validation error occurs for missing symptom description
    Given The user navigates to the Assessment page after login
    When The user submits the form without entering symptom description
    Then The user verifies a validation error is shown for missing symptom description

  @negative
  Scenario: Validation error occurs for uploading a .docx test report
    Given The user navigates to the Assessment page after login
    When The user uploads a test report with a .docx file extension
    Then The user verifies a validation error popup: "Failed to parse blood report. Please enter values manually" is shown

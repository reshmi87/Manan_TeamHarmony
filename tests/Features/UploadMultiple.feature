Feature: Patient Data Uploading multiple documents.

@positive
Scenario: Upload multiple PDF test reports
  Given The user navigates to the Assessment page after login to start new assessment
  When The user uploads multiple valid PDF test reports
  Then The user should see all uploaded files listed successfully

@negative
Scenario: Validation of error message when sixth pdf file is uploaded
  Given The user navigates to the Assessment page after login to start new assessment
  When The user uploads six valid PDF test reports
  Then The user should see the error message"Upload limit reached"
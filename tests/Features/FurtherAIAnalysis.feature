Feature: Patient Data Further AI Analysis validation
   
@positive
Scenario: Request further analysis with follow-up questions
  Given The user completed a case and received the initial AI analysis
  When The user clicks the "Ask for Further Analysis" button and submits all 25 follow-up questions
  Then The user should receive a modified AI analysis based on the new inputs

@positive
Scenario: Show error if follow-up questions are unanswered
  Given The user is viewing the follow-up questions after clicking "Ask for Further Analysis"
  When The user submits the form with no questions unanswered
  Then The user should see an error message "Please answer all questions before submitting."
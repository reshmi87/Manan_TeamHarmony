import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user launched the Manan application and logged in successfully', async ({}) => {
  // Step: Given The user launched the Manan application and logged in successfully
  // From: tests\Features\Dashboard.feature:4:1
});

Given('The user is in the Self Assessment page', async ({}) => {
  // Step: Given The user is in the Self Assessment page
  // From: tests\Features\Dashboard.feature:7:1
});

When('The user clicks on the Dashboard button on the top', async ({}) => {
  // Step: When The user clicks on the Dashboard button on the top
  // From: tests\Features\Dashboard.feature:8:1
});

Then('Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly', async ({}) => {
  // Step: Then Dashboard page is displayed and every details in the Medical Dashboard, Usage Statistics, Analysis Usage, Recent Assessment, Account Settings, Subscription and Assessment History blocks are displayed properly
  // From: tests\Features\Dashboard.feature:9:1
});

Given('The user is in the Dashboard page', async ({}) => {
  // Step: Given The user is in the Dashboard page
  // From: tests\Features\Dashboard.feature:12:1
});

When('The user click on the Start New Assessment button in the Welcome block', async ({}) => {
  // Step: When The user click on the Start New Assessment button in the Welcome block
  // From: tests\Features\Dashboard.feature:13:1
});

Then('Self Assessment page is displayed', async ({}) => {
  // Step: Then Self Assessment page is displayed
  // From: tests\Features\Dashboard.feature:14:1
});

When('The user click on the View Previous Assessments button in the Welcome block', async ({}) => {
  // Step: When The user click on the View Previous Assessments button in the Welcome block
  // From: tests\Features\Dashboard.feature:18:1
});

Then('Previous Assessments page is displayed', async ({}) => {
  // Step: Then Previous Assessments page is displayed
  // From: tests\Features\Dashboard.feature:19:1
});

When('The user clicks on the Start your first assessment link in the Recent Assessment Block.', async ({}) => {
  // Step: When The user clicks on the Start your first assessment link in the Recent Assessment Block.
  // From: tests\Features\Dashboard.feature:23:1
});

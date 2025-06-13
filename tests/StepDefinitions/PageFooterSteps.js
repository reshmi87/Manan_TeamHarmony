import { createBdd } from "playwright-bdd";

const{Given,When,Then} = createBdd();

Given('The user launched the Manan application and logged in successfully', async ({}) => {
  // Step: Given The user launched the Manan application and logged in successfully
  // From: tests\Features\PageFooter.feature:4:1
});

Given('The user is in the Dashboard page', async ({}) => {
  // Step: Given The user is in the Dashboard page
  // From: tests\Features\PageFooter.feature:7:1
});

When('The user clicks on About Us from the page footer', async ({}) => {
  // Step: When The user clicks on About Us from the page footer
  // From: tests\Features\PageFooter.feature:8:1
});

Then('Numpy Ninja - About Us page is displayed', async ({}) => {
  // Step: Then Numpy Ninja - About Us page is displayed
  // From: tests\Features\PageFooter.feature:9:1
});

When('The user clicks on Blogs from the page footer', async ({}) => {
  // Step: When The user clicks on Blogs from the page footer
  // From: tests\Features\PageFooter.feature:13:1
});

Then('Numpy Ninja - Blog page is displayed', async ({}) => {
  // Step: Then Numpy Ninja - Blog page is displayed
  // From: tests\Features\PageFooter.feature:14:1
});

When('The user clicks on Contact Us from the page footer', async ({}) => {
  // Step: When The user clicks on Contact Us from the page footer
  // From: tests\Features\PageFooter.feature:18:1
});

Then('Numpy Ninja - Contact page is displayed', async ({}) => {
  // Step: Then Numpy Ninja - Contact page is displayed
  // From: tests\Features\PageFooter.feature:19:1
});

When('The user clicks on Terms from the page footer', async ({}) => {
  // Step: When The user clicks on Terms from the page footer
  // From: tests\Features\PageFooter.feature:23:1
});

Then('Numpy Ninja - Terms of Service page is displayed', async ({}) => {
  // Step: Then Numpy Ninja - Terms of Service page is displayed
  // From: tests\Features\PageFooter.feature:24:1
});
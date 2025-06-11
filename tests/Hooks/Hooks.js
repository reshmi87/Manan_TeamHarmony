//npm install --save-dev @playwright/test allure-playwright 

const { createBdd } = require('playwright-bdd');
const { Before, After } = createBdd();
import { chromium } from '@playwright/test';
import { POManager } from '../PageObject/POManager';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

Before(async function () {
  this.browser = await chromium.launch({
    headless: true, // Run in headless mode
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.pageManager = new POManager(this.page);
});

After(async function () { // Use a regular function to bind 'this'
  // Save the screenshot
  const screenshotPath = `screenshots/screenshot-${Date.now()}.png`;
  await this.page.screenshot({ path: screenshotPath });

  // Add a text attachment
  await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);

  // Add a screenshot as an attachment
  await allure.attachmentPath("Screenshot", screenshotPath, ContentType.PNG);

  // Close the browser
  await this.browser.close();
});
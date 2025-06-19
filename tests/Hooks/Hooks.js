import { createBdd } from "playwright-bdd";
import { ContentType } from "allure-js-commons";
import * as allure from "allure-js-commons";

const{Before, After, BeforeAll, AfterAll} = createBdd();

Before(async({page})=>{
    await page.goto(process.env.appurl);
})

After(async({page})=>{
   await allure.attachment("Team Harmony: Text file", "This is the file content.", ContentType.TEXT);

  // Capture and attach screenshot (from Playwright)
  const screenshotBuffer = await page.screenshot();
 await allure.attachment("Team Harmony: Screenshot", screenshotBuffer, ContentType.PNG);

  console.log("End of Execution");
})
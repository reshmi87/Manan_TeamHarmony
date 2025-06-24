import { createBdd } from "playwright-bdd";
import { ContentType } from "allure-js-commons";
import * as allure from "allure-js-commons";

const{Before, After} = createBdd();

Before(async({page})=>{
    await page.goto(process.env.appurl);
})

After(async({page})=>{

  const screenshotBuffer = await page.screenshot();
 await allure.attachment("Team Harmony: Screenshot", screenshotBuffer, ContentType.PNG);

  console.log("End of Execution");
})
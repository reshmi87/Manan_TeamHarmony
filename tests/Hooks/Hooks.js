import { createBdd } from "playwright-bdd";

const{Before, After, BeforeAll, AfterAll} = createBdd();

Before(async({page})=>{
    await page.goto(process.env.appurl);
})

After(async({page})=>{
    console.log("This is a After")
})
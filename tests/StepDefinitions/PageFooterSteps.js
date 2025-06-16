import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const DashboardPage  = require("../PageObject/DashboardPage.js");
const PageFooterPage  = require("../PageObject/PageFooterPage.js");

const{Given,When,Then} = createBdd();

// Given('The user launched the Manan application and logged in successfully', async ({page}) => {
//   const loginpage = new Login(page);
//   await loginpage.signintomanan() ;
// });

// Given('The user is in the Dashboard page', async ({page}) => {
//   const dashboard = new DashboardPage(page);
//    await dashboard.launchdashboard();
// });

When('The user clicks on About Us from the page footer', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.clickaboutuslink();
});

Then('Numpy Ninja - About Us page is displayed', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.checkaboutuslink();
});

When('The user clicks on Blogs from the page footer', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.clickbloglink();
});

Then('Numpy Ninja - Blog page is displayed', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.checkbloglink();
});

When('The user clicks on Contact Us from the page footer', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.clickcontactuslink();
});

Then('Numpy Ninja - Contact page is displayed', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.checkcontactuslink();
});

When('The user clicks on Terms from the page footer', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.clicktermslink();
});

Then('Numpy Ninja - Terms of Service page is displayed', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.checktermslink();
});

When('The user clicks on Privacy from the page footer', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.clickprivacylink();
});

Then('Numpy Ninja - Privacy Policy page is displayed', async ({page}) => {
    const footer  = new PageFooterPage(page);
    await footer.checkprivacylink();
});
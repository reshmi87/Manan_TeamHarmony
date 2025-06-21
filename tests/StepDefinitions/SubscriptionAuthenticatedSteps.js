import { createBdd } from "playwright-bdd";
import { expect} from '@playwright/test';
const Login = require("../PageObject/Login.js");
const SubscriptionAuthenticatedPage = require("../PageObject/SubscriptionAuthenticatedPage.js");

const{Given,When,Then} = createBdd();

Given('The Premium user logged in to the Manan Application', async ({page}) => {
   const loginpage = new Login(page);
   await loginpage.Premiumusersignin();
});

When('The user clicks on the Subscription Plans from the Profile at the top', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.GotoSubscriptionpage();
});

Then('Verify the Free Plan block is displayed with the Switch for Free button for the Premium user', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.PremiumuserFreePlanblock();
});

Then('Verify the Premium plan block is displayed with Cancel Subscription button for the Premium user', async ({page}) => {
   const subscriptionpage = new SubscriptionAuthenticatedPage(page);
   await subscriptionpage.premiumplanblock();
});

Then('Verify the Current Plan shows it is Premium account with the Cancel Subscription button', async ({page}) => {
   const subscriptionpage = new SubscriptionAuthenticatedPage(page);
   await subscriptionpage.currentpremiumblock();
});

Given('A New user logged in to the Manan Application', async ({page}) => {
   const loginpage = new Login(page);
   await loginpage.newusersignin();
});

Then('Verify the Free Plan block is displayed with the Current Plan button disabled', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.NewuserFreePlanblock();
});

Then('Verify the Premium plan block is displayed with Subscribe button enabled', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.NewuserPremiumPlanblock();
});

Then('Verify the Current Plan shows it is Free and a Upgrade to Premium button is displayed', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.NewuserCurrentPlanblock();
});

Given('The user is in the Subscription Page', async ({page}) => {
    const loginpage = new Login(page);
    await loginpage.Premiumusersignin();
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.GotoSubscriptionpage();
});

When('The user clicks on the link Manan at the top in Subscription page', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.clickManan();
});

Then('Self Assessment page is displayed when the clicked on Manan from Subscription Page', async ({page}) => {
    const subscriptionpage = new SubscriptionAuthenticatedPage(page);
    await subscriptionpage.checkaftermananclick();
});
const { expect } = require('@playwright/test');

class SubscriptionAuthenticatedPage {

    constructor(page){
        this.dashboard = page.getByRole('button', { name: 'Dashboard' });
        this.profile = page.locator('#root > div > nav > div > button');
        this.subscriptionplan = page.getByRole('menuitem', { name: 'Subscription Plans' });

        this.freeplantext = page.getByText('Free Plan');
        this.limited = page.getByText('Limited', { exact: true });
        this.zeroprice = page.getByText('$0');
        this.month = page.getByText('/month').first();
        this.basicaccess = page.getByText('Basic access to AI medical');
        this.aianlyses = page.getByText('AI analyses per month');
        this.basictriage = page.getByText('Basic triage assessments');
        this.pdfexportcapabilities = page.locator('div').filter({ hasText: /^PDF export capabilities$/ });
        this.limitedaccess = page.getByText('Limited access to premium');
        this.standardresponse = page.getByText('Standard response time');
        this.switchforfreebutton = page.getByRole('button', { name: 'Switch to Free' });
        this.currentplanfornewuserbutton = page.getByRole('button', { name: 'Current Plan' });


        this.premiumplanrecommend = page.getByRole('heading', { name: 'Premium Plan Recommended' }).getByRole('img')
        this.premiumcost = page.getByText('$19.99');
        this.premiumpermonth = page.getByText('/month').nth(1);
        this.unlimitedaccesstext = page.getByText('Unlimited access to all');
        this.unlimitedai = page.getByText('Unlimited AI analyses');
        this.advancedtriage = page.getByText('Advanced triage assessments');
        this.enhancedpdf = page.getByText('Enhanced PDF reports');
        this.accesstoallpremium = page.getByText('Access to all premium resources');
        this.priority = page.getByText('Priority support');
        this.cancelsubscriptionbutton = page.getByRole('button', { name: 'Cancel Subscription' }).first();   
        this.subscribenowfornewuser = page.getByRole('button', { name: 'Subscribe Now' });  
        
        this.premiumcurrentplan = page.getByText('Current Plan: Premium');
        this.premiumstatus = page.getByText('Status: Active');
        this.premiumstartdatetitle = page.getByRole('heading', { name: 'Start Date' });
        this.premiumnextbillingdate = page.getByRole('heading', { name: 'Next Billing Date' });
        this.premiumautorenew= page.getByRole('heading', { name: 'Auto-Renew' });
        this.premiumenabled = page.getByText('Enabled');
        this.cancelpremiumfromstatus =page.getByRole('button', { name: 'Cancel Subscription' }).nth(1);

        this.newusercurrentplan = page.getByRole('heading', { name: 'Current Plan: Free' });
        this.newuserupgradebutton = page.getByRole('button', { name: 'Upgrade to Premium' });

        this.manan = page.getByRole('link', { name: 'Manan' });
        this.mananhomepage = page.getByText('(Multi-Algorithm Navigation');
}

    async GotoSubscriptionpage(){
        await this.dashboard.click();
        await this.profile.click();
        await this.subscriptionplan.click();
    }

    async PremiumuserFreePlanblock(){
        await expect(this.freeplantext).toBeVisible();
        await expect(this.limited).toBeVisible();
        await expect(this.zeroprice).toBeVisible();
        await expect(this.month).toBeVisible();
        await expect(this.basicaccess).toBeVisible();
        await expect(this.aianlyses).toBeVisible();
        await expect(this.basictriage).toBeVisible();
        await expect(this.pdfexportcapabilities).toBeVisible();
        await expect(this.limitedaccess).toBeVisible();
        await expect(this.standardresponse).toBeVisible();
        await expect(this.switchforfreebutton).toBeVisible();
        const isEnabled = await this.switchforfreebutton.isEnabled();
        expect(isEnabled).toBe(true); 
        console.log('Switch to Free button is enabled:', isEnabled);
    }

    async premiumplanblock(){
         await expect(this.premiumplanrecommend).toBeVisible();
         await expect(this.premiumcost).toBeVisible();
         await expect(this.premiumpermonth).toBeVisible();
         await expect(this.unlimitedaccesstext).toBeVisible();
         await expect(this.unlimitedai).toBeVisible();
         await expect(this.advancedtriage).toBeVisible();
         await expect(this.enhancedpdf).toBeVisible();
         await expect(this.accesstoallpremium).toBeVisible();
         await expect(this.priority).toBeVisible();
         await expect(this.cancelsubscriptionbutton).toBeVisible();
         const isEnabled = await this.cancelsubscriptionbutton.isEnabled();
         expect(isEnabled).toBe(true); 
         console.log('Cancel Subscription button is enabled:', isEnabled);
    }

     async currentpremiumblock(){
        await expect(this.premiumcurrentplan).toBeVisible();
        await expect(this.premiumstatus).toBeVisible();
        await expect(this.premiumstartdatetitle).toBeVisible();
        await expect(this.premiumnextbillingdate).toBeVisible();
        await expect(this.premiumautorenew).toBeVisible();
        await expect(this.premiumenabled).toBeVisible();
        await expect(this.cancelpremiumfromstatus).toBeVisible();
        const isEnabled = await this.cancelpremiumfromstatus.isEnabled();
        expect(isEnabled).toBe(true); 
        console.log('Cancel Subscription button in Currentplan block is enabled:', isEnabled);
     }
    async NewuserFreePlanblock(){
        await expect(this.freeplantext).toBeVisible();
        await expect(this.limited).toBeVisible();
        await expect(this.zeroprice).toBeVisible();
        await expect(this.month).toBeVisible();
        await expect(this.basicaccess).toBeVisible();
        await expect(this.aianlyses).toBeVisible();
        await expect(this.basictriage).toBeVisible();
        await expect(this.pdfexportcapabilities).toBeVisible();
        await expect(this.limitedaccess).toBeVisible();
        await expect(this.standardresponse).toBeVisible();
        await expect(this.currentplanfornewuserbutton).toBeVisible();
        const isEnabled = await this.currentplanfornewuserbutton.isEnabled();
        expect(isEnabled).toBe(false); 
        if(!isEnabled){
        console.log('Current Plan is currently disabled');
        }
        else{
        console.log('Current Plan is enabled');
        }
    }

    async NewuserPremiumPlanblock(){
         await expect(this.premiumplanrecommend).toBeVisible();
         await expect(this.premiumcost).toBeVisible();
         await expect(this.premiumpermonth).toBeVisible();
         await expect(this.unlimitedaccesstext).toBeVisible();
         await expect(this.unlimitedai).toBeVisible();
         await expect(this.advancedtriage).toBeVisible();
         await expect(this.enhancedpdf).toBeVisible();
         await expect(this.accesstoallpremium).toBeVisible();
         await expect(this.priority).toBeVisible();
         await expect(this.subscribenowfornewuser).toBeVisible();
        const isEnabled = await this.subscribenowfornewuser.isEnabled();
        expect(isEnabled).toBe(true); 
        console.log('Subscribe Now button is enabled:', isEnabled);
    }

    async NewuserCurrentPlanblock(){

        await expect(this.newusercurrentplan).toBeVisible();
        await expect(this.newuserupgradebutton).toBeVisible();
        const isEnabled = await this.newuserupgradebutton.isEnabled();
        expect(isEnabled).toBe(true); 
        console.log('Upgrade to Premium button is enabled:', isEnabled);
    }

    async clickManan(){
        await this.manan.click();
    }

    async checkaftermananclick(){
        await expect(this.mananhomepage).toBeVisible();
    }
}
module.exports=SubscriptionAuthenticatedPage;
const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page){
        this.selfassessmentpage = page.getByText('(Multi-Algorithm Navigation');
        this.dashboard = page.getByRole('button', { name: 'Dashboard' });

        this.welcometitle = page.getByRole('heading', { name: 'Welcome to Your Medical' });
        this.welcometext = page.getByText('Access and manage your');
        this.startnewassessmentbutton = page.getByRole('button', { name: 'Start New Assessment' });
        this.previousassessmentbutton = page.getByRole('button', { name: 'View Previous Assessments' });
        this.usagestatisticstitle = page.getByRole('heading', { name: 'Usage Statistics' });
        this.usagestatisticstext = page.getByText('Track your AI analysis usage');
        this.analysisusagetitle = page.getByRole('heading', { name: 'Analysis Usage' });
        this.analysisusagetext = page.getByText('Free tier allows 20 analyses');
        this.analysisusagegraph = page.locator('text=of 20');
        this.upgradetopremiumbutton = page.getByRole('link', { name: 'Upgrade Now' })
        this.recentassessmenttitle = page.getByRole('heading', { name: 'Recent Assessments' });
        this.recentassessmenttext = page.getByText('You have no recent');
        this.startyourfirstassessmentlink = page.getByRole('button', { name: 'Start your first assessment →' });
        this.accountsettingstitle = page.getByRole('heading', { name: 'Account Settings' });
        this.accoutnsettingstext = page.getByText('Manage your account settings');
        this.updatesettingslink = page.getByRole('button', { name: 'Update settings →' });
        this.subscriptionplanstitle = page.getByRole('heading', { name: 'Subscription Plans' });
        this.subscriptionplanstext = page.getByText('Upgrade to Premium for');
        this.upgradenowlink = page.getByRole('button', { name: 'Upgrade now' });
        this.assessmenthistorytitle = page.getByRole('heading', { name: 'Assessment History' });
        this.assessmenthistorytext = page.getByText('View your previous medical');
        this.viewhistorylink = page.getByRole('button', { name: 'View history →' });

        this.previousassessmentpage = page.getByRole('heading', { name: 'Previous Assessments' });
        this.settingpage = page.getByRole('heading', { name: 'Settings' });
        this.subscriptionpage =  page.getByText('Choose the plan that fits');
        this.freeplanblock = page.getByText('Free Plan');
        this.premiumplanblock = page.getByText('Premium Plan');
        this.currentplanblock = page.getByText('Current Plan: Free');

        this.profilelink = page.locator('#root > div > nav > div > button');
        this.profileemailid = page.locator('div').filter({ hasText: process.env.username }).nth(2);
        this.profilesettings = page.getByText('Settings', { exact: true });
        this.profilepreviousassess = page.getByText('Previous Assessments', { exact: true });
        this.profilesubscriptionplans = page.getByLabel('N', { exact: true }).getByText('Subscription Plans');
        this.profilelogout = page.getByText('Log out');
        this.sessionended = page.locator('div.text-sm.font-semibold', { hasText: 'Session Ended' });
        this.loggedouttext = page.locator('div.text-sm.opacity-90', { hasText: 'You have been securely logged out of MANAN Medical Assistant.' });
    
        //Premium account Page Elements
        this.premiumusagestatisticstext = page.getByText('Track your AI analysis usage');
        this.premiumusage = page.getByRole('heading', { name: 'Premium Usage' });
        this.premiumusagetext = page.getByText('Unlimited AI analysis with');
        this.assessmentsofarbypremium = page.getByText('Used');
        this.subscriptionplantext = page.getByText('You\'re on the Premium plan');
        this.viewyourplanlink = page.getByRole('button', { name: 'View your plan →' });
        this.currentplan = page.getByText('Current Plan: Premium');

        //FirstTimeuser
        this.newusergraph = page.locator('div').filter({ hasText: /^0of 20$/ }).nth(2);

        this.manan = page.getByRole('link', { name: 'Manan' });
        this.mananhomepage = page.getByText('(Multi-Algorithm Navigation');
    }

    async checkifselfassessmentpage(){
       const textinpage = await this.selfassessmentpage.textContent();
        return textinpage;
    }
    async launchdashboard() {
        await this.dashboard.click();
    }
    
    async checkdashboardpageui(){
        await expect(this.welcometitle).toBeVisible();
        await expect(this.welcometext).toBeVisible();
        await expect(this.startnewassessmentbutton).toBeVisible();
        await expect(this.previousassessmentbutton).toBeVisible();
        await expect(this.usagestatisticstitle).toBeVisible();
        await expect(this.usagestatisticstext).toBeVisible();
        await expect(this.analysisusagetitle).toBeVisible();
        await expect(this.analysisusagetext).toBeVisible();
        await expect(this.analysisusagegraph).toBeVisible();
        await expect(this.upgradetopremiumbutton).toBeVisible();
        await expect(this.recentassessmenttitle).toBeVisible();
        await expect(this.recentassessmenttext).toBeVisible();
        await expect(this.startyourfirstassessmentlink).toBeVisible();
        await expect(this.accountsettingstitle).toBeVisible();
        await expect(this.accoutnsettingstext).toBeVisible();
        await expect(this.updatesettingslink).toBeVisible();
        await expect(this.subscriptionplanstitle).toBeVisible();
        await expect(this.subscriptionplanstext).toBeVisible();
        await expect(this.upgradenowlink).toBeVisible();
        await expect(this.assessmenthistorytitle).toBeVisible();
        await expect(this.assessmenthistorytext).toBeVisible();
        await expect(this.viewhistorylink).toBeVisible();
    }

    async clickstartnewassessmentbutton() {
        await this.startnewassessmentbutton.click();
    }

    async clickpreviousassessmentbutton() {
        await this.previousassessmentbutton.click();
    }

    async checkpreviousassessmentpage() {
        await expect(this.previousassessmentpage).toBeVisible();
    }

    async clickstartyourfirstassessmentlink(){
        await this.startyourfirstassessmentlink.click();
    }

    async clickupdatesettingslink(){
        await this.updatesettingslink.click();
    }

    async checksettingpage() {
        await expect(this.settingpage).toBeVisible();
    }

    async clickupgradenowlink(){
        await this.upgradenowlink.click();
    }

    async checksubscriptionpage(){
        await expect(this.subscriptionpage).toBeVisible();
        await expect(this.freeplanblock).toBeVisible();
        await expect(this.premiumplanblock).toBeVisible();
        await expect(this.currentplanblock).toBeVisible();
    }

    async clickviewhistorylink(){
        await this.viewhistorylink.click();
    }

    async clickupgradetopremiumbutton(){
        await this.upgradetopremiumbutton.click();
    }

    async clickprofilelink(){
        await this.profilelink.click();
    }

    async checkprofileoptions(){
        await expect(this.profileemailid).toBeVisible();
        await expect(this.profilesettings).toBeVisible();
        await expect(this.profilepreviousassess).toBeVisible();
        await expect(this.profilesubscriptionplans).toBeVisible();
        await expect(this.profilelogout).toBeVisible();
        const email = await this.profileemailid.textContent();
        console.log("Profile belongs to: "+email);
        // logToAllure("Profile belongs to: "+email);
    }

    async clickprofilesettings(){
        await this.profilesettings.click();
    }

    async clickprofilepreviousassess(){
        await this.profilepreviousassess.click();
    }

    async clickprofilesubscriptionplans(){
        await this.profilesubscriptionplans.click();
    }

    async clickprofilelogout(){
        await this.profilelogout.click();
    }

    async checkloggedout(){
        await expect(this.sessionended).toBeVisible();
        await expect(this.loggedouttext).toBeVisible({ timeout: 50000 });
    }

    async checkpremiumaccount(){
        await expect(this.welcometitle).toBeVisible();
        await expect(this.welcometext).toBeVisible();
        await expect(this.startnewassessmentbutton).toBeVisible();
        await expect(this.previousassessmentbutton).toBeVisible();
        await expect(this.usagestatisticstitle).toBeVisible();
        await expect(this.premiumusagestatisticstext).toBeVisible();
        console.log(this.premiumusagestatisticstext.textContent());
        await expect(this.premiumusage).toBeVisible();
        await expect(this.premiumusagetext).toBeVisible();
        console.log(this.premiumusagetext.textContent());
        await expect(this.recentassessmenttitle).toBeVisible();
        await expect(this.recentassessmenttext).toBeVisible();
        await expect(this.startyourfirstassessmentlink).toBeVisible();
        await expect(this.accountsettingstitle).toBeVisible();
        await expect(this.accoutnsettingstext).toBeVisible();
        await expect(this.updatesettingslink).toBeVisible();
        await expect(this.subscriptionplanstitle).toBeVisible();
        await expect(this.assessmentsofarbypremium).toBeVisible();
        await expect(this.subscriptionplantext).toBeVisible();
        console.log(this.subscriptionplantext.textContent());
        await expect(this.viewyourplanlink).toBeVisible();
        await expect(this.assessmenthistorytitle).toBeVisible();
        await expect(this.assessmenthistorytext).toBeVisible();
        await expect(this.viewhistorylink).toBeVisible();
    }

    async clickviewyourplan(){
        await this.viewyourplanlink.click();
        await expect(this.currentplan).toBeVisible();
        console.log(this.currentplan.textContent());
    }

    async checkgraphfornewuser(){
        await expect(this.newusergraph).toBeVisible();
    }

    async clickManan(){
        await this.manan.click();
    }

    async checkaftermananclick(){
        await expect(this.mananhomepage).toBeVisible();
    }
}

module.exports=DashboardPage;
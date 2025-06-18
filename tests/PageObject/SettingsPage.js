const { expect } = require('@playwright/test');

class SettingsPage {

    constructor(page){
        this.userprofile = page.getByRole('heading', { name: 'User Profile' });
        this.accinfo = page.getByText('Your account information');
        this.profileicon = page.getByRole('img', { name: 'Profile' });
        this.email = page.getByText(process.env.username);
        this.notificationpreference = page.getByRole('heading', { name: 'Notification Preferences' });
        this.managenotification = page.getByText('Manage how you receive');
        this.emailnotification = page.getByText('Email NotificationsReceive');
        this.emailnotificationtext = page.getByText('Receive case analysis updates');
        this.emailnotificationtoggle = page.getByRole('switch', { name: 'Email Notifications' });
        this.appnotification = page.getByText('App Notifications', { exact: true });
        this.appnotificationtext = page.getByText('Receive in-app notifications');
        this.appnotificationtoggle = page.getByRole('switch', { name: 'App Notifications' });
        this.notificationsave = page.getByRole('button', { name: 'Save Changes' });
        this.medicalresearch = page.getByRole('heading',{ name: 'Medical Research' });
        this.savesuccess = page.getByRole('region', { name: 'Notifications (F8)' }).getByText('Notification Authentication Successful', { exact: false });
        this.savesuccesstext = page.getByRole('region', { name: 'Notifications (F8)' }).getByText('Your notification preferences have been updated', { exact: true });
        this.savemessageclose = page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button');
        this.manan = page.getByRole('link', { name: 'Manan' });
        this.dashboard= page.getByRole('button', { name: 'Dashboard' });
        this.settingslink = page.getByRole('button', { name: 'Update settings →' });

    }

    async checkuserprofile(){
       await expect(this.userprofile).toBeVisible();
       await expect(this.accinfo).toBeVisible();
       await expect(this.profileicon).toBeVisible();
       await expect(this.email).toBeVisible();
    }

     async checknotificationpreference(){
       await expect(this.notificationpreference).toBeVisible();
       await expect(this.managenotification).toBeVisible();
       await expect(this.emailnotification).toBeVisible();
       await expect(this.emailnotificationtext).toBeVisible();
       await expect(this.emailnotificationtoggle).toBeVisible();
       await expect(this.appnotification).toBeVisible();
       await expect(this.appnotificationtext).toBeVisible();
       await expect(this.appnotificationtoggle).toBeVisible();
       await expect(this.notificationsave).toBeVisible();
    }

     async checkmedicalresearch(){
       await expect(this.medicalresearch).toBeVisible();
    }

    async makenotificationchanges(){
        await this.emailnotificationtoggle.click();
        await this.appnotificationtoggle.click();
        await this.notificationsave.click();
    }

    async checkifnotificationsaved(){
        await expect(this.savesuccesstext).toBeVisible();
        await this.savemessageclose.click();
        await this.manan.click();
        await this.dashboard.click();
        await this.settingslink.click();
        await expect(this.emailnotificationtoggle).toHaveAttribute('aria-checked', 'false'); 
        await expect(this.appnotificationtoggle).toHaveAttribute('aria-checked', 'false');
        await this.emailnotificationtoggle.click();
        await this.appnotificationtoggle.click();
        await this.notificationsave.click();
    }
}

module.exports=SettingsPage;
const { expect } = require('@playwright/test');

class PageFooterPage {

    constructor(page){
        this.aboutuslink = page.getByRole('link', { name: 'About Us' });
        this.numpyninja = page.getByRole('link', { name: 'NumpyNinja Logo NumpyNinjaTM' });
        this.aboutuspage = page.getByRole('heading', { name: 'About Us' });
        this.whoarewe = page.getByRole('heading', { name: 'Who Are We?' });
        this.whatdowedo = page.getByRole('heading', { name: 'What Do We Do?' });
        this.whatweworkon = page.getByRole('heading', { name: 'What We Work On' });
        this.numpyninjafooter = page.getByText('NumpyNinjaTM Inc.');

        this.bloglink = page.getByRole('link', { name: 'Blog' });
        this.latestblogposts = page.getByRole('heading', { name: 'Latest Blog Posts' });
        this.diveintotext = page.getByText('Dive into our latest insights');

        this.contactuslink = page.getByRole('link', { name: 'Contact Us' });
        this.contactustext = page.getByRole('heading', { name: 'Contact Us' });
        this.getintouchwithustext = page.getByText('Get in touch with us. We\'d');
        this.address = page.getByRole('heading', { name: 'Address' });
        this.businesshours = page.getByRole('heading', { name: 'Business Hours' });
        this.sendusamessage = page.getByRole('heading', { name: 'Send us a Message' });

        this.termslink = page.getByRole('link', { name: 'Terms' });
        this.termsofservicepage = page.getByRole('heading', { name: 'Terms of Service' });
        this.agreementblock = page.getByRole('heading', { name: 'Agreement to Terms' });
        this.uselicenceblock = page.getByRole('heading', { name: 'Use License' });
        this.disclaimerblock = page.getByRole('heading', { name: 'Disclaimer' });
        this.limitationsblock = page.getByRole('heading', { name: 'Limitations' });

        this.privacylink = page.getByRole('link', { name: 'Privacy' });
        this.privacypolicy = page.getByRole('heading', { name: 'Privacy Policy' });
        this.information = page.getByRole('heading', { name: 'Information We Collect' });
        this.useofinformation = page.getByRole('heading', { name: 'Use of Information' });
        this.cookiepolicy = page.getByRole('heading', { name: 'Cookie Policy' });
        this.dataprotectionrights = page.getByRole('heading', { name: 'Data Protection Rights' });
    }

    async clickaboutuslink(){
       await this.aboutuslink.click();
    }

    async checkaboutuslink(){
        await expect(this.numpyninja).toBeVisible();
        await expect(this.aboutuspage).toBeVisible();
        await expect(this.whoarewe).toBeVisible();
        await expect(this.whatdowedo).toBeVisible();
        await expect(this.whatweworkon).toBeVisible();
        await expect( this.numpyninjafooter).toBeVisible();
    }

    async clickbloglink(){
       await this.bloglink.click();
    }

     async checkbloglink(){
        await expect(this.latestblogposts).toBeVisible();
        await expect(this.diveintotext).toBeVisible();
     }

    async clickcontactuslink(){
       await this.contactuslink.click();
    }

    async checkcontactuslink(){
        await expect(this.contactustext).toBeVisible();
        await expect(this.getintouchwithustext).toBeVisible();
        await expect(this.address).toBeVisible();
        await expect(this.businesshours).toBeVisible();
        await expect(this.sendusamessage).toBeVisible();
    }

    async clicktermslink(){
       await this.termslink.click();
    }

    async checktermslink(){
        await expect(this.termsofservicepage).toBeVisible();
        await expect(this.agreementblock).toBeVisible();
        await expect(this.uselicenceblock).toBeVisible();
        await expect(this.disclaimerblock).toBeVisible();
        await expect(this.limitationsblock).toBeVisible();
    }

    async clickprivacylink(){
       await this.privacylink.click();
    }

    async checkprivacylink(){
        await expect(this.privacypolicy).toBeVisible();
        await expect(this.information).toBeVisible();
        await expect(this.useofinformation).toBeVisible();
        await expect(this.cookiepolicy).toBeVisible();
        await expect(this.dataprotectionrights).toBeVisible();
    }
}

module.exports=PageFooterPage;
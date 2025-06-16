const { expect } = require('@playwright/test');

class SettingsPage {

    constructor(page){
        this.aboutuslink = page.getByRole('link', { name: 'About Us' });
    }

     async clickaboutuslink(){
       await this.aboutuslink.click();
    }

}

module.exports=SettingsPage;
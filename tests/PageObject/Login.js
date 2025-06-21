const SigninData = require('../TestData/SigninData.json');

class Login {

    constructor(page)
    {
        this.page = page;
        this.signin = page.getByRole('button', { name: 'Sign In' });
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.signinbutton = page.getByRole('button', { name: 'Sign In' });

        this.continuewithgoogle = page.getByRole('button', { name: 'Continue with Google' });
        this.email = page.getByRole('textbox', { name: 'Email or phone' });
        this.next = page.getByRole('button', { name: 'Next' });
        this.googlepassword = page.getByRole('textbox', { name: 'Enter your password' });
        

    }

    async signintomanan() {
        await this.signin.click();
        await this.username.fill(process.env.username);
        await this.password.fill(process.env.password);
        await this.signinbutton.click();
    }

    async Premiumusersignin(){
        await this.signin.click();
        await this.continuewithgoogle.click();
        await this.email.fill(process.env.username);
        await this.next.click();
        await this.googlepassword.fill(process.env.password);
        await this.next.click();
    }

    async newusersignin() {
        await this.signin.click();
        await this.username.fill(SigninData.newUser.username);
        await this.password.fill(SigninData.newUser.password);
        await this.signinbutton.click();
    }
}

module.exports=Login;
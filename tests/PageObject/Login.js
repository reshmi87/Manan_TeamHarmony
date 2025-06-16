class Login {

    constructor(page)
    {
        this.page = page;
        this.signin = page.getByRole('button', { name: 'Sign In' });
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.signinbutton = page.getByRole('button', { name: 'Sign In' });
    }

     async signintomanan() {
        await this.signin.click();
        await this.username.fill(process.env.username);
        await this.password.fill(process.env.password);
        await this.signinbutton.click();
    }
}

module.exports=Login;
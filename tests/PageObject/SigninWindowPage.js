const { expect } = require('@playwright/test');
const SigninData = require('../TestData/SigninData.json');

export class SigninWindowPage {
  constructor(page) {
    this.page = page;
  
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.continueWithGoogleButton = page.getByRole('button', { name: 'Continue with Google' });
    this.emailOrPhoneInput = page.getByRole('textbox', { name: 'Email or phone' });
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
    this.alreadyGoogleuser = page.getByRole('link', { name: 'Numpy Ninja Playwright Team' })
    this.dashboardButton = page.getByRole('button', { name: 'Dashboard' });
    this.userMenuButton = page.getByRole('navigation').locator('div');
    this.logoutMenuItem = page.getByRole('menuitem', { name: 'Log out' });
    this.signUpTab = page.getByRole('tab', { name: 'Sign Up' });
    this.signInTab = page.getByRole('tab', { name: 'Sign In' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    //
    this.signuptabEmail = page.getByRole('textbox', { name: 'Email Address' })
    this.passwordSignUpInput = page.getByRole('textbox', { name: 'Password', exact: true });
    this.signupPasswordInput = page.locator('#register-password');
    this.signupUsernameInput = page.locator('#register-username');
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });
    this.signInuswernameInput = page.locator('#login-username');
    this.signInPasswordInput = page.locator('#login-password');
    this.signupconfirmPasswordInput = page.locator('#register-confirm-password')
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.statusRole = page.getByRole('status');
    this.statusMessage = page.getByRole('status').filter({ hasText: 'Authentication Successful' }).first();
    this.successMessage = page.getByRole('status').filter({ hasText: 'Registration Successful' }).first();
  }

  async openSignInModal() {
    await this.signInButton.click();
  }

  async signInWithGoogle(email, password) {
    await this.continueWithGoogleButton.click();
    await this.emailOrPhoneInput.click();
    await this.emailOrPhoneInput.fill(email);
    await this.nextButton.click();
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.nextButton.click();
  }
  async clickContinueWithGoogle() {
    await this.signInWithGoogle(SigninData.googleUser.email, SigninData.googleUser.password);
  }
  
  async premiumUserlogin() {
    await this.signInWithGoogle(SigninData.premiumUser.email, SigninData.premiumUser.password)
  }

  async verifySignInModal() {
    await expect(this.continueWithGoogleButton).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordSignUpInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }
  async verifySignUpForm() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordSignUpInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.createAccountButton).toBeVisible();
    await expect(this.signuptabEmail).toBeVisible();
  }

  async switchToSignUpTab() {
    await this.signUpTab.click();
  }

  async switchToSignInTab() {
    await this.signInTab.click();
  }
    
  async expectAuthenticationSuccess() {
    await this.successMessage.waitFor({ state: 'visible' });
    await expect(this.successMessage).toContainText('Registration Successful');
  }

  async expectStatusVisible(expectedText) {
    await expect(this.statusMessage).toBeVisible({ timeout: 10000 });
    await expect(this.statusMessage).toContainText(expectedText); 
  }

  async StatusVisible() {
    const expectedSuccess = SigninData.existingUser.success;  
    await this.expectStatusVisible(expectedSuccess);
    await this.AssessmentPage(); 
  }

  async expectErrorMessageToBe(expectedMessage) {
    await expect(this.statusRole).toContainText("Username already exists");
  }

  async expectErrorMismatchedPasswords() {
    await expect(this.page.getByText('Passwords do not match')).toBeVisible();
  }

  async blanksfieldserror() {
    await expect(this.page.getByText('Please fill in all field')).toBeVisible();
  }

  async AssessmentPage() {
    await expect(this.page).toHaveURL(process.env.appurl + 'app');
  }

  async LoginfailedwithIncorrectPassword() {
    const passwordError = this.page.getByText('Incorrect password.').first();
    await expect(passwordError).toBeVisible();
  }

  async LoginfailedwithIncorrectusername() {
    const usernameError = this.page.getByText('Incorrect username.').first();
    await expect(usernameError).toBeVisible();
  }

  async verifySignInModalClosed() {
    return expect(this.signInButton).toBeVisible();
  }

  async closeSignInModal() {
    await this.signInButton.click();
    await this.page.getByRole('button', { name: 'Close' }).click();
  }

  async existingUser() {
    const data = SigninData.existingUser;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(data.username);
    await this.signuptabEmail.fill(data.email);
    await this.signupPasswordInput.fill(data.password);
    await this.signupconfirmPasswordInput.fill(data.confirmPassword);
    await this.createAccountButton.click();
  }

  async Existingerror() {
    const expectedError = SigninData.existingUser.error;
    await this.expectErrorMessageToBe(expectedError);
  }

  async mismatchedPassword() {
    const data = SigninData.mismatchedPasswords;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(data.username);
    await this.signuptabEmail.fill(data.email);
    await this.signupPasswordInput.fill(data.password);
    await this.signupconfirmPasswordInput.fill(data.confirmPassword);
    await this.createAccountButton.click();
  }

  async blankConfirmPassword() {
    const data = SigninData.blankConfirmPassword;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(data.username);
    await this.signuptabEmail.fill(data.email);
    await this.signupPasswordInput.fill(data.password);
    await this.createAccountButton.click();
  }

  async blankPasswords() {
    const data = SigninData.blankPasswords;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(data.username);
    await this.signuptabEmail.fill(data.email);
    await this.createAccountButton.click();
  }

  async validSignUp() { 
    const data = SigninData.validSignup;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(data.username);
    await this.signuptabEmail.fill(data.email);
    await this.signupPasswordInput.fill(data.password);
    await this.signupconfirmPasswordInput.fill(data.confirmPassword);
    await this.createAccountButton.click();
  }

  async invalidUsername() {
    await this.signInuswernameInput.fill(SigninData.InvalidUsername.username);
    await this.signInPasswordInput.fill(SigninData.InvalidUsername.password);
    await this.signInButton.click();
  }

  async invalidPassword() {
    await this.signInuswernameInput.fill(SigninData.existingUser.username);
    await this.signInPasswordInput.fill(SigninData.InvalidPassword.password);
    await this.signInButton.click();
  }

  async validSigninwithexistingusernamePassword() {
    const data = SigninData.existingUser;
    await this.usernameInput.fill(data.username);
    await this.signInPasswordInput.fill(data.password);
    await this.signInButton.click();
  }
  async validSignUpwithrandomusername() {
    const data = SigninData.validSignup;
    // Generate a random username by appending a random number
    const randomUsername = `${data.username}_${Math.floor(Math.random() * 100000)}`;
    const randomEmail = `teamharmony_${Math.floor(Math.random() * 100000)}@example.com`;
    await this.switchToSignUpTab();
    await this.signupUsernameInput.fill(randomUsername);
    await this.signuptabEmail.fill(randomEmail);
    await this.passwordSignUpInput.fill(data.password);
    await this.signupconfirmPasswordInput.fill(data.confirmPassword);
    await this.createAccountButton.click(); 
    console.log(`Signed up with random username: ${randomUsername} and email: ${randomEmail}`);
  }   
}
module.exports = { SigninWindowPage };
class HomeScreen {
    get signin() {
        return $('[resource-id="com.booking:id/identity_landing_social_button_text"]');
    }

    get emailInput() {
        return $('[id="com.booking:id/identity_text_input_edit_text"]');
    }

    get passwordInput() {
        return $('android.widget.EditText[resource-id="com.booking:id/identity_text_input_edit_text"]:nth-child(1)');
    }


    get confirmPassword() {
        return $('android.widget.EditText[resource-id="com.booking:id/identity_text_input_edit_text"]:nth-child(2)');
    }

    get continueButton() {
        return $('[id="com.booking:id/identity_landing_social_button_text"]');
    }

    get invalidCredentials() {
        return $('[id="com.booking:id/textinput_error"]');
    }

    async successLogin (email, password) {
        await this.signin.click();
        await this.emailInput.setValue(email);
        await this.continueButton.click();
        await this.passwordInput.setValue(password);
        await this.confirmPassword.setValue(password);
        await this.continueButton.click();
        await this.continueButton.click();

    }


    async enterCredentials (email, password) {
        await this.signin.click();
        await this.emailInput.setValue(email);
        await this.continueButton.click();
        await this.passwordInput.setValue(password);
    }

    async confirmLogin(){
        await this.continueButton.click();
    }

    async failedLogin() {
        await expect(this.invalidCredentials).toHaveText('Incorrect password – try again')
    }
}

module.exports = new HomeScreen();

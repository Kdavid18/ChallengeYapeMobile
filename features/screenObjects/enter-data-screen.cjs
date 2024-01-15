class EnterDataScreen {
    get firstNameInput() {
        return $('[elementid="00000000-0000-03e1-ffff-ffff00000989"]');
    }

    get lastNameInput() {
        return $('[elementid="00000000-0000-03e1-ffff-ffff00000993"]');
    }

    get emailInput() {
        return $('[elementid="00000000-0000-03e1-ffff-ffff0000099d"]');
    }

    get countryInput() {
        return $('[elementid="00000000-0000-03e1-ffff-ffff000009c7"]');
    }

    get phoneNumberInput() {
        return $('[elementid="00000000-0000-03e1-ffff-ffff000009d1"]');
    }

    get purposeCheck() {
        return $('[id="com.booking:id/business_purpose_leisure"]');
    }

    get continueButton() {
        return $('[id="com.booking:id/action_button"]');
    }

    async confirmBooking (nombre, apellido, email, telefono, pais) {
        await this.firstNameInput.setValue(nombre);
        await this.lastNameInput.setValue(apellido);
        await this.emailInput.setValue(email);
        await this.countryInput.setValue(pais);
        await this.phoneNumberInput.setValue(telefono);
        await this.purposeCheck.click();
        await this.continueButton.click();
    }
}

module.exports = new EnterDataScreen();

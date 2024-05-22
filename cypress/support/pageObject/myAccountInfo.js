class AccountInfoPage {
    visit() {
        cy.navigateToAccountInfo();
    }

    fillForm(firstName, lastName) {
        cy.get('#firstname').clear().type(firstName);
        cy.get('#lastname').clear().type(lastName);
        cy.get('button[title="Save"]').click();
    }

    clearForm() {
        cy.get('#firstName').clear();
        cy.get('#lastName').clear();
    }

    changeEmail(newEmail, currentPassword) {
        cy.get('#change-email').click();
        cy.get('#email').clear().type(newEmail);
        cy.get('#current-password').type(currentPassword);
        cy.get('button[title="Save"]').click();
    }

    changePassword(currentPassword, newPassword, confirmPassword) {
        cy.get('#change-password').click();
        cy.get('#current-password').type(currentPassword);
        cy.get('#password').type(newPassword);
        cy.get('#password-confirmation').type(confirmPassword);
        cy.get('button[title="Save"]').click();
    }
}

export default AccountInfoPage;

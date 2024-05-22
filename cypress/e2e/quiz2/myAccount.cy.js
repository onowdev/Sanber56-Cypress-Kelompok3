import AccountInfoPage from '../../support/pageObject/myAccountInfo';
import AddressPage from '../../support/pageObject/myAccountAddress';

describe('My Account Tests', () => {
    const accountInfoPage = new AccountInfoPage();
    const addressPage = new AddressPage();

    beforeEach(() => {
        cy.fixture('myAccount').then((myAccount) => {
            // Langsung login di beforeEach
            cy.visit("https://magento.softwaretestingboard.com/customer/account/");
            cy.get('#email').clear().type(myAccount.email);
            cy.get('#pass').clear().type(myAccount.password);
            cy.get('#send2').click();
        });
    });

    it('should edit account information with valid data', () => {
        cy.fixture('myAccount').then((myAccount) => {
            accountInfoPage.visit();
            accountInfoPage.fillForm(myAccount.newFirstName, myAccount.newLastName);
            cy.get('.message-success').should('contain', 'You saved the account information.');
        });
    });

    it('should fail to edit account information with invalid data', () => {
        accountInfoPage.visit();
        accountInfoPage.clearForm();
        accountInfoPage.fillForm(' ', ' ');
        cy.get('.message-error').should('This is a required field.');
    });

    it('should change email with valid data', () => {
        cy.fixture('myAccount').then((myAccount) => {
            accountInfoPage.visit();
            accountInfoPage.changeEmail(myAccount.newEmail, myAccount.password);
            cy.get('.message-success').should('contain', 'You saved the account information.');
        });
    });

    it('should fail to change email with invalid current password', () => {
        cy.fixture('myAccount').then((myAccount) => {
            accountInfoPage.visit();
            accountInfoPage.changeEmail(myAccount.newEmail, 'wrongpassword');
            cy.get('.message-error').should('contain', 'Invalid current password.');
        });
    });

    it('should change password with valid data', () => {
        cy.fixture('myAccount').then((myAccount) => {
            accountInfoPage.visit();
            accountInfoPage.changePassword(myAccount.password, myAccount.newPassword, myAccount.newPassword);
            cy.get('.message-success').should('contain', 'You saved the account information.');
        });
    });

    it('should fail to change password with non-matching confirmation', () => {
        cy.fixture('myAccount').then((myAccount) => {
            accountInfoPage.visit();
            accountInfoPage.changePassword(myAccount.password, myAccount.newPassword, 'differentpassword');
            cy.get('.message-error').should('contain', 'Please make sure your passwords match.');
        });
    });

    it('should edit default billing address with valid data', () => {
        cy.fixture('myAccount').then((myAccount) => {
            cy.navigateToAccountInfo('Edit Default Billing Address'); // Pilih 'Edit Default Billing Address'
            addressPage.editAddress(
                myAccount.firstName, myAccount.lastName, myAccount.company, myAccount.phone, myAccount.street1, myAccount.street2,
                myAccount.city, myAccount.state, myAccount.postcode, myAccount.country
            );
            cy.get('.message-success').should('contain', 'You saved the default billing address.');
        });
    });

    it('should edit default shipping address with valid data', () => {
        cy.fixture('myAccount').then((myAccount) => {
            cy.navigateToAccountInfo('Edit Default Shipping Address'); // Pilih 'Edit Default Shipping Address'
            addressPage.editAddress(
                myAccount.firstName, myAccount.lastName, myAccount.company, myAccount.phone, myAccount.street1, myAccount.street2,
                myAccount.city, myAccount.state, myAccount.postcode, myAccount.country
            );
            cy.get('.message-success').should('contain', 'You saved the default shipping address.');
        });
    });
})

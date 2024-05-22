// cypress/support/pageObject/AddressPage.js

class AddressPage {
    visit() {
        cy.visit('/customer/address'); // Pastikan URL ini benar
    }

    addNewAddress(firstName, lastName, company, phone, street1, street2, street3, city, state, postcode, country) {
        //cy.get('a[title="Add New Address"]').click();
        cy.get('#firstname').clear().type(firstName);
        cy.get('#lastname').clear().type(lastName);
        cy.get('#company').clear().type(company);
        cy.get('#telephone').clear().type(phone);
        cy.get('#street_1').clear().type(street1);
        cy.get('#street_2').clear().type(street2);
        cy.get('#city').clear().type(city);
        cy.get('#region_id').select(state);
        cy.get('#postcode').clear().type(postcode);
        cy.get('#country').select(country);
        cy.get('button[title="Save Address"]').click();
    }

    editAddress(firstName, lastName, company, phone, street1, street2, street3, city, state, postcode, country) {
        //cy.get('a[title="Edit Address"]').click(); // Pastikan selektor ini benar
        cy.get('#firstname').clear().type(firstName);
        cy.get('#lastname').clear().type(lastName);
        cy.get('#company').clear().type(company);
        cy.get('#telephone').clear().type(phone);
        cy.get('#street_1').clear().type(street1);
        cy.get('#street_2').clear().type(street2);
        cy.get('#city').clear().type(city);
        cy.get('#region_id').select(state);
        cy.get('#postcode').clear().type(postcode);
        cy.get('#country').select(country);
        cy.get('button[title="Save Address"]').click();
    }
}

export default AddressPage;

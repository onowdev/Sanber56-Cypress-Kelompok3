// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('regis', (firstname,lastname,emailname,pass,confirpass ) => { 
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(emailname)
    cy.get('#password').type(pass)
    cy.get('#password-confirmation').type(confirpass)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
 })

Cypress.Commands.add('login', (email, pass) => {
     cy.get("#email").type(email)
     cy.get("#pass").type(pass)
 })

//MyAccount
Cypress.Commands.add('navigateToAccountInfo', (option = 'Edit') => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/");
    cy.wait(2000);
    cy.get('.customer-welcome', { timeout: 10000 }).first().click(); 
    // cy.get('a[title="My Account"]', { timeout: 10000 }).click();

    switch(option) {
        case 'Edit':
            cy.contains('Edit').click();
            break;
        case 'Change Password':
            cy.contains('Change Password').click();
            break;
        case 'Edit Default Billing Address':
            cy.contains('Edit Address').eq(0).click(); // Memilih elemen pertama untuk default billing address
            break;
        case 'Edit Default Shipping Address':
            cy.contains('Edit Address').eq(1).click(); // Memilih elemen kedua untuk default shipping address
            break;
        default:
            throw new Error(`Unknown option: ${option}`);
    }
});

// Cypress.Commands.add('navigateToAccountInfo', () => {
//     cy.get('.customer-welcome').first().click();
//     cy.get('a[title="Edit"]').click();
//     cy.get('a:contains("Account Information")').click();
// });

// Cypress.Commands.add('navigateToAddress', () => {
//     cy.get('.customer-welcome').click();
//     cy.get('a[title="My Account"]').click();
//     cy.get('a:contains("Address Book")').click();
// });


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
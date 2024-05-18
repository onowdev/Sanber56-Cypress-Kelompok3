describe('template spec', () => {
  it.only('Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Sanber')
    cy.get('#lastname').type('Kelompok3')
    cy.get('#email_address').type('kel3@gmail.com')
    cy.get('#password').type('Kel3_sanber')
    cy.get('#password-confirmation').type('Kel3_sanber')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.url()
    //should('include','MyAccount')
  })
})
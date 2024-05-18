describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })

  it('fail-different Pass', () => {
    cy.regis('Sanber','Kelompok3','kel3@gmail.com','Kel3_sanber','Kel3_sanbe')
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
  })

  it.only('Success', () => {
    cy.regis('Sanber','Kelompok3','kel3@gmail.com','Kel3_sanber','Kel3_sanber')
    cy.url()
    //should('include','MyAccount')
  })

  
  

})
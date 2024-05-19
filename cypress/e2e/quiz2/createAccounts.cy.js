import createAccPage from '../../support/pageObject/createAccount'

describe('create account', () => {
function randomEmail(){
  const randomString = Math.random().toString(36).substring(2,10)
  const email = randomString + "@gmail.com"
  return email
}

let emailname = randomEmail()

  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })

  it('failed-using fixtures', () => {
    cy.fixture('createAccount.json').then((create) => {
      //const datacreate = create;
      cy.regis(create.firstname,create.lastname,create.emailname,create.pass,create.confirpass)
    })
  })

  it('failed-using POM', () => {
    cy.get(createAccPage.fn).type('Sanber')
    cy.get(createAccPage.ln).type('Kelompok3')
    cy.get(createAccPage.email).type('kel3@gmail.com')
    cy.get(createAccPage.pass).type('Kel3_sanber')
    cy.get(createAccPage.cpass).type('Kel3_sanbe')
    cy.get(createAccPage.create).click()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
  })

  it('failed-using POM type 2', () => {
    createAccPage.inputfn('Sanber')
    createAccPage.inputln('Kelompok3')
    createAccPage.inputemail('kel3@gmail.com')
    createAccPage.inputpass('Kel3_sanber')
    createAccPage.inputcpass('Kel3_sanbe')
    createAccPage.clickcreate()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
  })

  it('failed-different Pass', () => {
    cy.regis('Sanber','Kelompok3','kel3@gmail.com','Kel3_sanber','Kel3_sanbe')
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
  })

  it('failed-wrong email', () => {
    cy.regis('Sanber','Kelompok3','kel3','Kel3_sanber','Kel3_sanber')
    cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it.only('failed-can contain symbols', () => {
    cy.regis('@','*','kel3@gmail.com','Kel3_sanber','Kel3_sanber')
    cy.url()
  })

  it('Success', () => {
    cy.regis('Sanber','Kelompok3','kel3@gmail.com','Kel3_sanber','Kel3_sanber')
    cy.url()
    //should('include','MyAccount')
  })

  
  

})
describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
  });

  it("Login Page Loaded", () => {
    cy.get(".panel > .header > .authorization-link > a")
    cy.get(".page-title-wrapper").should("contain.text", "Customer Login")
  });

  it("Login Success", () => {
    // cy.get("#email").type("ifransisca14@email.com");
    // cy.get("#pass").type("Imelda123");
    cy.login('ifransisca14@gmail.com', 'Imelda123')
    cy.get("#send2").click
    cy.url().should("include", "customer/account")
  });

  it("Login Failed - Wrong Credentials", () => {
    cy.login("ifransisca14@gmail.com", "passwordsalah")
    cy.get("#send2").click({ timeout: 6000 })
    cy.get(".message-error").should("be.visible")
  });
  
})
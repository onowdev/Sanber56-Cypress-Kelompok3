describe('choose products and check', () => {
    beforeEach(() => {
      cy.visit("")
    });
  
    it.only("Berhasil memilih produk Fusion Backpack", () => {
      cy.get('.product-items > :nth-child(5)').click()
      cy.get('#product-addtocart-button').click()
      cy.get('.showcart').click()
      cy.get('#top-cart-btn-checkout').should("be.visible")
      //Update produk
      cy.get('#cart-item-70193-qty').type("2")
      cy.get('#update-cart-item-70193').click()
      cy.get('#update-cart-item-70193').should("be.not.visible") 
    });
  
    it("Login Failed - Wrong Credentials", () => {
      cy.login("ifransisca14@gmail.com", "inipasswordsalah")
      cy.get("#send2").click({ timeout: 6000 })
      cy.get(".message-error").should("be.visible")
    })
    
  })
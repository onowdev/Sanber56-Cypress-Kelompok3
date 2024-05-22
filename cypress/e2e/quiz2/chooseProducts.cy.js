describe('choose products and check', () => {
  beforeEach(() => {
    cy.visit("")
  });
  // Memilih produk
  it("Berhasil memilih produk", () => {
    cy.get('.product-items > :nth-child(5)').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.showcart').click();
    cy.get("#ui-id-1").should("contain.text", "Proceed to Checkout");

    // Update produk
    cy.get('.showcart').click();
    cy.get('.product > .primary > .action').click();
    cy.get('#qty').clear().type("2");
    cy.get('#product-updatecart-button').click();
    cy.get('.sub > .amount > .price').should("contain.text", "118");
  });

  it("Berhasil memilih produk lain langsung", () => {
    cy.get('.product-items > :nth-child(5)').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.products > .item').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.showcart').should("contain.text", "2");
  });

  it("Berhasil memilih produk lain", () => {
    cy.get('.product-items > :nth-child(6)').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.showcart').click();
    cy.get("#ui-id-1").should("contain.text", "Proceed to Checkout");
    cy.get("#ui-id-1").should("contain.text", "1");
  });

  it("Gagal menambahkan produk", () => {
    cy.get('.product-items > :nth-child(5)').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.showcart').click();
    cy.get("#ui-id-1").should("contain.text", "3");
    })
    
  })
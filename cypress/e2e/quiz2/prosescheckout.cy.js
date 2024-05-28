describe('Proceed to Checkout Tests', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    });
  
    // Positive scenario
    it('Should proceed to checkout with valid shipping information', () => {
      cy.get('#customer-email').type('valid.email@example.com');
      cy.get('input[name="firstname"]').type('John');
      cy.get('input[name="lastname"]').type('Doe');
      cy.get('input[name="street[0]"]').type('123 Main St');
      cy.get('input[name="city"]').type('Anytown');
      cy.get('select[name="region_id"]').select('California');
      cy.get('input[name="postcode"]').type('12345');
      cy.get('input[name="telephone"]').type('1234567890');
  
      cy.get('.button.action.continue.primary').click(); // Assuming this is the button to proceed
  
      // Validate that it proceeds to the next step
      cy.url().should('include', '/checkout/#payment');
    });
  
    // Negative scenario
    it('Should display error messages with invalid shipping information', () => {
      cy.get('#customer-email').type('invalid-email');
      cy.get('input[name="firstname"]').type('John');
      cy.get('input[name="lastname"]').type('Doe');
      cy.get('input[name="street[0]"]').type(''); // Empty street address
      cy.get('input[name="city"]').type('Anytown');
      cy.get('select[name="region_id"]').select('California');
      cy.get('input[name="postcode"]').type(''); // Empty postcode
      cy.get('input[name="telephone"]').type(''); // Empty telephone
  
      cy.get('.button.action.continue.primary').click(); // Assuming this is the button to proceed
  
      // Validate that error messages are displayed
      cy.get('.field-error').should('exist'); // Adjust selector based on actual error message class
    });
  });
  
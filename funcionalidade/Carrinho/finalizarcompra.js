export function finalizarCompra() {
  cy.contains('Proceed To Checkout').click();
  cy.url().should('include', '/checkout');
  cy.get('textarea[name="message"]').type('Quero comprar esse produto');

  cy.get('a[href="/payment"]').click();
  cy.url().should('include', '/payment');

  cy.get('[data-qa="name-on-card"]').type('Mastercard');
  cy.get('[data-qa="card-number"]').type('5555555555554444');
  cy.get('[data-qa="cvc"]').type('123');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2025');

  cy.contains('button', 'Pay and Confirm Order').click();
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

}
export default finalizarCompra;
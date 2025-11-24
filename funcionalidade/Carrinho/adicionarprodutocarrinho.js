
  export function adicionarProdutoAoCarrinho() {
  cy.get('[data-qa="continue-button"]').click();
  cy.contains('Add to cart').first().click();
  cy.contains('button', 'Continue Shopping').click();
  cy.contains('Cart').click();
  cy.contains('Shopping Cart').should('be.visible');
}

export default adicionarProdutoAoCarrinho;
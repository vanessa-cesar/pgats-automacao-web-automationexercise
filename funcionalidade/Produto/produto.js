export function acessarPaginaProduto() {
    cy.get('a[href="/products"]').click()
    cy.url().should('includes', '/products')
    cy.get('.title').should('have.text', 'All Products')
}
export default acessarPaginaProduto;
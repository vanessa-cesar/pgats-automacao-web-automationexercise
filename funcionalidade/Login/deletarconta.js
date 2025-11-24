export function deletarConta() {
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Your account has been permanently deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
}
export default deletarConta;
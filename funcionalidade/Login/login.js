export function informarUsuario() {
    cy.get('a[href="/login"]').click()
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(`qa.pagts@example.com`);
    cy.get('input[data-qa="login-password"]').type('Senha@1234'), { log: false }
    cy.contains('button', 'Login').click()
}
export default informarUsuario;
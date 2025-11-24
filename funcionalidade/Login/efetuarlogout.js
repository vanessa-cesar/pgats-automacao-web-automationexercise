export function efetuarLogout() {

    cy.get('a[href="/logout"]').click()
    cy.url().should('includes', '/login')
}
export default efetuarLogout;


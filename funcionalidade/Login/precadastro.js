import { faker } from '@faker-js/faker';

export function preencherPreCadastro() {

  cy.get('a[href="/login"]').click();
  cy.contains('New User Signup!').should('be.visible');

  const timestamp = new Date().getTime();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get('input[data-qa="signup-name"]').type(`${firstName} ${lastName}`);
  cy.get('input[data-qa="signup-email"]').type(`qa.pagts${timestamp}@example.com`);
  cy.contains('button', 'Signup').click();
}
  export default preencherPreCadastro;
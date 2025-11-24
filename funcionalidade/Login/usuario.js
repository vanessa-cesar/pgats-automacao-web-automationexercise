import { faker } from '@faker-js/faker';
import { preencherPreCadastro } from './precadastro.js';

export function criarUsuario() {
  const timestamp = new Date().getTime();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  preencherPreCadastro();

  cy.get('#id_gender2').check();
  cy.get('input#password').type('Senha@1234', { log: false });

  cy.get('select[data-qa="days"]').select('13');
  cy.get('select[data-qa="months"]').select('November');
  cy.get('select[data-qa="years"]').select('1996');

  cy.get('input[type="checkbox"]#newsletter').check();
  cy.get('input[type="checkbox"]#optin').check();

  cy.get('input#first_name').type(firstName);
  cy.get('input#last_name').type(lastName);
  cy.get('input#company').type(faker.company.name());
  cy.get('input#address1').type(faker.location.streetAddress());
  cy.get('select#country').select('Canada');
  cy.get('input#state').type(faker.location.state());
  cy.get('input#city').type(faker.location.city());
  cy.get('input#zipcode').type(faker.location.zipCode());
  cy.get('input#mobile_number').type(faker.phone.number('+1##########'));

  cy.contains('button', 'Create Account').click();
  cy.url().should('include', '/account_created');
}
export default criarUsuario;
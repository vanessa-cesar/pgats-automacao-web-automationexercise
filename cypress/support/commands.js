import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

Cypress.Commands.add('preencherFormularioContato', (arquivo = 'example.txt') => {
  const timestamp = new Date().getTime();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  cy.get('a[href="/contact_us"]').click();
  cy.get('[data-qa="name"]').type(`${firstName} ${lastName}`);
  cy.get('[data-qa="email"]').type(`qa.pagts${timestamp}@example.com`);
  cy.get('[data-qa="subject"]').type('Teste de Automação');
  cy.get('[data-qa="message"]').type('Este é um teste de automação para o formulário de contato.');
  cy.get('input[name="upload_file"]').attachFile(arquivo);
  cy.get('input[data-qa="submit-button"]').click();
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  cy.url().should('include', '/contact_us');
});
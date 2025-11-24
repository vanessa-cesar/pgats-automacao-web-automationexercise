/// <reference types="cypress" />

import 'cypress-file-upload';
import { faker } from '@faker-js/faker'
import informarUsuario from '../../funcionalidade/Login/login.js';
import adicionarProdutoAoCarrinho from '../../funcionalidade/Carrinho/adicionarprodutocarrinho.js';
import finalizarCompra from '../../funcionalidade/Carrinho/finalizarcompra.js';
import criarUsuario from '../../funcionalidade/Login/usuario.js';
import efetuarLogout from '../../funcionalidade/Login/efetuarlogout.js';
import deletarConta from '../../funcionalidade/Login/deletarconta.js';
import acessarPaginaProduto from '../../funcionalidade/Produto/produto.js';



describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')

  })

  it('1- Cadastrar um usuário', () => {
    criarUsuario();

  })

  it('2- Efetuar login com usuário cadastrado', () => {

    informarUsuario()
    cy.contains('Logged in as Elisa Zieme').should('be.visible')

  })

  it('3- Efetuar login com e-mail e senha incorretos', () => {

    const timestamp = new Date().getTime()
    cy.get('a[href="/login"]').click()
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(`qa.pagts${timestamp}@example.com`);
    cy.get('input[data-qa="login-password"]').type('Senha@1234'), { log: false }
    cy.contains('button', 'Login').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')

  })

  it('4- Efetuar logout', () => {

    informarUsuario();
    cy.contains('Logged in as Elisa Zieme').should('be.visible')
    efetuarLogout();

  })

  it('5- Efetuar cadastro de usuário com e-mail já existente', () => {
    const timestamp = new Date().getTime()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    cy.get('a[href="/login"]').click()
    cy.contains('New User Signup!').should('be.visible');
    cy.get('input[data-qa="signup-name"]').type(`${firstName} ${lastName}`);
    cy.get('input[data-qa="signup-email"]').type(`qa.pagts@example.com`);
    cy.contains('button', 'Signup').click()
    cy.contains('Email Address already exist!').should('be.visible')
  })


  it('6 - Efetuar formulário de contato', () => {
   cy.preencherFormularioContato('example.txt');

  })

  it('8 - Verificar todos os produtos e a página de detalhes do produto', () => {
  acessarPaginaProduto();
    cy.get('a[href="/product_details/1"]').click()
    cy.contains('Blue Top').should('be.visible')
    cy.contains('Category: Women > Tops').should('be.visible')
    cy.contains('Rs. 500').should('be.visible')
    cy.contains('Availability: In Stock').should('be.visible')
    cy.contains('Condition: New').should('be.visible')
    cy.contains('Brand: Polo').should('be.visible')
    cy.url().should('includes', '/product_details/1')
  })

  it('9 - Buscar produto', () => {
    acessarPaginaProduto();
    cy.get('input[id="search_product"]').type('Stylish Dress');
    cy.get('button[id="submit_search"]').click()
    cy.contains('Searched Products').should('be.visible')
  })

  it('10 - Efetuar registro do subscription na home page', () => {
    cy.contains('Home').should('be.visible')
    cy.get('button[id="subscribe"]').click();
    cy.get('input[id="susbscribe_email"]').type('qa.pagts@example.com');
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!').should('be.visible');

  })

  it('15- Criar novo usuario - Adicionar produto ao carrinho e finalizar compra', () => {
    criarUsuario();

    adicionarProdutoAoCarrinho();
    finalizarCompra();
    deletarConta();

  })

});
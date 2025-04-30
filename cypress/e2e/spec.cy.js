import { test } from "./pageObjects";
import l from './locators';

describe('template spec', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080),
    cy.visit('https://qatest.datasub.com/')
  });

  it('negative case - Ввод почты без @', () => {
    test.requestAQuote.should('be.visible')
    .and('have.text', 'Request A Quote')
    .and('have.attr', 'href', 'quote.html')
    .click()
    cy.url().should('include', '/quote');
    test.requestForm.should('be.visible');
    test.requestFormEmail.should('be.visible').type('qwegmail.ru'),
    cy.get(l.REQUEST_BTN_SEND).eq(0).click()
  })
})
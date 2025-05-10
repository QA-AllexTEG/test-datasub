import { test } from "./pageObjects";
import l from './locators';
import { classes } from '../constants';

const buttonName = 'Request A Quote';
const textCompleted = 'Форма отправлена успешно!';

describe('test task', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://track.promolytica.ru/ing').as('req');
    cy.viewport(1920, 1080);
    cy.visit('https://qatest.datasub.com/')
  });

  it('negative case - Ввод почты без @', () => {
    test.requestAQuote.scrollIntoView()
    .should('be.visible')
    .and('have.text', buttonName)
    .and('have.attr', 'href', 'quote.html')
    .click();
    cy.url().should('include', '/quote');
    test.requestForm.should('be.visible');
    test.requestFormEmail.should('be.visible')
    .type('qwegmail.ru')
    .and('have.class', classes.INVALID_EMAIL);
  });

  it('happy path - Корректное заполнение и успешная отправка формы', () => {
    test.requestAQuote.scrollIntoView()
    .should('be.visible')
    .and('have.text', buttonName)
    .and('have.attr', 'href', 'quote.html')
    .click();
    cy.url().should('include', '/quote');
    test.requestForm.should('be.visible');
    test.requestFormName.should('be.visible').type('name');
    test.requestFormEmail.should('be.visible')
    .type('qwe@gmail.ru')
    .and('have.class', classes.VALID_EMAIL);
    test.requestFormMessage.should('be.visible')
    .type('qwerty');
    cy.get(l.REQUEST_BTN_SEND).eq(0)
    .click();
    cy.wait('@req').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
    })
    test.requestFormComplete.should('be.visible')
    .and('have.text', textCompleted);
  });
});
import { test } from "./pageObjects";
import l from './locators';

const buttonName = 'Request A Quote';
const textCompleted = 'Форма отправлена успешно!';

describe('test task', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://qatest.datasub.com/')
  });

  it('negative case - Ввод почты без @', () => {
    test.requestAQuote.should('be.visible')
    .and('have.text', buttonName)
    .and('have.attr', 'href', 'quote.html')
    .click();
    cy.url().should('include', '/quote');
    test.requestForm.should('be.visible');
    test.requestFormEmail.should('be.visible').type('qwegmail.ru');
    cy.get(l.REQUEST_BTN_SEND).eq(0).click();
  });

  it('happy path - Корректное заполнение и успешная отправка формы', () => {
    test.requestAQuote.should('be.visible')
    .and('have.text', buttonName)
    .and('have.attr', 'href', 'quote.html')
    .click();
    cy.url().should('include', '/quote');
    test.requestForm.should('be.visible');
    test.requestFormName.should('be.visible').type('name')
    test.requestFormEmail.should('be.visible').type('qwe@gmail.ru');
    test.requestFormMessage.should('be.visible').type('qwerty');
    cy.get(l.REQUEST_BTN_SEND).eq(0).click();
    test.requestFormComplete.should('be.visible').and('have.text', textCompleted);
  });
});
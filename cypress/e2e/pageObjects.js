import l from './locators';

export class Test {

  get requestAQuote() {
    return cy.get(l.REQUEST_A_QUOTE);
  }

  get requestForm() {
    return cy.get(l.REQUEST_FORM);
  }
  
  get requestFormEmail() {
    return cy.get(l.REQUEST_FORM_EMAIL);
  }
}

export const test = new Test();
import l from './locators';

export class Test {

  get requestAQuote() {
    return cy.get(l.REQUEST_A_QUOTE);
  }

  get requestForm() {
    return cy.get(l.REQUEST_FORM);
  }
  
  get requestFormName() {
    return cy.get(l.REQUEST_FORM_NAME);
  }
  
  get requestFormEmail() {
    return cy.get(l.REQUEST_FORM_EMAIL);
  }
  
  get requestFormMessage() {
    return cy.get(l.REQUEST_FORM_MESSAGE);
  }
  
  get requestFormComplete() {
    return cy.get(l.REQUEST_FORM_COMPLETE);
  }
}

export const test = new Test();
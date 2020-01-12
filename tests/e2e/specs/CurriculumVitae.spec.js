// https://docs.cypress.io/api/introduction/api.html

describe('CurriculumVitae', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('contains headline with my name', () => {
    cy.contains('h1', 'Lampros Papadimitriou');
  });

  it('contains cookie notification', () => {
    cy.visit('/');
    cy.get('[qa-ref=cookie-notification]')
      .should('be.visible');
  });
});

// https://docs.cypress.io/api/introduction/api.html

describe('CurriculumVitae', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('contains headline with my name', () => {
    cy.contains('h1', 'Lampros Papadimitriou');
  });

  it('contains cookie notification', () => {
    cy.get('[qa-ref=cookie-notification]')
      .should('be.visible');
  });

  it('contains interests', () => {
    cy.get('[qa-ref=curriculum-vitae-interests] li').should('have.length', 5)
  });

  it('displays more info after I click more button', () => {
    cy.get('[qa-ref=bio-summary-more-button]').click();
    cy.get('[qa-ref=bio-summary-more]')
      .should('be.visible');
  });
});

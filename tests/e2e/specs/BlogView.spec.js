describe('BlogView', () => {

  beforeEach(() => {
    cy.visit('/blog/');
  });

  it('contains headline with my name', () => {
    cy.contains('h1', 'Blog');
  });


  it('contains interests', () => {
    cy.get('.post-summary blog-view__post').should('have.length', 3);
  });
});

describe('BlogView', () => {

  beforeEach(() => {
    cy.visit('/blog/');
  });

  it('contains headline with blog as title', () => {
    cy.contains('h1', 'Blog');
  });


  it('contains at least 2 posts', () => {
    cy.get('.blog-view__post').should('have.length.of.at.least', 2);
  });
});

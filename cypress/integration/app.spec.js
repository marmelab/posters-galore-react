describe('Second Test', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('Customers')
    });
});

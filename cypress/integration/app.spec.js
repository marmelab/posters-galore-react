describe('Global app Tests', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('Customers')
    });
});

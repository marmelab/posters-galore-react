describe('Global app Tests', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('Customers')
        cy.contains('Add filter').click()
        cy.contains("Visited Since")
        cy.contains("Visited To")
    });
});

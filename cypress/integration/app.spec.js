describe('Global app Tests', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('Customers');
        cy.contains('Add filter').click();
        cy.contains('Visited Since');
        cy.contains('Visited To');
    });

    it('Edit customer address', () => {
        cy.visit('/');
        cy.contains('Edit').click();
        cy.contains('Identity');
        cy.contains('Address').click();
        cy.get('input[name="address"]')
            .clear()
            .type('45 rue de la source');
        cy.get('input[name="zipcode"]')
            .clear()
            .type('75000');
        cy.get('button[type="submit"]').click();
        cy.contains('Element updated');
    });
});

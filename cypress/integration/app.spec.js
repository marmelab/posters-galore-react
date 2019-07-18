describe('Global app Tests', () => {
    it('Visit the app', () => {
        cy.visit('/');
        cy.contains('customers').click();
        cy.contains('Add filter').click();
        cy.contains('Visited Since').should('be.visible');
        cy.contains('Visited To').should('be.visible');
    });

    it('Edit customer address', () => {
        cy.visit('/');
        cy.contains('customers').click();
        cy.contains('Edit').click();
        cy.contains('Identity').should('be.visible');
        cy.contains('Address').click();
        cy.get('input[name="address"]')
            .clear()
            .type('45 rue de la source');
        cy.get('input[name="zipcode"]')
            .clear()
            .type('75000');
        cy.get('button[type="submit"]').click();
        cy.contains('Element updated').should('be.visible');
    });

    it('Filter customers using segment page', () => {
        cy.visit('/');
        cy.contains('Segments').click();
        cy.get('a[role="button"]')
            .first()
            .click();
        cy.url().should('include', '/#/customers?filter=');
    });

    it('Add a new product', () => {
        cy.visit('/');
        cy.contains('Products').click();
        cy.contains('Create').click();
        cy.get('input[name="image"]').type('https://marmelab.com/posters/water-10.jpeg');
        cy.get('input[name="thumbnail"]').type('https://marmelab.com/posters/water-10.jpeg');
        cy.contains('Details').click();
        cy.get('input[name="reference"]').type('sdzpiOjfvdf1');
        cy.get('input[name="width"]').type('450');
        cy.get('input[name="height"]').type('10');
        cy.get('input[name="price"]').type('1000');
        cy.get('input[name="stock"]').type('1');
        cy.get('button[type="submit"]').click();
        cy.get('button[type="submit"]').click();
        cy.contains('Element updated').should('be.visible');
    });
});

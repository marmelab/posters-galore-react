describe('Global app Tests', () => {
    const pageSelector = '.list-page';
    const tabPanelSelector = 'hr + div';

    it('should visit the app', () => {
        cy.visit('/');
        cy.contains('customers').click();
        cy.contains('Add filter').click();
        cy.contains('Visited Since').should('be.visible');
        cy.contains('Visited To').should('be.visible');
    });

    it('should edit customer address', () => {
        cy.visit('/');
        cy.contains('customers').click();
        cy.contains('Edit').click();
        cy.contains('Identity').should('be.visible');
        cy.contains('Address').click();
        cy.get(tabPanelSelector)
            .contains('div', 'Address')
            .find('input')
            .clear()
            .type('45 rue de la source');
        cy.contains('div', 'Zipcode')
            .find('input')
            .clear()
            .type('75000');
        cy.contains('Save').click();
        cy.contains('Element updated').should('be.visible');
    });

    it('should filter customers using segment page', () => {
        cy.visit('/');
        cy.contains('Segments').click();
        cy.get('a[role="button"]')
            .first()
            .click();
        cy.url().should('include', '/#/customers?filter=');
    });

    it('should add a new product', () => {
        cy.visit('/');
        cy.contains('Products').click();
        cy.contains('Create').click();
        cy.get(tabPanelSelector)
            .contains('div', 'Image')
            .find('input')
            .type('https://marmelab.com/posters/water-10.jpeg');
        cy.contains('div', 'Thumbnail')
            .find('input')
            .type('https://marmelab.com/posters/water-10.jpeg');
        cy.contains('Details').click();
        cy.contains('div', 'Reference')
            .find('input')
            .type('sdzpiOjfvdf1');
        cy.contains('div', 'Width')
            .find('input')
            .type('450');
        cy.contains('div', 'Height')
            .find('input')
            .type('10');
        cy.contains('div', 'Price')
            .find('input')
            .type('10000');
        cy.contains('div', 'Stock')
            .find('input')
            .type('1');
        // Save the product creation
        cy.contains('Save').click();
        // Save the product edition due to redirection
        cy.contains('Save').click();
        cy.contains('Element updated').should('be.visible');
    });

    it('should filter products using category page', () => {
        cy.visit('/');
        cy.contains('categories').click();

        cy.get(pageSelector)
            .contains('Products')
            .click();
        cy.url().should('include', '/#/products?filter=');
    });
});

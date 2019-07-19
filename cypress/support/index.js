// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Change Cypress behaviour in order to not scroll element to the top of the page
// https://github.com/cypress-io/cypress/issues/871
Cypress.on('scrolled', $el => {
    $el.get(0).scrollIntoView({
        block: 'center',
        inline: 'center',
    });
});

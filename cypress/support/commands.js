// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
compareSnapshotCommand()

Cypress.Commands.add('verifyAllLinks', (domain) => {
    cy.get(`a[href*='${domain}']:not([href=""]`).each(($el) => {
        cy.request($el.prop('href')).as('link');
    });
    cy.get('@link').should((response) => {
        expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add('getMenus', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name=main-header-navigation",
    }).then((response) => { 
        expect(response.status).to.eq(200);
        Cypress.env('menus').push(response)
    })
  
  })

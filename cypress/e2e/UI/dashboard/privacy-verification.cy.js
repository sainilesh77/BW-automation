import APIConstants from "../../../support/constants/APIConstants";
let resolutionData,resolution,browserResolution;

describe('Privacy Policy verification', () => {
    before(() => {
        resolution=Cypress.env('browserResolution')
        cy.fixture(resolution).then((contactComponent) => {
            resolutionData=contactComponent;
        });
        browserResolution=resolution.split('_');
        cy.viewport(Number(browserResolution[0]),Number(browserResolution[1]))
        cy 
        .visit('/')
    })
    it('Privacy Policy visual verification', () => {
        cy.get('a').contains('Privacy Policy').scrollIntoView().should('be.visible').click();
        cy.compareSnapshot('privacy-policy-page',1);
    });
})
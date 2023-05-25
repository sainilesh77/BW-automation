import APIConstants from "../../../support/constants/APIConstants";
let resolutionData,resolution,browserResolution;

describe('Terms and conditions verification', () => {
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
    it('Terms Use visual verification', () => {
        cy.get('a').contains('Terms of Use').scrollIntoView().should('be.visible').click();
        cy.compareSnapshot('terms-use-page');
    });
})
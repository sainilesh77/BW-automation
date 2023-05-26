import APIConstants from "../../../support/constants/APIConstants";
let resolutionData,resolution,browserResolution;

describe('about us verification', () => {
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
    it('About Us visual verification', () => {
        cy.get('a').contains('About Us').scrollIntoView().should('be.visible').click();
        cy.compareSnapshot('about-us-page',1);
    });

})
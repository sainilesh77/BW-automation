import APIConstants from "../../../support/constants/APIConstants";
let resolutionData,resolution,browserResolution;

describe('Careers verification', () => {
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
    it('Careers visual verification', () => {
        cy.get('a').contains('Careers').scrollIntoView().should('be.visible').click();
        cy.compareSnapshot('careers-page',1);
    });
})


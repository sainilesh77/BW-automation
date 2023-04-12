/// <reference types="cypress" />
import contactPage from "../../../support/page-objects/ContactPage"
import helper from "../../../support/Helpers/UIHelper";
let resolutionData,resolution,browserResolution;
describe('Contact US Components Verification test suite', () => {
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
    it.skip('conatct us components verification', function () {
        cy.log((Cypress.env('browserResolution')));
        cy.log(resolutionData.contactUS);
        contactPage.verifyContactContainerComponent(resolutionData)
    });
});

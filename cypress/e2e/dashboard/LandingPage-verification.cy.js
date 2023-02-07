/// <reference types="cypress" />
import LandingPage from "../../support/object-repository/LandingPage";
let headers;
describe('BW-CMS Verification test suite', () => {

    beforeEach(() => {
        cy.fixture('LandingPageHeaders').then(async (header) => {
            headers = header;
        });
        cy.viewport(1920,1080)
        cy 
            .visit('/')
    });
    
    it.skip('Verify all links from landing page Page', function () {
        cy.verifyAllLinks();
    });
    
    it.only('Verify landingPageHeaders', function () {
        LandingPage.verifyMainHeaders(headers.mainHeader)
    });
});



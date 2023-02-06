/// <reference types="cypress" />
import { landingPage } from "../../support/object-repository/LandingPage";
let headers;
describe('BW-CMS Verification test suite', () => {

    beforeEach(() => {
        cy.fixture('LandingPageHeaders').then(async (header) => {
            headers = header;
        });
        cy 
            .visit('/')
            .login();
    });
    
    it.only('Verify all links from landing page Page', function () {
        landingPage.getMainHeaders().then(async () => {
            cy.verifyAllLinks();
        });
    });
    
    it.only('Verify landingPageHeaders', function () {

    });
});



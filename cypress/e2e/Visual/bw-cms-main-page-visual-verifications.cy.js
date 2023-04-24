/// <reference types="cypress" />
import dashboardPage from "../../support/page-objects/DashboardPage";
let width, height, resolution, browserResolution,visualData;
describe('BW-CMS Visual Verification test suite', () => {
    resolution=Cypress.env('browserResolution')
    before(() => {
        cy.log(resolution)
        cy.fixture("visuals").then((visualDetails) => {
            visualData=visualDetails;
        });
        browserResolution=resolution.split('_');
        width=browserResolution[0];
        height=browserResolution[1];    
    })
    beforeEach(() => {
        cy.viewport(Number(browserResolution[0]), Number(browserResolution[1]))
        cy 
        .visit('/')
    })
    it('BW-CMS complete header bar', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.completeHeaderBar).should('be.visible').compareSnapshot('BW-complete-header-bar'+width+'_'+height, 1)
    });
    it('BW-CMS Logo', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.bwLogo).should('be.visible').compareSnapshot('BW-Logo'+width+'_'+height, 1)
    });
    it('BW-CMS Menu Title', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.menuTitle).should('be.visible').compareSnapshot('BW-Menu-Title'+width+'_'+height, 1)
    });
    it('BW-CMS Language section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.scrollTo('top')
        cy.get(visualData.languageSection).compareSnapshot('BW-Language-section'+width+'_'+height,1)
    });
    it('BW-CMS Search section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.searchBox).compareSnapshot('BW-Search-section'+width+'_'+height,1)
    });
    it('BW-CMS Login section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.scrollTo('top')
        cy.get(visualData.loginBtn).should('be.visible').compareSnapshot('BW-login-section'+width+'_'+height,1)
    });
    it('BW-CMS Signup section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.signupBtn).compareSnapshot('BW-signup-section'+width+'_'+height,1)
    });
    it('BW-CMS Footer section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.footerNavList).compareSnapshot('BW-footer-nav'+width+'_'+height,1)
    });

    it('BW-CMS contact us section', function () {
        dashboardPage.getPageMenu()
        cy.wait(2000)
        cy.get(visualData.contactBanner).compareSnapshot('BW-contact-banner'+width+'_'+height,1)
    });
});

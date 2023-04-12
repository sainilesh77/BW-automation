/// <reference types="cypress" />
import APIConstants from "../../../support/constants/APIConstants";
import dashboardPage from "../../../support/page-objects/DashboardPage";
let footerResponse, headerDetails, footerJson;
describe('BW-CMS Footer Verification test suite', () => {
    headerDetails=new Map();
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy 
            .visit('/')

            cy.request({
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_FOOTER,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                footerJson=response.body
                cy.writeFile('cypress/fixtures/footer.json', response.body);
            });
            cy.fixture('footer').then((footerData) => {
                footerResponse = footerData;
            });
    });

    it('Verify all Main Footers', function () {
        dashboardPage.verifyFootersLength(footerResponse);
        dashboardPage.verifyMainFooters(footerResponse);
    });

    it('Verify all Main Footer contents', function () {
        dashboardPage.verifyFootersLength(footerResponse);
        dashboardPage.verifyFooterContents(footerResponse);
    });
});

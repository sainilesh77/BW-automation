/// <reference types="cypress" />
import APIConstants from "../../../../support/constants/APIConstants";
import dashboardPage from "../../../../support/page-objects/DashboardPage";
let footerResponse, headerDetails, footerJson;
describe('  ', () => {
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
                url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BOTTOM,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                footerJson=response.body
                cy.writeFile('cypress/fixtures/footer.json', response.body);
            });
            cy.fixture('footer').then((footerData) => {
                footerResponse = footerData;
            });
    });

    it('Verify bottom Footers', function () {
        dashboardPage.verifyFooterBottomLength(footerResponse);
        dashboardPage.verifyFooterBottom(footerResponse);
    });

});

/// <reference types="cypress" />
import APIConstants from "../../../support/constants/APIConstants";
import dashboardPage from "../../../support/page-objects/DashboardPage";
let menusResponse, headerDetails, menuJson;
describe('BW-CMS Verification test suite', () => {
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
                url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_HEADER,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                menuJson=response.body
                cy.writeFile('cypress/fixtures/menu.json', response.body);
            });
            cy.fixture('menu').then((menuData) => {
                menusResponse = menuData;
            });
    });

    it('Verify all links from landing page Page', function () {
        cy.verifyAllLinks('businesswire.com');
    });
    
    it('Verify Main Headers', function () {
        dashboardPage.verifyMainHeaders(menusResponse);
    });

    it.only('Verify Sub Headers', function () {
        dashboardPage.verifySubHeaders(menusResponse);

    });
});



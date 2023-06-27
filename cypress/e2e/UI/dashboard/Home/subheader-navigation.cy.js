/// <reference types="cypress" />
import dashboardPage from "../../../../support/page-objects/DashboardPage";
import APIConstants from "../../../../support/constants/APIConstants";
let  headerDetails,menusResponse,menuJson;
describe('Sub-Headers Navigation', () => {
    headerDetails=new Map();
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.fixture('menu').then((menuData) => {
            menusResponse = menuData;
        });
        cy 
            .visit('/')

            cy.request({
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_HEADER,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                menuJson=response.body
                cy.writeFile('cypress/fixtures/menu.json', response.body);
            });
            cy.fixture('menu').then((menuData) => {
                menusResponse = menuData;
            });
    });

    it('Services Navigations', function () {
        dashboardPage.verifySubHeaderv2(menusResponse);
    });

});

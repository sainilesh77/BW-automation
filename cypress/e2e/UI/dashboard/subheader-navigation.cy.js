/// <reference types="cypress" />
import dashboardPage from "../../../support/page-objects/DashboardPage";
let  headerDetails;
describe('BW-CMS Contact US Verification test suite', () => {
    headerDetails=new Map();
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy 
            .visit('/')
    });

    it.skip('Services Navigations', function () {
        dashboardPage.verifySubHeaderv2(menusResponse);
    });

});

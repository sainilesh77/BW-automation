/// <reference types="cypress" />
import APIConstants from "../../../../support/constants/APIConstants";
import dashboardPage from "../../../../support/page-objects/DashboardPage";
let contactResponse, headerDetails, contactJson;
describe('Contact us component Verification', () => {
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
                url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.CONTACT_US,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                contactJson=response.body
                cy.writeFile('cypress/fixtures/footer.json', response.body);
            });
            cy.fixture('footer').then((contactData) => {
                contactResponse = contactData;
            });
    });

    it('Verify Contact US details', function () {
        dashboardPage.verifyContactTitle(contactResponse);
        dashboardPage.verifyContactDescription(contactResponse);
    });

});

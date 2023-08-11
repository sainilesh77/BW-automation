import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET / Page Global Settings Endpoint Verification', () => {
it('Get Global setting with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/"+APIConstants.SETTING.GLOBAL_SETTING,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Global setting invalid parameters', () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/"+"TEST",
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
    });
});

})

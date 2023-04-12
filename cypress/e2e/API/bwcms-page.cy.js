import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET /Page endpoint verification', () => {
it('Get Service Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.SERVICE_PAGE,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Home Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.HOME_PAGE,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Page details with invalid parameters value', () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+"Test",
    },2000).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
    });
});
})

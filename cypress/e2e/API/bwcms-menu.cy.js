import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET /Menu endpoint verification', () => {
it('Get Main Header with valid data', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_HEADER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Main Header with invalid parameter', async () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?"+await APIHelpers.getRandomString(10)+"="+APIConstants.MENUS.MAIN_HEADER,
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.BAD_REQUEST);
        expect(response.body.code).to.eq(APIConstants.RESPONSE_MESSAGE.NO_PARAMETER)
    });
});

it('Get Main Header with parameter having invalid value', async () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+await APIHelpers.getRandomString(10),
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
        expect(response.body.code).to.eq(APIConstants.RESPONSE_MESSAGE.NOT_FOUND)
    });
});

it('Get Main Footer with valid values', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_FOOTER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Footer Blog and Language with valid parameter and value', async () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BLOG_AND_LANGUAGE,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Footer bottom with valid parameter and value', async () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+await APIConstants.MENUS.FOOTER_BOTTOM,
    }).then(async (response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});
})

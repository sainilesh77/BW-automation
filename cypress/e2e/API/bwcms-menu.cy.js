import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"
const allure = Cypress.Allure.reporter.getInterface();

describe('BW-CMS GET / Menu Endpoint Verification', () => {
allure.feature('BW-CMS GET /Menu endpoint verification test suite');
it('Get Main Header with valid data', () => {
    allure.epic('Get Main Header with valid data');
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_HEADER,
    }).then((response) => { 
        cy.log('GET /menu main headers'+ JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Main Header with invalid parameter', () => {
    allure.epic('Get Main Header with invalid parameter');
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?"+APIHelpers.getRandomString(10)+"="+APIConstants.MENUS.MAIN_HEADER,
    }).then((response) => { 
        cy.log('GET /menu with invalid paramters'+ JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.BAD_REQUEST);
        expect(response.body.code).to.eq(APIConstants.RESPONSE_MESSAGE.NO_PARAMETER)
    });
});

it('Get Main Header with parameter having invalid value', () => {
    allure.epic('Get Main Header with parameter having invalid value');
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIHelpers.getRandomString(10),
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
        expect(response.body.code).to.eq(APIConstants.RESPONSE_MESSAGE.NOT_FOUND)
    });
});

it('Get Main Footer with valid values', () => {
    allure.epic('Get Main Footer with valid values');
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_FOOTER,
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Footer Blog and Language with valid parameter and value', () => {
    allure.epic('Get Footer Blog and Language with valid parameter and value');
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BLOG_AND_LANGUAGE,
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Footer bottom with valid parameter and value', () => {
    allure.epic('Get Footer bottom with valid parameter and value');
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BOTTOM,
    }).then((response) => { 
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});
})

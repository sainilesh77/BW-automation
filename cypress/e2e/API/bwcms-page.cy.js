import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET /Page endpoint verification', () => {

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
it('Get Service landing Page with valid parameters', () => {
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




/* Code added by AMAR*/

it('Get All News Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.ALL_NEWS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get News Category Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.NEWS_CATEGORY,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});


it('Get News Details Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.NEWS_DETAILS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Public Relation Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.PUBLIC_RELATION,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});


it('Get Investor Relation Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.INVESTOR_RELATION,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Destribution & Analytics Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.DISTRIBUTION_ANALYTICS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Media & Journalist tool Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.MEDIA_JOURNALIST_TOOL,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Service Details Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.SERVICE_DETAILS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Contact Us Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.CONTACT_US,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Office Location Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.OFFICE_LOCATION,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Media & Partnership contact Page with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/page?name="+APIConstants.PAGE.MEDIA_PARTNERSHIP_CONTACTS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

})

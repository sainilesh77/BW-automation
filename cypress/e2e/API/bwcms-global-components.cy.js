import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET Global Components Endpoint Verification', () => {
it('Get Contact Us Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.CONTACT_US,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Contact Us Banner with invalid parameters', () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+"TEST",
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
    });
});
it('Get Demo Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.DEMO,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get NewsLetter Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.NEWSLETTER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Right Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.RIGHT,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Sign_up Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.SIGN_UP,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Who_we_are Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.WHO_WE_ARE,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Video components details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.VIDEO_COMPONENT,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});


/* Code added by AMAR*/

it('Get Media Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.MEDIA_BANNER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Twitter Social Media Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.TWITTER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
        });
});


it('Get Testimonials Banner with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/"+APIConstants.GLOBAL_COMPONENTS.TESTIMONIALS,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
        });
});

it('Get Popular News text with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.POPULAR,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
        });


    })




})

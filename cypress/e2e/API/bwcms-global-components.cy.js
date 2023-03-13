import APIConstants from "../../support/constants/APIConstants";
import APIHelpers from "../../support/Helpers/APIHelper"

describe('BW-CMS GET Global components verification', () => {
it('Get contact us details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.CONTACT_US,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get Contact us with invalid parameters', () => {
    cy.request({
        method:  'GET',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+"TEST",
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.NOT_FOUND);
    });
});
it('Get demo details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.DEMO,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get NewsLetter details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.NEWSLETTER,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get right details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.RIGHT,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get sign_up details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.SIGN_UP,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get who_we_are details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.WHO_WE_ARE,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

it('Get video components details with valid parameters', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/globalcomponent/"+APIConstants.GLOBAL_COMPONENTS.VIDEO_COMPONENT,
    }).then((response) => { 
        expect(response.status).to.eq(APIConstants.RESPONSE.SUCCESS);
    });
});

})

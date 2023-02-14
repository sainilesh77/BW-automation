import APIConstants from "../../support/constants/APIConstants";

it('Get Main Header', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_HEADER,
    }).then((response) => { 
        expect(response.status).to.eq(200);
    });
});
it('Get Main Footer', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.MAIN_FOOTER,
    }).then((response) => { 
        expect(response.status).to.eq(200);
    });
});
it('Get Footer Blog and Language', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BLOG_AND_LANGUAGE,
    }).then((response) => { 
        expect(response.status).to.eq(200);
    });
});

it('Get Footer bottom', () => {
    cy.request({
        method:  'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name="+APIConstants.MENUS.FOOTER_BOTTOM,
    }).then((response) => { 
        expect(response.status).to.eq(200);
    });
});
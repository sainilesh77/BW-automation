class LandingPage {

    getMainHeaders() {
        cy.get('div.header-arrow > ul > li > div > span > span > a',{timeout:10000}).should("be.visible");
        return cy.get('div.header-arrow > ul > li > div > span > span > a');
    }
    
    getContactHeaders() {
        cy.get('#rc-menu-uuid-85403-1-16-popup > div > div > a',{timeout:10000}).should("be.visible");
        return cy.get('#rc-menu-uuid-85403-1-16-popup > div > div > a');
    }

    getNewsHeaders() {
        cy.get('#rc-menu-uuid-85403-1-15-popup > div > div > a',{timeout:10000}).should("be.visible");
        return cy.get('#rc-menu-uuid-85403-1-15-popup > div > div > a');
    }

    verifyMainHeaders(headers) {
        headers.forEach(async (header) => {
            cy.get('div.header-arrow > ul > li > div > span > span > a').contains(header)
        });
    }
}
export default new LandingPage();
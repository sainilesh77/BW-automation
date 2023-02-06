class LandingPage {

    getMainHeaders() {
        cy.get('div.header-arrow > ul > li > div > span > span > a').should(be.visible);
        return cy.get('div.header-arrow > ul > li > div > span > span > a');
    }
    
    getContactHeaders() {
        cy.get('#rc-menu-uuid-85403-1-16-popup > div > div > a').should(be.visible);
        return cy.get('#rc-menu-uuid-85403-1-16-popup > div > div > a');
    }

    getContactHeaders() {
        cy.get('#rc-menu-uuid-85403-1-15-popup > div > div > a').should(be.visible);
        return cy.get('#rc-menu-uuid-85403-1-15-popup > div > div > a');
    }
}
export default new LandingPage();
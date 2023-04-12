import contact from '../object-repository/contact.json'
class ContactPage {

    getContactContainer() {
        cy.get(contact.container).should('be.visible')
        return cy.get(contact.container);
    }

    getContactTitle() {
        cy.get(contact.title).should('be.visible')
        return cy.get(contact.title);
    }

    getContactDescription() {
        cy.get(contact.description).should('be.visible')
        return cy.get(contact.description);
    }

    getContactButton() {
        cy.get(contact.buttons).should('be.visible')
        return cy.get(contact.buttons);
    }

    async verifyContactContainerComponent(resolutionData) {
        await this.getContactContainer().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.container.width)-Number(resolutionData.variable))
        await this.getContactContainer().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.container.width)+Number(resolutionData.variable))
        await this.getContactContainer().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.container.height)-Number(resolutionData.variable))
        await this.getContactContainer().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.container.height)+Number(resolutionData.variable))
    }
    async verifyContactDescriptionComponent(resolutionData) {
        await this.getContactDescription().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.description.width)-Number(resolutionData.variable))
        await this.getContactDescription().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.description.width)+Number(resolutionData.variable))
        await this.getContactDescription().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.description.height)-Number(resolutionData.variable))
        await this.getContactDescription().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.description.height)+Number(resolutionData.variable))
    }
    async verifyContactTitleComponent(resolutionData) {
        await this.getContactTitle().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.title.width)-Number(resolutionData.variable))
        await this.getContactTitle().invoke('css', 'width')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.title.width)+Number(resolutionData.variable))
        await this.getContactTitle().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData.contactUS.title.height)-Number(resolutionData.variable))
        await this.getContactTitle().invoke('css', 'height')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData.contactUS.title.height)+Number(resolutionData.variable))
    }
}
export default new ContactPage();
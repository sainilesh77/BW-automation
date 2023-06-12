let resolutionData,resolution,browserResolution,width,height;

describe('News All verification', () => {
    before(() => {
        resolution=Cypress.env('browserResolution')
        cy.fixture(resolution).then((contactComponent) => {
            resolutionData=contactComponent;
        });
        browserResolution=resolution.split('_');
        cy.viewport(Number(browserResolution[0]),Number(browserResolution[1]))
        width=browserResolution[0];
        height=browserResolution[1];   
        cy 
        .visit('/')
        cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('News').should('be.visible').click()
        cy.get('.loader').should('be.visible')
        cy.get('.loader').should('not.exist')
        cy.get('#onetrust-accept-btn-handler').click()
    })

    context('News Heading', () => {

        it('All News Section', () => {
            cy.get('.allNewsSec').scrollIntoView().should('be.visible')
        })
        it('All News section have heading', () => {
            cy.get('.contentSec--heading').should('be.visible').contains('All News')
        })
        it('All News section have sub heading', () => {
            cy.get('.allNewsSec').find('.contentSec--subheading').should('be.visible')
        })
        it('All News section have sort filters', () => {
            cy.get('.sortFilterSec').should('exist');
        })

        it('All News section have clear fix', () => {
            cy.get('.clearfix').should('exist');
        })

        it('All News section have news item', () => {
            cy.get('.news_item').should('exist');
        })

    })

    context('News Letter', () => {

    it('News Letter verification', () => {
        cy.get('.signupNewsLetter_content').scrollIntoView().should('be.visible')
    })

    it('News Letter Base Box verification', () => {
        cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText').should('be.visible')
    })

    it('News Letter Base Box Text Heading verification', () => {
        cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText_heading').contains('Sign Up for Our PressPass to be the First to get the Latest PR & IR News? ').should('be.visible')
    })

    it('News Letter Base Box Text Sub Heading verification', () => {
        cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_subheading').contains('Become a registered PressPass member and receive up-to-date news on the topics you cover.').should('be.visible')
    })

})

context('Media Banner', () => {

    it('Media banner', () => {
        cy.get('.media-banner').scrollIntoView().should('be.visible')
    })

    it('Media banner have banner image', () => {
        cy.get('.media-banner').find('div > .banner-image-row').should('be.visible')
    })

})

context('News Press Pass', () => {
    it('Register for Press Pass verification', () => {
        cy.get('.signupNewsLetter_content > div > a').contains('Register for PressPass').should('be.visible')
        cy.get('.signupNewsLetter_content > div > a').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup/registration')
       cy.go('back');
    })

})

context('Right Banner', () => {

    it('Right banner verification', () => {
        cy.get('.rightBannerSec_text').scrollIntoView().should('contains.text','Get Press Pass for Journalist or a News Customer')
        cy.get('.rightBannerSec > a').invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup')
        cy.go('back');
    })
})
})
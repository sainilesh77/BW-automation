let resolutionData,resolution,browserResolution,width,height;

describe('News by Industry verification', () => {
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
        cy.get('a > h3').contains('News by Industry').click({force:true})
        cy.get('#onetrust-accept-btn-handler').click()
    })
    context('News Heading', () => {

        it('News by Industry Section', () => {
            cy.get('.newsByCatSec').scrollIntoView().should('be.visible')
        })
        it('News by Industry section have heading', () => {
            cy.get('.contentSec--heading').should('be.visible').contains('News By industry')
        })
        it('News by Industry section have sub heading', () => {
            cy.get('.newsByCatSec').find('.contentSec--subheading').should('be.visible')
        })
        it('News by Industry section have sort filters', () => {
            cy.get('.sortFilterSec').should('exist');
        })

        it('News by Industry section have clear fix', () => {
            cy.get('.clearfix').should('exist');
        })

        it('News by Industry section have news item', () => {
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
        cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText_heading').should('be.visible')
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

context('Register Press Pass', () => {
    it('Register for Press Pass verification', () => {
        cy.get('.signupNewsLetter_content > div > nav > a').should('be.visible')
        cy.get('.signupNewsLetter_content > div > nav > a').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup/registration')
       cy.go('back');
    })

})

context('Contact Footer', () => {

    it('Contact Footer', () => {
        cy.get('.footer').scrollIntoView().should('be.visible')
    })
})
context('All links from News Industry Page', () => {
    it('Verify all links from News Industry Page', function () {
        cy.get('a').each(link => {
          if (link.prop('href'))
            cy.request({
              url: link.prop('href'),
              failOnStatusCode: false
            })
          cy.log( link.prop('href'))
        })
    });

})
context('Right Banner', () => {

    it('Right banner verification', () => {
        cy.get('.rightBannerSec_text').scrollIntoView()
        cy.get('.rightBannerSec > a').invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/presspass')
        cy.go('back');
    })
})
})
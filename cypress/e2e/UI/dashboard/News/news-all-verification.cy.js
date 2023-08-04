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
        cy.get('.loader').should('not.exist')
        cy.get('ul[id*="1-12-popup"] > div > div:nth-child(1) > a').should('be.visible').click();
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
        cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText_heading').should('be.visible')
    })

    it('News Letter Base Box Text Sub Heading verification', () => {
        cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_subheading').contains('Become a registered PressPass member and receive up-to-date news on the topics you cover.').should('be.visible')
    })

})

context('Media Banner', () => {

    it('Signup NewSetter Banner', () => {
        cy.get('.media-banner').scrollIntoView().should('be.visible')
    })

    it('Media banner have banner row', () => {
        cy.get('.media-banner').find('.banner-row').should('be.visible')
    })

    it('Media banner have banner image', () => {
        cy.get('.media-banner').find('div > .banner-image-row').should('be.visible')
    })

    it('Media banner have banner title', () => {
        cy.get('.media-banner').find('.banner-title').should('be.visible')
    })

    it('Media banner have banner description', () => {
        cy.get('.media-banner').find('.banner-desc ').should('be.visible')
    })
})

context('Feature component', () => {
    it('Feature components Section', () => {
        cy.get('.featureComponentSec').scrollIntoView().should('be.visible')
    })

    it('Feature components have feature container', () => {
        cy.get('.featureComponentSec').find('.featureComponentContainer').should('be.visible')
    })

    it('Feature components have cover image', () => {
        cy.get('.featureComponentSec').each((ele)=>{
            cy.wrap(ele).find('.cover-image-div').should('be.visible')
        })
    })
    
    it('Feature components have title', () => {
        cy.get('.featureComponentSec').each((ele)=>{
            cy.wrap(ele).find('.align-text-center').should('be.visible')
        })
    })

    it('Feature components have description', () => {
        cy.get('.featureComponentSec').each((ele)=>{
            cy.wrap(ele).find('.description-text').should('be.visible')
        })
    })

    it('Feature components have Learn more Button', () => {
        cy.get('.featureComponentSec').each((ele)=>{
            cy.wrap(ele).find('.action-btn').should('be.visible')
        })
    })
})


context('Contact Footer', () => {

    it('Contact Footer section', () => {
        cy.get('.footer').scrollIntoView().should('be.visible')
    })
    
    it('Footer Gutter Space', () => {
        cy.get('.footer').scrollIntoView().find('.footer-gutter-space').should('be.visible')
    })

    it('Next Footer container', () => {
        cy.get('.next-footer-container').scrollIntoView().should('be.visible')
    })

})

context('Copyright', () => {

    it('Copyright section', () => {
        cy.get('.copyright').scrollIntoView().should('be.visible')
    })

    it('Copyright contents', () => {
        cy.get('.copyright-content').scrollIntoView().should('be.visible')
    })

    it('Copyright contents should have copyright links', () => {
        cy.get('.copyright-content').scrollIntoView().find('a[rel="noreferrer"]').should('be.visible')
    })

})


context('All links from News all Page', () => {
    it('Verify all links from News all Page', function () {
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

context('Register Press Pass', () => {
    it('Register for Press Pass verification', () => {
        cy.get('.signupNewsLetter_content > div > nav > a').should('be.visible')
        cy.get('.signupNewsLetter_content > div > nav > a').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup/registration')
       cy.go('back');
    })

})

context('Right Banner', () => {

    it('Right banner section', () => {
        cy.get('.rightBannerSec').scrollIntoView().should('be.visible')
    })

    it('Right banner container', () => {
        cy.get('.rightBanner-test-container').scrollIntoView().should('be.visible')
    })

    it('Right banner text', () => {
        cy.get('.rightBanner-test-container').find('.rightBannerSec_text').scrollIntoView().should('be.visible')
    })

    it('Right banner icon', () => {
        cy.get('.rightBanner-test-container').find('.rightBannerSec_icon').scrollIntoView().should('be.visible')
    })

    it('Right banner navigation', () => {
        cy.get('.rightBannerSec > a').invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/presspass')
        cy.go('back');
    })
    })
})
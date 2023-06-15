let resolutionData,resolution,browserResolution,width,height;

describe('News Subject verification', () => {
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
        cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('News').should('be.visible')
        cy.get('a > h3').contains('News by Subject').click({force:true})
        cy.get('.loader').should('be.visible')
        cy.get('.loader',{timeout:60000}).should('not.exist')
        cy.get('#onetrust-accept-btn-handler').click()
    })
    context('News Heading', () => {
        it('News Category Section', () => {
            cy.get('.newsByCatSec').scrollIntoView().should('be.visible')
        })
        it('News By Subject section have heading', () => {
            cy.get('.contentSec--heading').should('be.visible').contains('News By subject')
        })
        it('News By Subject section have sub heading', () => {
            cy.get('.newsByCatSec').find('.contentSec--subheading').should('be.visible')
        })
        it('News By Subject section have sort filters', () => {
            cy.get('.sortFilterSec').should('exist');
        })

        it('News By Subject section have clear fix', () => {
            cy.get('.clearfix').should('exist');
        })

        it('News By Subject section have news item', () => {
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
            cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_subheading').should('be.visible')
        })
    })

    context('Feature Components', () => {
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
    
    context('Footer', () => {
        it('Contact Footer', () => {
            cy.get('.footer').scrollIntoView().should('be.visible')
        })
    })

    context('All links from News By Subject Page', () => {
        it('Verify all links from News By Subject Page', function () {
            cy.verifyAllLinks('businesswire.wpengine.com');
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
            cy.get('.rightBannerSec_text').scrollIntoView().should('contains.text','Get breaking news delivered to your inbox with PressPass')
            cy.get('.rightBannerSec > a').invoke('removeAttr', 'target').click()
            cy.url()
            .should('include', '/media-journalist-tools/presspass')
            cy.go('back');
        })
    })

    it('Register for Press Pass verification', () => {
        cy.get('.signupNewsLetter_content > div > a').should('be.visible')
        cy.get('.signupNewsLetter_content > div > a').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup/registration')
       cy.go('back');
    })

})
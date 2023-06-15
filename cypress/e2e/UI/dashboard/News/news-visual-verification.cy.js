let resolutionData,resolution,browserResolution,width,height;

describe('News Details Visual verification', () => {
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
    context('News Details', () => {
    it('All News title verification', () => {
        cy.get('.contentSec--heading').scrollIntoView().compareSnapshot('all-news-section'+width+'_'+height,1);
    });
    it('Right banner section verification', () => {
        cy.get('.rightBannerSec').scrollIntoView().compareSnapshot('right-banner-section'+width+'_'+height,1);
    });

    it('News Letter', () => {
        cy.get('.signupNewsLetter_content').scrollIntoView().compareSnapshot('news-letter-section'+width+'_'+height,1);
        cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_heading').compareSnapshot('signup-news-letter-section'+width+'_'+height,1);
        cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_subheading').compareSnapshot('news-letter-contents-section'+width+'_'+height,1);
    });
    it('Sign up News letter', () => {
        cy.get('.signupNewsLetter_content > div > a').contains('Register for PressPass').should('be.visible')
        cy.get('.signupNewsLetter_content > div > a').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup/registration')
        cy.compareSnapshot('signup-registration-section'+width+'_'+height,1);
       cy.go('back');
    })

    it('Right banner', () => {
        cy.get('.rightBannerSec_text').scrollIntoView().should('contains.text','Get Press Pass for Journalist or a News Customer')
        cy.get('.rightBannerSec > a').invoke('removeAttr', 'target').click()
        cy.url()
        .should('include', '/login/signup')
        cy.compareSnapshot('signup-form-section'+width+'_'+height,1);
        cy.go('back');
    })
})
})
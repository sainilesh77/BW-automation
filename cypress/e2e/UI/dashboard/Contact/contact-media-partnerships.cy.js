let resolutionData,resolution,browserResolution,width,height;

describe('Contact Media and Partnership verification', () => {
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
        cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('Contact').should('be.visible').click()
        cy.get('a > h3').contains('Media & Partnerships').click({force : true})
        cy.get('.header_slider').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })

    it('Contact Header Slider', () => {
        cy.get('.header_slider').scrollIntoView().should('be.visible')
    })

    it('Contact Container contents', () => {
        cy.get('.contentContContainer').should('be.visible')
    })

    it('Right Context Box', () => {
        cy.get('.rightContentBox').should('be.visible')
    })
    
    it('Right Context Box has Title', () => {
        cy.get('.rightContentBox').find('.rightContentBox_title').should('be.visible')
    })
    
    it('Right Context Box has Details', () => {
        cy.get('.rightContentBox').find('.rightContentBox_text').should('be.visible')
    })

    

    // it('Sign-Up Banner', () => {
    //     cy.get('.signupbannerSec').scrollIntoView().should('be.visible')
    // })

    // it('Demo Banner', () => {
    //     cy.get('.demoBannerSec').scrollIntoView().should('be.visible')
    // })

    // it('Contact-US Banner', () => {
    //     cy.get('.contact-banner').scrollIntoView().should('be.visible')
    // })

    // it('Column Component', () => {
    //     cy.get('.column.dark').scrollIntoView().should('be.visible')
    // })

    // it('Verify all links from Services Page', function () {
    //     cy.verifyAllLinks('businesswire.wpengine.com');
    // });

    // it('Bread Crumb Component', () => {
    //     cy.get('.breadcrumbSec').scrollIntoView().should('be.visible')
    // })

    // it('Service Page Title', () => {
    //     cy.title().should('eq', 'Services | Business Wire')
    // })

    // it('Reommendation details', () => {
    //     cy.get('.cover-image-div').should('be.visible')
    // })

    it('Contact Header', () => {
        cy.get('.contact-banner-text1').should('be.visible').contains('Contact Us')
    })

    it('Contact Description', () => {
        cy.get('.contact-banner-text2').should('be.visible').contains('Speak with a Business Wire customer success representative for product, service, and pricing information. Set up an account and place a news release. Contact us today!')
    })

    // it('Demo banner header', () => {
    //     cy.get('.demoBannerSec_details--heading').should('be.visible').contains('Ready to learn more about Business Wire?')
    // })

    // it('Demo banner details', () => {
    //     cy.get('.demoBannerSec_details--text').should('be.visible').contains('See why Business Wire is the best news distribution solution for your needs.')
    // })

    // it('Sign-up banner header', () => {
    //     cy.get('.signupbannerSec_details--heading').should('be.visible').contains('Get started with Business Wire!')
    // })

    // it('Sign-up details', () => {
    //     cy.get('.signupbannerSec_details--text').should('be.visible').contains('Our deep experience, one-on-one guidance, and superior media targeting help you gain results. Register now and share your news.')
    // })
    
})
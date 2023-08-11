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
      //  cy.get('#onetrust-accept-btn-handler').click()
    })


    context('Header Slider', () => {

        it('Header Slider Section', () => {
            cy.get('.header_slider').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-contact-info'+width+'_'+height,1);
        })
    })

    context('Generic Components',()=>{
        it('Bread Crumb Component', () => {
            cy.get('.breadcrumbSec').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-bread-crumb'+width+'_'+height,1);
        })
    })

    context('Contact Footer', () => {

        it('Contact Footer section', () => {
            cy.get('.footer').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-footer'+width+'_'+height,1);
        })
    
    })
    
    context('Copyright', () => {
    
        it('Copyright section', () => {
            cy.get('.copyright').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-copyright'+width+'_'+height,1);
        })
    })

    context('Contact', () => {
    
        it('Contact section', () => {
            cy.get('.contact-sect').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-contact-section'+width+'_'+height,1);
        })
    })

    context('Contact US banner', () => {
        it('Contact Banner Section', () => {
            cy.get('.contact-banner').scrollIntoView().should('be.visible').compareSnapshot('contact-media-partner-contact-us-banner'+width+'_'+height,1);
        })
    })
    
})
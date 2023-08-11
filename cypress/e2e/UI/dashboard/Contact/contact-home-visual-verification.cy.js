let resolutionData,resolution,browserResolution,width,height;

describe('Contact Contents verification', () => {
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
        cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('Contact').click({force: true})
        cy.get('.header_slider').should('be.visible')
      //  cy.get('#onetrust-accept-btn-handler').click()
    })

    context('Header Slider', () => {

        it('Header Slider Section', () => {
            cy.get('.header_slider').scrollIntoView().should('be.visible').compareSnapshot('contact-home-header-slider'+width+'_'+height,1);
        })
        
    })

    context('Generic Components',()=>{
        it('Bread Crumb Component', () => {
            cy.get('.breadcrumbSec').scrollIntoView().should('be.visible').compareSnapshot('contact-home-bread-crumb'+width+'_'+height,1);
        })

    })

    context('Contact Footer', () => {

        it('Contact Footer section', () => {
            cy.get('.footer').scrollIntoView().should('be.visible').compareSnapshot('contact-home-footer'+width+'_'+height,1);
        })
    
    })
    
    context('Copyright', () => {
    
        it('Copyright section', () => {
            cy.get('.copyright').scrollIntoView().should('be.visible').compareSnapshot('contact-home-copyright'+width+'_'+height,1);
        })

    })

    context('General Enquiry Form',()=>{
        it('Form section', () => {
            cy.get('.generalInquiriesForm').scrollIntoView().should('be.visible').compareSnapshot('contact-home-enquiry-form'+width+'_'+height,1);
        })
    })

    context('Contact Info', () => {
    
        it('Contact Info section', () => {
            cy.get('.contactInfo').scrollIntoView().should('be.visible').compareSnapshot('contact-home-contact-info'+width+'_'+height,1);
        })
    })

})
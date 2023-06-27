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
        cy.get('#onetrust-accept-btn-handler').click()
    })

    context('Header Slider', () => {

        it('Header Slider Section', () => {
            cy.get('.header_slider').scrollIntoView().should('be.visible')
        })

        it('Header background Image', () => {
            cy.get('.header_slider').scrollIntoView().find('.bc-image-div').should('be.visible')
        })
        
    })

    context('Generic Components',()=>{
        it('Bread Crumb Component', () => {
            cy.get('.breadcrumbSec').scrollIntoView().should('be.visible')
        })
    
        it('Bread Crumb link', () => {
            cy.get('.breadcrumbSec').scrollIntoView().find('.ant-breadcrumb-link').should('be.visible')
        })

        it('Bread Crumb Seperator', () => {
            cy.get('.breadcrumbSec').scrollIntoView().find('.ant-breadcrumb-separator').should('be.visible')
        })

        it('Page Title', () => {
            cy.title().should('eq', 'Contact Us | Business Wire')
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

    context('General Enquiry Form',()=>{
        it('Form section', () => {
            cy.get('.generalInquiriesForm').scrollIntoView().should('be.visible')
        })

        it('Form Body', () => {
            cy.get('.generalInquiriesForm').find('.generalInquiriesForm_body').scrollIntoView().should('be.visible')
        })

        it('Form heading', () => {
            cy.get('.generalInquiriesForm_body').find('div[role="heading"]').scrollIntoView().should('be.visible')
        })

        it('Form sub-title', () => {
            cy.get('.generalInquiriesForm_body').find('.generalInquiriesForm_body--subtitle').scrollIntoView().should('be.visible')
        })

        it('Contact Info', () => {
            cy.get('.generalInquiriesForm_body').find('#contact-info').scrollIntoView().should('be.visible')
        })

        it('Form Hub', () => {
            cy.get('.generalInquiriesForm_body').find('#reactHubspotForm0').scrollIntoView().should('be.visible')
        })
    })

    context('Contact Info', () => {
    
        it('Contact Info section', () => {
            cy.get('.contactInfo').scrollIntoView().should('be.visible')
        })
    
        it('Social Media contents', () => {
            cy.get('div[aria-label="socialMedia section"]').scrollIntoView().should('be.visible')
        })

        it('Contact Info Container', () => {
            cy.get('.contactInfoContainer').scrollIntoView().should('be.visible')
        })

        it('Email Section', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_email').scrollIntoView().should('be.visible')
        })

        it('Email title', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_email').find('.contactInfoContainer_email--title').scrollIntoView().should('be.visible')
        })

        it('Email Id', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_email').find('.contactInfoContainer_email--emailID').scrollIntoView().should('be.visible')
        })

        it('Phone Section', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_phone').scrollIntoView().should('be.visible')
        })

        it('Phone title', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_phone').find('.contactInfoContainer_phone--title').scrollIntoView().should('be.visible')
        })

        it('Phone numbers', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_phone').find('.contactInfoContainer_phone--numbers').first().scrollIntoView().should('be.visible')
        })

        it('Office Section', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_office').scrollIntoView().should('be.visible')
        })

        it('Office title', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_office').find('.contactInfoContainer_office--title').scrollIntoView().should('be.visible')
        })

        it('Office links', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_office').find('.contactInfoContainer_office--locationLink').first().scrollIntoView().should('be.visible')
        })

        it('Followup Section', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_followus').scrollIntoView().should('be.visible')
        })

        it('Followup title', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_followus').find('.contactInfoContainer_followus--title').scrollIntoView().should('be.visible')
        })

        it('Followup Social Icons', () => {
            cy.get('.contactInfoContainer').find('.contactInfoContainer_followus').find('.contactInfoContainer_followus--socialIcons').first().scrollIntoView().should('be.visible')
        })
    })

})
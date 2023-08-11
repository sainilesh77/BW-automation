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
       // cy.get('#onetrust-accept-btn-handler').click()
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
            cy.title().should('eq', 'Media and Partnership | Business Wire')
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

    context('Contact', () => {
    
        it('Contact section', () => {
            cy.get('.contact-sect').scrollIntoView().should('be.visible')
        })
    
        it('Contact Container', () => {
            cy.get('.contentContContainer').scrollIntoView().should('be.visible')
        })
    
        it('Media Enquiries', () => {
            cy.get('div[aria-label="mediaPartnership  conact details section"]').scrollIntoView().should('be.visible')
        })

        it('Right Content Text', () => {
            cy.get('.rightContentBox').first().scrollIntoView().should('be.visible')
        })

        it('Right Content Title', () => {
            cy.get('.rightContentBox').each((content)=>{
                cy.wrap(content).find('.rightContentBox_title').scrollIntoView().should('be.visible')
            })
        })
        it('Right Content Text', () => {
            cy.get('.rightContentBox').each((content)=>{
                cy.wrap(content).find('.rightContentBox_text').scrollIntoView().should('be.visible')
            })
        })
    })

    context('Contact US banner', () => {
        it('Contact Banner Section', () => {
            cy.get('.contact-banner').scrollIntoView().should('be.visible')
        })

        it('Contact Banner content', () => {
            cy.get('.contact-banner').find('.contact-banner-content').scrollIntoView().should('be.visible')
        })

        it('Contact Banner heading', () => {
            cy.get('.contact-banner').find('.contact-banner-text1').scrollIntoView().should('be.visible')
        })

        it('Contact Banner description', () => {
            cy.get('.contact-banner').find('.contact-banner-text2').scrollIntoView().should('be.visible')
        })

        it('Get started button', () => {
            cy.get('.contact-banner').scrollIntoView().find('a').should("have.attr", "href")
            .should("not.be.empty")
        })

        it('Navigation from Get started button', () => {
                cy.get('.contact-banner').find('a').should('have.attr', 'href')
                .should('contains','/contact-us') 
                cy.get('.contact-banner a').invoke('removeAttr', 'target').click()
                cy.url()
                .should('include', '/contact-us')
                cy.go('back');
        })
    })
    
})
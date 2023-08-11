let resolutionData,resolution,browserResolution,width,height;

describe('Office Location Contents verification', () => {
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
        // cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('Contact').should('be.visible').click()
        // cy.get('ul[id*="1-16-popup"] > div > div:nth-child(1) > a').should('be.visible').click();
   
        cy.get('.ant-menu-title-content > span > a').should('be.visible').contains('Contact').should('be.visible').click()
        cy.get('a > h3').contains('General Inquiries').click({force : true})
        cy.get('.header_slider').should('be.visible')
        
       // cy.get('#onetrust-accept-btn-handler').click()


    })

    context('Office Location', () => {

        it('Office Location Menu', () => {
            cy.get('.contactInfoContainer_office--locationLink > a').scrollIntoView().should('be.visible')

        })

        it('Office Location Menu', () => {
            cy.get('.contactInfoContainer_office--locationLink > a').scrollIntoView().should('be.visible').click()
            
        })
        
    })
    context('Hero Header Slider ', () => {

        it('Header Slider Section Visible', () => {
            cy.get('.header_slider').scrollIntoView().should('be.visible')
        })

        it('Hero Header background Image', () => {
            cy.get('.header_slider').scrollIntoView().find('.bc-image-div').should('be.visible')
        })


        it('Hero Header Title Visible', () => {
            cy.get('.header_slider').scrollIntoView().find('.ant-col-24 > .ant-row > .title-div').should('be.visible')
        })

        it('Hero Header Description Visible', () => {
            cy.get('.header_slider').scrollIntoView().find('.ant-col-24 > .ant-row > .desc-div').should('be.visible')
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
            cy.title().should('eq', 'Office Locations | Business Wire')
        })

    })

    context('Headquarters Section visible',()=>{
        it('Headquarters Card Visible', () => {
            cy.get('.officeCardCol').scrollIntoView().should('be.visible')
        })
       
        it('Headquarters Heading Visible', () => {
            cy.get('#rc-tabs-0-tab-Headquarters').scrollIntoView().should('be.visible')
        })
    
        it('Headquarters Heading Name Visible', () => {
            cy.get('.ant-card-meta-title').scrollIntoView().should('be.visible')
        })
        it('Headquarters Description Name Visible', () => {
            cy.get('pre').scrollIntoView().should('be.visible')
        })

        it('Headquarters Section CTA Button Visible', () => {
            cy.get('.action-sec > .ant-btn').scrollIntoView().should('be.visible')
        })
        
        
    })



   

    

    context('Contact Us banner', () => {

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
})
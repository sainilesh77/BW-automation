let resolutionData,resolution,browserResolution,width,height;

describe('Services Distrubution & Analytics Page verification', () => {
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
        cy.get('.ant-menu-submenu-title > .ant-menu-title-content > span').should('be.visible').contains('Services').should('be.visible').trigger('mouseover',{ force : true })
        cy.get('a > h3').contains('Distribution & Analytics').click({force : true})
        cy.get('.slider-div').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })

    it('Services Slider', () => {
        cy.get('.slider-div').scrollIntoView().should('be.visible')
    })

    it('Service Office Card', function () {
        cy.get('.serviceofficecard').should('be.visible')
    });

    it('Service Card Description', () => {
        cy.get('.service-card-description.description-text ').should('be.visible')
    })

    it('Recommendation Info Section', () => {
        cy.get('.recommendationInfoSec').scrollIntoView().should('be.visible')
    })

    it('Recommendation Info Heading', () => {
        cy.get('.recommendationInfoSec').find('.recommendationInfoSec_heading').scrollIntoView().should('be.visible')
    })

    it('Recommendation Info Description', () => {
        cy.get('.recommendationInfoSec').find('.recommendationInfoSec_description').scrollIntoView().should('be.visible')
    })

    it('Sign-Up Banner', () => {
        cy.get('.signupbannerSec').scrollIntoView().should('be.visible')
    })

    it('Contact-US Banner', () => {
        cy.get('.contact-banner').scrollIntoView().should('be.visible')
    })

    it('Column Component', () => {
        cy.get('.column.dark').scrollIntoView().should('be.visible')
    })

    it('Verify all links from Distribution & Analytics Page', function () {
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

    it('Bread Crumb Component', () => {
        cy.get('.breadcrumbSec').scrollIntoView().should('be.visible')
    })

    it('Service Card Page Details', () => {
        cy.get('.serviceofficecard').should('be.visible')
    })

    it('Service Card Title', () => {
        cy.get('.serviceofficecard').find('.ant-card-body').should('be.visible').each((ele)=>{
            cy.wrap(ele).find('.service-card-title').should('be.visible')
        })
    })
    it('Service Card Description', () => {
        cy.get('.serviceofficecard').find('.ant-card-body').should('be.visible').each((ele)=>{
            cy.wrap(ele).find('.service-card-title').should('be.visible')
            cy.wrap(ele).find('.service-card-description').should('be.visible')
            cy.wrap(ele).find('a > .service-card-button').should('be.visible')
            
        })
    })

    it('Service Card Having Find Out More Button', () => {
        cy.get('.serviceofficecard').find('.ant-card-body').should('be.visible').each((ele)=>{
            cy.wrap(ele).find('a > .service-card-button').should('be.visible')
        })
    })


    it('Contact Header', () => {
        cy.get('.contact-banner-text1').should('be.visible').contains('Contact Us')
    })

    it('Contact Description', () => {
        cy.get('.contact-banner-text2').should('be.visible').contains('Speak with a Business Wire representative for product, service, and pricing information. Set up an account and share your news.')
    })

    it('Sign-up banner header', () => {
        cy.get('.signupbannerSec_details--heading').should('be.visible').contains('Get started with Business Wire')
    })

    it('Sign-up details', () => {
        cy.get('.signupbannerSec_details--text').should('be.visible').contains('Our deep experience, one-on-one guidance, and superior media targeting help you gain results. Register now and share your news.')
    
    })

    // it('Leadgen Banner', () => {
    //     cy.get('.leadgenbannerSec').should('be.visible')
    // })

    // it('Leadgen Banner having details dection', () => {
    //     cy.get('.leadgenbannerSec').find('.leadgenbannerSec_details').should('be.visible')
    // })

    // it('Leadgen Banner having mock image', () => {
    //     cy.get('.leadgenbannerSec_details').find('div > div > .leadgenbanner-macBookProMockupimg').should('be.visible')
    // })

    // it('Leadgen Banner having fill form', () => {
    //     cy.get('.leadgenbannerSec_details > div> div[align="start"]').should('be.visible')
    // })
    
})
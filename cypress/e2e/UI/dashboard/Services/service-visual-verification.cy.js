let resolutionData,resolution,browserResolution,width,height;

describe('Services Visual verification', () => {
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
        cy.get('.ant-menu-submenu-title > .ant-menu-title-content > span').should('be.visible').contains('Services').should('be.visible').click()
        cy.get('.slider-btn').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })
    it('Services home page', () => {
        cy.compareSnapshot('Services-Home-Page'+width+'_'+height,1);
    })
    it('Slider components', () => {
        cy.get('.ant-row.slider-content.css-dev-only-do-not-override-zyge7o').compareSnapshot('Slider-component'+width+'_'+height,1);
    })
    it('Service contents ', () => {
        cy.get('.about-services_content').compareSnapshot('Service-contents-component'+width+'_'+height,1);
    })
    it('Recommendation Info ', () => {
        cy.get('.recommendationInfoSec').compareSnapshot('Recommendation-info-component'+width+'_'+height,1);
    })
    it('Signup banner', () => {
        cy.get('.signupbannerSec').compareSnapshot('sign-up-banner-component'+width+'_'+height,1);
    })

    // it('Demo banner', () => {
    //     cy.get('.demoBannerSec').compareSnapshot('demo-banner-component'+width+'_'+height,1);
    // })
    
    it('Contact US banner', () => {
        cy.get('.contact-banner').compareSnapshot('contact-us-component'+width+'_'+height,1);
    })

    it('Column Component', () => {
        cy.get('.column.dark').compareSnapshot('column-component'+width+'_'+height,1);
    })

    it('Bread Crumb Component', () => {
        cy.get('.breadcrumbSec').compareSnapshot('bread-crumb-component'+width+'_'+height,1);
    })

})
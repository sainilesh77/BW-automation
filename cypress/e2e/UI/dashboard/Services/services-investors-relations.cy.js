let resolutionData,resolution,browserResolution,width,height;

describe('Services Investors Relations verification', () => {
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
        cy.get('a > h3').contains('Investor Relations').click({force : true})
        cy.get('.slider-div').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })

    context('Hero Slider', () => {

        it('Hero Slider Section', () => {
            cy.get('.hero-slider').scrollIntoView().should('be.visible')
        })
        it('Slider Carousel', () => {
            cy.get('.hero-slider .ant-carousel').scrollIntoView().should('be.visible')
        })

        it('Slider have slick slider', () => {
            cy.get('.hero-slider').find('.slick-slider').scrollIntoView().should('be.visible')
        })

        it('Slick Slider having slick list', () => {
            cy.get('.hero-slider .ant-carousel').find('.slick-slider .slick-list').scrollIntoView().should('be.visible')
        })

        it('Slider Content', () => {
            cy.get('.ant-row.slider-content.css-dev-only-do-not-override-zyge7o').scrollIntoView().should('be.visible')
        })

        it('Slider Content have title', () => {
            cy.get('.ant-row.slider-content.css-dev-only-do-not-override-zyge7o').find('.ant-col.ant-col-24.slider-title.css-dev-only-do-not-override-zyge7o').scrollIntoView().should('be.visible')
        })

        it('Slider Content have description', () => {
            cy.get('.ant-row.slider-content.css-dev-only-do-not-override-zyge7o').find('.ant-col.ant-col-24.slider-desc.css-dev-only-do-not-override-zyge7o').scrollIntoView().should('be.visible')
        })
        
    })

    context('Recommendation for you', () => {
        it('Recommendation section', () => {
            cy.get('.recommendationInfoSec').scrollIntoView().should('be.visible')
        })

        it('Heading', () => {
            cy.get('.recommendationInfoSec').scrollIntoView().find('div[role="heading"]').should('be.visible')
        })

        it('Heading Description', () => {
            cy.get('.recommendationInfoSec').scrollIntoView().find('.recommendationInfoSec_description').should('be.visible')
        })

        it('Recommendation Description', () => {
            cy.get('.recommendationInfoSec').scrollIntoView().find('.recommendationInfoSec_description').should('be.visible')
        })
        
        it('Recommendation news', () => {
            cy.get('.recommendation').find('.recommendation_news').scrollIntoView().should('be.visible')
        })

        it('News navigation to correct link', () => {
            cy.get('.recommendation').find('.recommendation_news').each((news) => {
                cy.wrap(news).find('.cover-image-div').should('be.visible')
                cy.wrap(news).get('a').should('have.attr', 'href')
                .should('contains','/news') 
            })
        })
    })

    context('Column component', () => {
        it('Column Component section ', () => {
            cy.get('.column.dark').scrollIntoView().should('be.visible')
        })

        it('Column Component image ', () => {
            cy.get('.column.dark').find('.image-row').first().scrollIntoView().should('be.visible')
        })

        it('Column title ', () => {
            cy.get('.column.dark').find('.column-title ').first().scrollIntoView().should('be.visible')
        })
        it('Column description ', () => {
            cy.get('.column.dark').find('.column-desc').first().scrollIntoView().should('be.visible')
        })

    })

    context('Leadgen Banner',()=>{
        it('Leadgen Banner section', () => {
            cy.get('.leadgenbannerSec').should('be.visible')
        })

        it('Leadgen Banner having details dection', () => {
            cy.get('.leadgenbannerSec').find('.leadgenbannerSec_details').should('be.visible')
        })

        it('Leadgen Banner having mock image', () => {
            cy.get('.leadgenbannerSec_details').find('div > div > .leadgenbanner-macBookProMockupimg').should('be.visible')
        })

        it('Leadgen Banner having fill form', () => {
            cy.get('.leadgenbannerSec_details > div> div[align="start"]').should('be.visible')
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

        it('Service Page Title', () => {
            cy.title().should('eq', 'Investor-Relation | Business Wire')
        })

    })

    context('Service Office Component',()=>{
        it('Service Office section', () => {
            cy.get('.serviceofficecardCont').should('be.visible')
        })
    
        it('Card Meta Details', () => {
            cy.get('.serviceofficecardCont').find('.ant-card-meta-detail').should('be.visible')
        })
    
        it('Card Meta details have title', () => {
            cy.get('.serviceofficecardCont').find('.ant-card-meta-detail').find('.service-card-title').should('be.visible')
        })
    
        it('Card meta details have description and text', () => {
            cy.get('.serviceofficecardCont').find('.ant-card-meta-detail').find('.ant-card-meta-description').find('.service-card-description.description-text').should('be.visible')
        })

        it('Navigation from Learn More button', () => {
            cy.get('.ant-card-actions').find('a').should('have.attr', 'href')
            .should('contains','/investor-relations-services/press-release-disclosure') 
            cy.get('.ant-card-actions a').first().invoke('removeAttr', 'target').click()
            cy.url()
            .should('include', '/investor-relations-services/press-release-disclosure')
            cy.go('back');
        })
    })
})


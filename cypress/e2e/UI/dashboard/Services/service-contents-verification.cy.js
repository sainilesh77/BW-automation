let resolutionData,resolution,browserResolution,width,height;

describe('Services Contents verification', () => {
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
        cy.get('.ant-menu-submenu-title > .ant-menu-title-content > span').should('be.visible').contains('Services').should('be.visible').click({force:true})
        cy.get('.slider-btn').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })
    context('Slider', () => {

        it('Hero Slider', () => {
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
            cy.get('.css-zyge7o.slider-content').scrollIntoView().should('be.visible')
        })

        it('Slider Content have title', () => {
            cy.get('.css-zyge7o.slider-content').find('.slider-title').scrollIntoView().should('be.visible')
        })

        it('Slider Content have description', () => {
            cy.get('.css-zyge7o.slider-content').find('.slider-desc').scrollIntoView().should('be.visible')
        })
        
    })

    context(' About Service components', () => {
        it('About Service', () => {
            cy.get('.about-services').should('be.visible')
        })

        it('About Services contents', () => {
            cy.get('.about-services').find('.about-services_content').should('be.visible')
        })

        it('Service page column component image', () => {
            cy.get('.about-services').find('.image-row').should('be.visible')
        })

        it('Service page column component image', () => {
            cy.get('.about-services').find('.image-row').should('be.visible')
        })

        
    })
    context('Recommendation', () => {
        it('Recommendation having Info', () => {
            cy.get('.recommendationInfoSec').scrollIntoView().should('be.visible')
        })

        it('Recommendation having recommendation news', () => {
            cy.get('.recommendation').find('.recommendation_news').scrollIntoView().should('be.visible')
        })

        it('News having image and navigation link', () => {
            cy.get('.recommendation').find('.recommendation_news').each((news) => {
                cy.wrap(news).find('.cover-image-div').should('be.visible')
                cy.wrap(news).get('a').should('have.attr', 'href')
                .should('contains','/news') 
            })
        })
    })

    context('Sign up banner', () => {

        it('Sign-Up Section', () => {
            cy.get('.signupbannerSec').scrollIntoView().should('be.visible')
        })

        it('Sign-up Heading', () => {
            cy.get('.signupbannerSec_details--heading').should('be.visible')
        })
    
        it('Sign-up details', () => {
            cy.get('.signupbannerSec_details--text').should('be.visible')
        })

        it('Sign-up Section Image', () => {
            cy.get('.signupbannerSec_details--img').should('be.visible')
        })

        
    })

    context('Demo banner', () => {
        it('Demo Banner section ', () => {
            cy.get('.demoBannerSec').scrollIntoView().should('be.visible')
        })

        it('Demo banner header', () => {
            cy.get('.demoBannerSec_details--heading').should('be.visible').contains('Ready to learn more about Business Wire?')
        })

        it('Demo banner details', () => {
            cy.get('.demoBannerSec_details--text').should('be.visible').contains('See why Business Wire is the best news distribution solution for your needs.')
        })

        it('Request Demo Button', () => {
            cy.get('.demoBannerSec').find('a > span').should('be.visible').contains('Request a Demo')
        })
    })

    context('Contact US banner', () => {
        it('Contact Banner', () => {
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

    })

    context.only('Column component', () => {
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

        it('Learn More button', () => {
            cy.get('.column.dark').scrollIntoView().find('a').should("have.attr", "href")
            .should("not.be.empty")
        })
    })

    it('Bread Crumb Component', () => {
        cy.get('.breadcrumbSec').scrollIntoView().should('be.visible')
    })

    it('Service Page Title', () => {
        cy.title().should('eq', 'Services | Business Wire')
    })

    it('Reommendation details', () => {
        cy.get('.cover-image-div').should('be.visible')
    })

    it('Contact Header', () => {
        cy.get('.contact-banner-text1').should('be.visible').contains('Contact Us')
    })

    it('Contact Description', () => {
        cy.get('.contact-banner-text2').should('be.visible').contains('Speak with a Business Wire customer success representative for product, service, and pricing information. Set up an account and place a news release. Contact us today!')
    })

    
})
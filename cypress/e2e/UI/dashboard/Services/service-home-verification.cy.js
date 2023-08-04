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

        cy.get('.ant-menu-submenu-title > .ant-menu-title-content > span').should('be.visible').contains('Services').should('be.visible').click().trigger('mousemove')

        cy.get('ul[id*="1-13-popup"] > div > div:nth-child(1) > a').should('be.visible').click();

        cy.get('.slider-btn').should('be.visible')

       // cy.get('#onetrust-accept-btn-handler').click()

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

            cy.get('div.slider-content').scrollIntoView().should('be.visible')

        })

 

        it('Slider Content have title', () => {

            cy.get('div.slider-content').find('.slider-title').scrollIntoView().should('be.visible')

        })

 

        it('Slider Content have description', () => {

            cy.get('div.slider-content').find('.slider-desc').scrollIntoView().should('be.visible')

        })

        

    })

 

    context('About Service components', () => {

        it('About Service Section', () => {

            cy.get('div .about-services').should('be.visible')

        })

 

        it('About Services contents', () => {

            cy.get('div .about-services').find('.about-services_content').should('be.visible')

        })

 

        it('Contents heading', () => {

            cy.get('div .about-services').find('.about-services_content--heading').should('be.visible')

        })

 

 

        it('Contents text', () => {

            cy.get('div .about-services').find('.about-services_content--text').should('be.visible')

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

 

        it('Message Container', () => {

            cy.get('.recommendationInfoSec').scrollIntoView().find('[data-qa="message_container"]').should('be.visible')

        })

        

        it('Recommendation news', () => {

            cy.get('.recommendation').find('.recommendation_news').scrollIntoView().should('be.visible')

        })

 

        it('News navigation to correct link', () => {

            cy.get('.recommendation').find('.recommendation_news').each((news) => {

                cy.wrap(news).find('.cover-image-div').should('be.visible')

                cy.wrap(news).get('a').should('have.attr', 'href')

                .should('contains','/services')

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

 

    // context('Demo banner', () => {

    //     it('Demo Banner section ', () => {

    //         cy.get('.demoBannerSec').scrollIntoView().should('be.visible')

    //     })

 

    //     it('Demo banner header', () => {

    //         cy.get('.demoBannerSec_details--heading').should('be.visible').contains('Ready to learn more about Business Wire?')

    //     })

 

    //     it('Demo banner details', () => {

    //         cy.get('.demoBannerSec_details--text').should('be.visible').contains('See why Business Wire is the best news distribution solution for your needs.')

    //     })

 

    //     it('Request Demo Button', () => {

    //         cy.get('.demoBannerSec').find('a > span').should('be.visible').contains('Request a Demo')

    //     })

    // })

 

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

            cy.title().should('eq', 'Services | Business Wire')

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

 

        it('Learn More button', () => {

            cy.get('.column.dark').scrollIntoView().find('a').should("have.attr", "href")

            .should("not.be.empty")

        })

 

        it('Navigation from Learn More button', () => {

            cy.get('.column.dark ').find('div a').should('have.attr', 'href')

            .should('contains','/public-relations-services')

            cy.get('.column.dark > div a').first().invoke('removeAttr', 'target').click()

            cy.url()

            .should('include', '/public-relations-services')

            cy.go('back');

        })

 

    })

 

})
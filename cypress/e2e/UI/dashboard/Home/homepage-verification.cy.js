
// Developed : Amar Y, Date 08/08/2023


let resolutionData,resolution,browserResolution,width,height;

 

describe('Homepage Contents verification', () => {

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

        cy.get('.bw-logo').should('be.visible').click()

   
    })

    context('Generic Components',()=>{

       

 

        it('Page Title', () => {

            cy.title().should('eq', 'Home | Business Wire')

        })

 

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

            cy.get('div.slider-content').should('be.visible')

        })

 

        it('Slider Content have title', () => {

            cy.get('div.slider-content').find('.slider-title').should('be.visible')

        })

 

        it('Slider Content have description', () => {

            cy.get('div.slider-content').find('.slider-desc').should('be.visible')

        })



        

    })

 
    context('News Section', () => {

        it('Latest News Section', () => {

            cy.get('.latest-news-col > :nth-child(1) > .heading-bottom-margin > div').should('be.visible').contains('Latest News')


        })
    

        it('Latest News with multimedia Section', () => {

            cy.get('.multi-news-col > :nth-child(1) > .heading-bottom-margin > div').should('be.visible').contains('Latest News with Multimedia')


        })

        it('Trending News Section', () => {

            cy.get('.trending-news-col > :nth-child(1) > :nth-child(1) > .left-text-align > div').should('be.visible').contains('Trending News')


        })

        it('Latest News Title Visible & Clickable', () => {

            cy.get(':nth-child(2) > .ant-card > .ant-card-body > .title-description-section > .title-and-description > .news-title').should('be.visible').click()
            cy.get('.bw-logo').should('be.visible').click()




        })

        it('Latest News With multimedia Title Visible & Clickable', () => {

            cy.get(':nth-child(2) > .ant-card > .ant-card-body > .align-text-left > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title > .card-news-title').should('be.visible').click()
            cy.get('.bw-logo').should('be.visible').click()




        })
        
        it('Trending News Title Visible & Clickable', () => {

            cy.get(':nth-child(2) > .break-word > .trendingNewsTitleLink').should('be.visible').click()
            cy.get('.bw-logo').should('be.visible').click()




        })

        it('View More News', () => {

            cy.get('.dashboard-sect > .ant-row-center > .ant-col > a').should('be.visible').click()
            cy.get('.bw-logo').should('be.visible').click()




        })
    })


 context('Marketing Cell Content', () => {

        it('Marketing Cell Content Visible', () => {

            cy.get('.marketing-cell-lg').should('be.visible')
               

        })
     
        it('Marketing Cell Heading', () => {

            cy.get('.marketing-cell-lg_body > .heading').should('be.visible')
               

        })

        it('Marketing Cell Description', () => {

            cy.get('.mk-description-text').should('be.visible')
               

        })
        it('Marketing Cell CTA Button', () => {

            cy.get('.action > a > .tertiary-light-outlined').should('be.visible')

       
        })
        
      
       
    })

    context('Newsletter Section', () => {

        it('Newsletter verification', () => {
            cy.get('.signupNewsLetter_content').scrollIntoView().should('be.visible')
        })
    
        it('Newsletter Base Box verification', () => {
            cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText').should('be.visible')
        })
    
        it('Newsletter Base Box Text Heading verification', () => {
            cy.get('.signupNewsLetter_content').scrollIntoView().find('.signupnewsletterBaseText_heading').should('be.visible')
        })
    
        it('Newsletter Base Box Text Sub Heading verification', () => {
            cy.get('.signupNewsLetter_content').find('.signupnewsletterBaseText_subheading').contains('Become a registered PressPass member and receive up-to-date news on the topics you cover.').should('be.visible')
        })
    
    })



    context('Video Section', () => {

        it('Video Section Visible', () => {
            cy.get('.sc-hIqOWS > :nth-child(4) > :nth-child(3)').scrollIntoView().should('be.visible')
        })
    
        it('Video Section Heading', () => {
            cy.get('.videoBaseText-heading').scrollIntoView().should('be.visible')
        })
    
        it('Video Section Description', () => {
            cy.get('.videoBasetext-description').scrollIntoView().should('be.visible')
        })
    
        it('Video Title', () => {
            cy.get('.videoSection_details--title > span').scrollIntoView().should('be.visible')
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

            .should('contains','/services')

            cy.get('.column.dark > div a').first().invoke('removeAttr', 'target').click()

            cy.url()

            .should('include', '/services')

            cy.go('back');

        })

 

    })



    context('Testimonials Section', () => {

 

        it('Testimonials section visible', () => {

            cy.get('.sc-dKfzgJ').scrollIntoView().should('be.visible')

        })

        it('Testimonials section Heading', () => {

            cy.get('.myCarousel-heading').scrollIntoView().should('be.visible')

        })


        it('Testimonials Description Text', () => {

            cy.get('.slick-active > :nth-child(1) > .carousel-div > .my-carousel > p > .testimonial-description-text').scrollIntoView().should('be.visible')

        })

        
        it('Testimonials CTA', () => {

            cy.get('.testimonials-div > .ant-btn').scrollIntoView().should('be.visible')

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

    
context('All links from Homepage', () => {
    it('Verify all links from Homepage', function () {
        cy.get('a').each(link => {
          if (link.prop('href'))
            cy.request({
              url: link.prop('href'),
              failOnStatusCode: false
            })
          cy.log( link.prop('href'))
        })
    });

})
 

})
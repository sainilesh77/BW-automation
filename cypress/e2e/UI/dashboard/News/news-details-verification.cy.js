
// Developed : Amar Y, Date 08/08/2023


let resolutionData,resolution,browserResolution,width,height;

 

describe('News Details Page Contents Verification', () => {

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

    

 
    context('News Section', () => {

        it('Latest News Section', () => {

            cy.get('.latest-news-col > :nth-child(1) > .heading-bottom-margin > div').scrollIntoView().should('be.visible').contains('Latest News')


        })
    

        it('Latest News with multimedia Section', () => {

            cy.get('.multi-news-col > :nth-child(1) > .heading-bottom-margin > div').scrollIntoView().should('be.visible').contains('Latest News with Multimedia')


        })

      

    

        it('Latest News With multimedia Title Visible & Clickable', () => {

            cy.get(':nth-child(2) > .ant-card > .ant-card-body > .align-text-left > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title > .card-news-title').scrollIntoView().should('be.visible').click()
        




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

 

        it('News Detals Page Title', () => {

            cy.title().should('eq', 'News | Business Wire')

        })

 

    })

 
    context('Details Page',()=>{

        it('News Title or Heading Visible', () => {

            cy.get('p > b').should('be.visible')
           

        })

        it('News Sub Heading Visible', () => {

            cy.get('.contentSec--subheading > div').scrollIntoView().should('be.visible')
           

        })
        
        it('Date & Time Visible', () => {

            cy.get('.contentSec--dateSect').scrollIntoView().should('be.visible')
           

        })
        it('Right Logo Title Visible', () => {

            cy.get('.rightlogoBox_title').scrollIntoView().should('be.visible')
           

        })
       

        it('Right Logo Visible', () => {

            cy.get('.rightlogoBox_img > a > img').scrollIntoView().should('be.visible')
           

        })
        it('More News text Visible', () => {

            cy.get('.rightNewsBox_title').scrollIntoView().should('be.visible')
           

        })

        it('More News Heading Visible', () => {

            cy.get('.rightNewstBox_text > :nth-child(1) > a').scrollIntoView().should('be.visible')
           

        })

        it('More News Date & Time Visible', () => {

            cy.get(':nth-child(1) > .rightNewstBox_date > :nth-child(1)').scrollIntoView().should('be.visible')
           

        })
        it('News Details Visible', () => {

            cy.get('.newsDetailsSec').scrollIntoView().should('be.visible')
           

        })
        it('News Details Share icon Visible', () => {

            cy.get('.ant-col-sm-8 > .sc-jTrPJq > .shareIconSec > img').scrollIntoView().should('be.visible')
           

        })
        

        it('News Details Contact Us Visible', () => {

            cy.get('.rightContentSec > .sc-kgKVFY > .rightContentBox').scrollIntoView().should('be.visible')
           

        })

       


        it('Right Section Contact Us Visible', () => {

            cy.get(':nth-child(8) > .sc-kgKVFY > .rightContentBox').scrollIntoView().should('be.visible')
           

        })



    })


    context('Related News', () => {

        it('Related News section visible', () => {
            cy.get('.sc-eACynP').scrollIntoView().should('be.visible')
        })
        it('Related News Heading visible', () => {
            cy.get('.recommendationInfoSec_heading').scrollIntoView().should('be.visible')
        })
        
        it('Related News Title visible', () => {
            cy.get('.imgCoverNo > :nth-child(2)').scrollIntoView().should('be.visible')
        })
        it('Related News Title without image visible', () => {
            cy.get(':nth-child(1) > .sc-gjTGSA > .ant-card > .ant-card-actions > li > :nth-child(1) > .ant-row > .align-text-end > span > .sc-jTrPJq > .shareIconSec > img').scrollIntoView().should('be.visible')
        })

        
        it('Related News Date & Time visible', () => {
            cy.get(':nth-child(1) > .sc-gjTGSA > .ant-card > .ant-card-actions > li > :nth-child(1) > .ant-row > .ant-col-offset-1').scrollIntoView().should('be.visible')
        })

        it('Related News Share icon visible', () => {
            cy.get(':nth-child(1) > .sc-gjTGSA > .ant-card > .ant-card-actions > li > :nth-child(1) > .ant-row > .align-text-end > span > .sc-jTrPJq > .shareIconSec > img').scrollIntoView().should('be.visible')
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



    

    context('Media Banner', () => {

        it('Media Banner Component section Visible', () => {

            cy.get('.media-banner').scrollIntoView().should('be.visible')

        })

 

        it('Media Banner Title is Visible ', () => {

            cy.get('.banner-title').first().scrollIntoView().should('be.visible')

        })

 

        it('Media Banner Description is Visible ', () => {

            cy.get('.banner-desc').first().scrollIntoView().should('be.visible')

        })

        it('Media Banner CTA Button Visible', () => {

            cy.get('.button-div > .ant-btn').first().scrollIntoView().should('be.visible')

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

    
// context('All links from News Details Page', () => {
//     it('Verify all links from News Details Page', function () {
//         cy.get('a').each(link => {
//           if (link.prop('href'))
//             cy.request({
//               url: link.prop('href'),
//               failOnStatusCode: false
//             })
//           cy.log( link.prop('href'))
//         })
//     });

// })
 

})
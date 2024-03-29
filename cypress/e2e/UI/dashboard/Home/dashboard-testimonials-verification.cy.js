/// <reference types="cypress" />
import APIConstants from "../../../../support/constants/APIConstants";
import dashboardPage from "../../../../support/page-objects/DashboardPage";
let testimonialResponse, headerDetails, testimonialJson;
describe('Testimonials verification', () => {
    headerDetails=new Map();
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy 
            .visit('/')

            cy.request({
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                url:  Cypress.env('apiBaseUrl')+"wp-json/bwcms/"+APIConstants.TESTIMONIALS.TESTIMONIAL,
            }).then((response) => { 
                expect(response.status).to.eq(200);
                testimonialJson=response.body
                cy.writeFile('cypress/fixtures/footer.json', response.body);
            });
            cy.fixture('footer').then((contactData) => {
                testimonialResponse = contactData;
            });
    });

    it('testimonial contents', function () {
        dashboardPage.verifyTestiMonialsCarousel(testimonialResponse);
    });

});

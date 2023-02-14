import dashboardPage from '../object-repository/DashboardPage.json'

class DashboardPage {
    getPageMenu() {
        cy.get(dashboardPage.mainMenuList).should('be.visible')
        return cy.get(dashboardPage.mainMenuList);
    }

    getMenuSubHeadersList() {
        cy.get(dashboardPage.menuSubHeaders).should('be.visible')
        return cy.get(dashboardPage.menuSubHeaders);
    }

    getAntMenuList() {
        cy.get(dashboardPage.antMenuList).should('be.visible')
        return cy.get(dashboardPage.antMenuList);
    }

    async verifyMainHeaders(headers) {
        headers.forEach(async (values)=>{
            cy.log(values)
            await this.getPageMenu().contains(values.title)
        })
    }

    async verifySubHeaders(response) {
        cy.xpath('')
        cy.get('.k-master-row').find('td').each(($el,index,$list) => {
            const siteText=$el.text();
            cy.log(siteText);
            if (siteText.includes(equipmentName)) {
                cy.log(index);
                cy.waitForMilliSeconds(2000);
                cy.get('div.k-widget.k-grid > div.k-grid-container > div > div:nth-child(1) > table > tbody > tr > td:nth-child(10) > button > span.MuiButton-label').eq(index).then(()=> {
                    cy.waitForMilliSeconds(2000);
                    cy.get('div.k-widget.k-grid > div.k-grid-container > div > div:nth-child(1) > table > tbody > tr > td:nth-child(10) > button > span.MuiButton-label').eq(index).click({ force: true});
                    cy.waitForMilliSeconds(2000);
                    cy.get('.MuiList-root').should('be.visible');
                    cy.get('.MuiList-root > [tabindex="0"]').click();
                    cy.waitForMilliSeconds(5000);
                });
            } 
        });
    }

    async getMenuSubHeaders(response) {
        let map =new Map()
        for(let i=0;i<menusResponse.length;i++){
            cy.log(menusResponse[i].title)
            await map.set(menusResponse[i].title,menusResponse[i])
        }
        return map;
    }
}
export default new DashboardPage();
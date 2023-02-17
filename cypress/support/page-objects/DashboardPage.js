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
        this.verifySubHeadersLength(response)
        for(let i=0;i<response.length;i++){
            cy.get('div.header-arrow > ul > li > div').find('span > span').each(($el,index,$list) => {
            const Menu=$el.text();
            if(Menu.includes(response[i].title)){
                cy.get('div.header-arrow > ul > li > div').eq(index).trigger('mouseover',{force:true});
                cy.wait(5000)
                for(let j=0;j<response[i].children.length;j++){
                //    cy.get('.ant-col.css-dev-only-do-not-override-1q1zqvg').find('a > h3').contains(response[i].children[j].title)
                   expect(response[i].children[j].title).to.exist
                }
        }
        })
        }
    }
    //.ant-row.submenu-row.css-dev-only-do-not-override-1q1zqvg >div.ant-col.css-dev-only-do-not-override-1q1zqvg
    async verifySubHeaderv2(response) {
        let antIndex=12;
        for(let i=0;i<response.length;i++){
            cy.get('div.header-arrow > ul > li > div').find('span > span').each(($el,index,$list) => {
            const Menu=$el.text();
            if(Menu.includes(response[i].title)){
                cy.get('div.header-arrow > ul > li > div').eq(index).trigger('mouseover',{force:true});
                cy.wait(1000)
                for(let j=0;j<response[i].children.length;j++){
                    expect(response[i].children[j].title).to.exist
                }
        }
        })
        }
    }

    async verifySubHeadersLength(response){
        cy.get('div.header-arrow > ul > li > div').find('span > span').should('have.length', response.length)
    }

    async VerifyHeaderLength() {
        cy.get('')
    }

    async getMenuSubHeaders(response) {
        let map =new Map()
        for(let i=0;i<menusResponse.length;i++){
            cy.log(menusResponse[i].title)
            await map.set(menusResponse[i].title,menusResponse[i])
        }
        return map;
    }

    async verifyMainHeaderLinks(response) {
        for(let i=0;i<response.length;i++){
            cy.get('div.header-arrow > ul > li > div').find('span > span').each(($el,index,$list) => {
            const Menu=$el.text();
            if(Menu.includes(response[i].title)){
                cy.get('div.header-arrow > ul > li > div').eq(index).trigger('mouseover',{force:true});
                cy.wait(3000)
                cy.verifyAllLinks('businesswire.com');
        }
        })
        }
    }

        //.ant-row.submenu-row.css-dev-only-do-not-override-1q1zqvg >div.ant-col.css-dev-only-do-not-override-1q1zqvg
        async verifyAntMenu(response) {
            for(let i=0,antIndex=12;i<response.length;antIndex++,i++){
                cy.get('div.header-arrow > ul > li > div').find('span > span').each(($el,index,) => {
                const Menu=$el.text();
                if(Menu.includes(response[i].title)){
                    expect(response[i].title).to.exist
                    cy.get('div.header-arrow > ul > li > div').eq(index).trigger('mouseover',{force:true});
                    cy.wait(2000)
                    for(let j=0;j<response[i].children.length;j++){
                        cy.get('[id$="1-'+antIndex+'-popup"] div > div').find('a > h3').each(($el,index) => {
                        const antMenu=$el.text();
                        if(antMenu.includes(response[i].children[j].title)){
                            expect(response[i].children[j].title).to.exist
                            cy.log('Ant Menu Details for :' +response[i].children[j].title)
                            for(let k=0;k<response[i].children[j].children.length;k++){
                                cy.log('Ant Menus are : '+response[i].children[j].children[k].title)
                                cy.get('[id$="1-'+antIndex+'-popup"] div > div').eq(index).children().contains(response[i].children[j].children[k].title)
                                expect(response[i].children[j].children[k].title).to.exist
                                cy.wait(1000)
                            }
                        }
                       })
                    }
                }
            })
            }
        }

    async getAntMenuList(index) {
        cy.get('div > div:nth-child('+index+') > li > span').should('be.visible')
        return  cy.get('div > div:nth-child('+index+') > li > span');
    }

}
export default new DashboardPage();
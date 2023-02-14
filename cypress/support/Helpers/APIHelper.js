class APIHelper {

    async fetchObjectFromJSON(objectArray) {
        let map=new Map();
        for(let i=0; i<objectArray.length; i++) {
            cy.log(objectArray[i].title);
            map.set(objectArray[i].title, objectArray[i]);
        }
        for (let [key, value] of map) {
            cy.log(key + " = " + value.title);
        }
        return map;
    }

    async createMenuObject() {
        cy.request({
            method:  'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url:  Cypress.config('apiBaseUrl')+"wp-json/bwcms/menu?name=main-header-navigation",
        }).then(async (response) => { 
            expect(response.status).to.eq(200);
            await Cypress.env('menus',response)
        })
    }
}
export default new APIHelper();
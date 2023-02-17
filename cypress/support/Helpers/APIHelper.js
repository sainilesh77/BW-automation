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

    async getRandomString(length) {
         var result = '';  
         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
         var charactersLength = characters.length;
           for (var i = 0; i < length; i++) { 
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }    
        return result;
        }
}
export default new APIHelper();
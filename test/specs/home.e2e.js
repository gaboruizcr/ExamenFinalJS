const homePage = require('../pageobjects/home.page');
//const SecurePage = require('../pageobjects/secure.page');

let pregunta = "¿Buscas a alguien o algo en específico?";

describe('Terapeutica - HomePage', () => {

    beforeEach(async ()=> {
        await homePage.open();
    })

    it('should not navigate when clicking Buscar btn', async () => {
        await homePage.buscar();
        await expect(await homePage.getPaginaPrincipal).toBeDisplayed();
    });

    it('should change placeholder and text when clicking specialty btn', async () => {
        await homePage.specialty();
        await expect(await homePage.getFocus).toBeDisplayed();
        await expect(await homePage.getSearchBar(pregunta)).toBeDisplayed();
    });

    it('should search for a Professional name = Maria', async () => {
        await homePage.digitarBusqueda("Maria");
        await homePage.buscar();
        await expect(await homePage.getMariaName).toBeDisplayed();
    });
});



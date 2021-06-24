const searchPage = require('../pageobjects/search.page');

let field = 
{
fisica: 'phisical',
lenguaje: 'language',
ocupcional: 'ocupational'

}

describe('Terapeutica - SearchPage', () => {

    beforeEach(async ()=> {
        await searchPage.open();
    })
    
    it('Should show Phisical in the browser', async () => {
        await searchPage.clickFisica();
        await expect(browser).toHaveUrlContaining(field.fisica);
    });

    it('Should show Language in the browser', async () => {
        await searchPage.clickLenguaje();
        await expect(browser).toHaveUrlContaining(field.lenguaje);
    });

    it('Should show Ocupational in the browser', async () => {
        await searchPage.clickOcupacional();
        await expect(browser).toHaveUrlContaining(field.ocupcional);
    });

    it('Should not show results when "Wendy" is searched', async () => {
        await searchPage.digitarBusqueda('Wendy');
        await searchPage.clickBuscar();
        await expect(await searchPage.getNoHayResultados).toBeDisplayed();
    });

    it('Should show Maria when "Maria" is searched', async () => {
        await searchPage.digitarBusqueda('Maria');
        await searchPage.clickBuscar();
        await expect(await searchPage.getMariaName).toBeDisplayed();
    });

    it('Should remove map', async () => {
        await searchPage.clickIconMap();
        await expect(await searchPage.mapShowing).not.toBeDisplayed();
    });

    
});



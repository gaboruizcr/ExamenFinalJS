
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get btnBuscar () {return $('//input[@value="Buscar"]')}
    get btnLenguaje () {return $('//*[text()="Lenguaje"]')}
    get inputSearch () {return $('#search-input')}

    get getFocus()
    {
        return $('#custom-search-input .input-group')
    }

    get getPaginaPrincipal()
    {
        return $('//*[text()="¿Buscas un Terapeuta?"]')
    }

    get getMariaName () 
    {
        return $('//*[text()="Licda. María Miranda Vargas"]')
    }

    getSearchBar(text)
    {
        return $(`//input[@placeholder='${text}']`);
        //return $(`#custom-search-input ul li label`)
    }

    /**
     * metodo para darle click al boton busqueda
     */
    async buscar () {
        await (await this.btnBuscar).click();
    }

    /**
     * metodo para darle click a la especialidad
     */
    async specialty () {
        await (await this.btnLenguaje).click();
    }

    /**
     * metodo para digitar nombre en busqueda
     */
    async digitarBusqueda (nombre) {
        await (await this.inputSearch).addValue(nombre);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    async open () {
        return await browser.url('/#/');
    }
}

module.exports = new HomePage();

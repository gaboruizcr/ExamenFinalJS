/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage {
        /**
     * define selectors using getter methods
     */
         get btnFisica () {return $('//*[text()="Física"]')}
         get btnLenguaje () {return $('//*[text()="Lenguaje"]')}
         get btnOcupacional () {return $('//*[text()="Ocupacional"]')}
         get inputBusqueda () {return $('//input[@class="form-control padding-right"]')}
         get btnBuscar () {return $('//input[@value="Buscar"]')}
         get btnMap () {return $('.icon-map-1')}
     

         get getMariaName () 
         {
            return $('//*[text()="Licda. María Miranda Vargas"]')
         }

         get getNoHayResultados () 
         {
            return $('//*[text()="No hay resultados para mostrar."]')
         }

         get mapShowing () 
         {
             return $('.col-lg-5')
         }

         /**
          * metodo para darle click a la especialidad
          */
         async clickFisica () {
             await (await this.btnFisica).click();
         }
     
         /**
          * metodo para darle click a la especialidad
          */
         async clickLenguaje () {
            await (await this.btnLenguaje).click();
         }
     
         /**
          * metodo para darle click a la especialidad
          */
         async clickOcupacional () {
            await (await this.btnOcupacional).click();
         }

         /**
          * metodo para darle click al mapa
          */
          async clickIconMap () {
            await (await this.btnMap).click();
         }

         /**
         * metodo para digitar nombre en busqueda
         */
         async digitarBusqueda (nombre) {
            await (await this.inputBusqueda).addValue(nombre);
         }

         /**
          * metodo para darle click a el boton Buscar
          */
         async clickBuscar () {
            await (await this.btnBuscar).click();
         }

         /**
         * overwrite specifc options to adapt it to page object
         */     
         async open () {
             return await browser.url('/#/search');
         }

         async refreshPage () {
             return await browser.refresh();
         }
    }
     
     module.exports = new SearchPage();

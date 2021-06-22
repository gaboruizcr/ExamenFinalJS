/**
 * sub page containing specific selectors and methods for a specific page
 */
class SpecialistPage {
        /**
     * define selectors using getter methods
     */
         
       get btnPerfilCompleto () {return $('.btn_listing')}
     
       /**
       * metodo para darle click al boton Ver perfil completo
       */
       async clickPerfilCompleto () 
       {
          await (await this.btnPerfilCompleto).click();
       }

       /**
       * overwrite specifc options to adapt it to page object
       */
       async open () 
       {
          return await browser.url('/#/search');
       }
 
     }
     
     module.exports = new SpecialistPage();

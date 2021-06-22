const specialistPage = require('../pageobjects/specialist.page');

let constants = 
{
requestMethod: 'GET',
requestURL: 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6',
statusCode: 200

}

describe('Intercept URL', () => {

    before(async ()=> {
        await specialistPage.open();
    })

    it('Should validate professional profile', async () => {
        await browser.setupInterceptor();
        await specialistPage.clickPerfilCompleto();
        await browser.pause(1000);
        await browser.expectRequest(constants.requestMethod,constants.requestURL, constants.statusCode);
        await browser.assertExpectedRequestsOnly();
    });    
});



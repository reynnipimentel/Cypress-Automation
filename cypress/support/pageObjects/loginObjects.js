import BasicFuntions from "../util/commonFuntions";
const util = new BasicFuntions();

class LoginPage {
    constructor() {

        this.logo = "a#nav-bb-logo";
        this.accountList = "#nav-tools > [data-nav-role='signin']";
        this.btnSignInGeneral = '#nav-flyout-ya-signin  a span';
        this.inputEmail = '#ap_email';
        this.btnContinue = '#continue';
        this.inputPassword = '#ap_password';
        this.btnSignIn = '#signInSubmit';
    }

    async loginUser(){
        let elementExist = await util.checkElementNotExist(this.accountList)
        if(elementExist == false){
            await util.clickElement(this.logo)
        }
        await util.hoverElement(this.accountList, this.btnSignInGeneral)  
        await util.clickElement(this.btnSignInGeneral)
        util.typeValue(this.inputEmail, Cypress.env('usuario'))
        util.clickElement(this.btnContinue)
        util.typeValue(this.inputPassword, Cypress.env('contrasena'))
        util.clickElement(this.btnSignIn)
    }
}

module.exports=LoginPage;

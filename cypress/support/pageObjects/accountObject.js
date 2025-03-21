import BasicFuntions from "../util/commonFuntions";
import * as faker from "../util/fakeData";
const util = new BasicFuntions();

class Configuration {
    constructor() {
        //Selectores para el cambio de nombre
        this.accountList = "#nav-tools > [data-nav-role='signin']";
        this.Login_Security = '#a-page div  ul:nth-child(3)  li:nth-child(2)  span  span  a > div';
        this.btnEditName = '#NAME_BUTTON';
        this.inputName = '#ap_customer_name';
        this.saveChanges = '#cnep_1C_submit_button';
        this.labelAlertName = '#SUCCESS_MESSAGES .a-alert-content';

        // Selectores para agregar una direccion  de entrega de la cuenta
        this.yourAddress = ' #a-page > div.a-container > div > ul:nth-child(4) > li:nth-child(1) > span';
        this.addDirectiobtn = '#ya-myab-address-add-link > div';
        this.countrySelect = '#address-ui-widgets-countryCode'; 
        this.countrySelectOption = '#a-popover-4 > div > div > ul > li:nth-child(191)';
        this.fullName = '#address-ui-widgets-enterAddressFullName';
        this.direction1 = '#address-ui-widgets-enterAddressLine1';
        this.city = '#address-ui-widgets-enterAddressCity';
        this.state = '#address-ui-widgets-enterAddressStateOrRegion';
        this.postalCode = '#address-ui-widgets-enterAddressPostalCode';
        this.number = '#address-ui-widgets-enterAddressPhoneNumber';
        this.btnAdd =' #address-ui-widgets-form-submit-button > span';
        this.omit = '#skip-for-now > div > label > i';
        this.continue = '#kyc-xborder-continue-button > span';
        this.labelAlertAddress = '#yaab-alert-box h4';

        //Selectores para editar una direccion de entrega de la cuenta
        this.btnEditAddress = '#ya-myab-address-edit-btn-0';
        this.btnSaveChanges = '#a-autoid-0 > span';
        this.labelAlertEdition = '#yaab-alert-box > div';
    }

    changeName(){
        util.clickElement(this.accountList)
        util.clickElement(this.Login_Security)
        util.clickElement(this.btnEditName)
        util.typeValue(this.inputName, faker.infoUser.name + " " + faker.infoUser.lastName)
        util.clickElement(this.saveChanges)
    }

    addAddress(){
        util.clickElement(this.accountList) 
        util.clickElement(this.yourAddress)
        util.clickElement(this.addDirectiobtn)
        util.clickElement(this.countrySelect)
        util.clickElement(this.countrySelectOption)
        cy.wait(1000)
        util.typeValue(this.fullName, faker.infoUser.name + " " + faker.infoUser.lastName)
        util.typeValue(this.direction1, faker.address.street)
        util.typeValue(this.city, faker.address.city)
        util.typeValue(this.state, faker.address.state)
        util.typeValue(this.postalCode, faker.address.zipCode)
        util.typeValue(this.number, faker.infoUser.phone)
        util.clickElement(this.btnAdd)
        util.clickElement(this.omit)
        util.clickElement(this.continue)
    }

    editInformation(){
        util.clickElement(this.accountList) 
        util.clickElement(this.yourAddress)
        util.clickElement(this.btnEditAddress)
        util.typeValue(this.direction1, faker.address.street)
        util.typeValue(this.number, faker.infoUser.phone)
        util.clickElement(this.btnSaveChanges)
        util.clickElement(this.omit)
        util.clickElement(this.continue)

    }
}

module.exports=Configuration
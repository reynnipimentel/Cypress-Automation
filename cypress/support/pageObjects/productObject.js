import BasicFuntions from "../util/commonFuntions";
const util = new BasicFuntions();
const productName ="samsung galaxy s24";

class ProductPage {
    constructor() {

        this.inputSearch = "#nav-fill-search #twotabsearchtextbox";
        this.iconSearch = "#nav-search-bar-form > div.nav-right  #nav-search-submit-button";
        this.selectionProduct = '[data-cel-widget="search_result_1"] h2';
        this.productColor = '#color_name_0:nth-child(1)';
        this.productGiga = '#size_name_1';
        this.btnCart = '[ class="a-button-inner"] > #add-to-cart-button';
        this.labelAlertToCart = '#NATC_SMART_WAGON_CONF_MSG_SUCCESS > h1';
    }

    addProductToCart(){
        util.clickElement(this.inputSearch) 
        util.typeValue(this.inputSearch, productName) 
        util.clickElement(this.iconSearch)
        util.clickElement(this.selectionProduct)
        util.clickElement(this.productColor)
        util.clickElement(this.productGiga)
        cy.wait(2000)
        util.clickElement(this.btnCart)
    }
}

module.exports=ProductPage;

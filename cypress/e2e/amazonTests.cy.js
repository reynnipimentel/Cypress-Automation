const LoginPage = require("../support/pageObjects/loginObjects");
const Configuration = require("../support/pageObjects/accountObject")
const ProductPage = require("../support/pageObjects/productObject")

describe('template spec', () => {
  let login = new LoginPage();
  let config = new Configuration();
  let product = new ProductPage();
  
  beforeEach(()=>{
    cy.visit('/');
    login.loginUser();
  })

  it('Cambiar nombre del propietario de la cuenta', () => {
    config.changeName();
    cy.get(config.labelAlertName).should('have.text','Nombre actualizado. ')
  })

  it('Agregar la dirección de entrega de la cuenta', () => {
    config.addAddress();
    cy.get(config.labelAlertAddress).should('have.text','Dirección guardada')
  })
  it('Editar la dirección de entrega de la cuenta', () => {
    config.editInformation();
    cy.get(config.labelAlertEdition).should('have.text','Dirección guardada')
  })
  it('Agregar un producto configurado al carrito', () => {
    product.addProductToCart();
    cy.get(product.labelAlertToCart).should('contain','Agregado al carrito')
  })
})
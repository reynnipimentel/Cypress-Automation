const { defineConfig } = require('cypress')
const dotenv=require("dotenv").config()

module.exports = defineConfig({

  pageLoadTimeout: 60000,
  e2e: {
    baseUrl: process.env.URL,
    env:{
      usuario: process.env.USUARIO,
      contrasena: process.env.CONTRASENA,
      nombre: process.env.NOMBRE
    },
    failOnStatusCode: true
  },
})
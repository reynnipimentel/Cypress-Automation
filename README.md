# Cypress Automation

## Configuracion de ambiente

### Dependencias

1. Deberias tener instalado lo siguiente:
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/package/npm)

2. Instala dependencias

```bash
npm install
```
La lista de dependencias es:

- [cypress](https://www.npmjs.com/package/cypress)
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Correr pruebas

**Usando UI de Cypress**

Para correr los scripts de la pagina web de Amazon, ejecuta el comando

```bash
npx cypress open
```

Cuando la UI aparezca elige la opcion "E2E" y luego el browser de tu preferencia.
Cuando aparezca la interfaz en localhost en el browser seleccionado, haz click en el archivo "amazonTests.js"

## Convenciones de Nomenclatura

- Usar `lowerCameCase` para nombres de variables, propiedades, objetos, archivos y carpetas.
- Usar prefijos como `is`, `are`, `has` para variables booleanas.
- Usar nombres auto-explicativos para variables. Por ejemplo: `let productName`.
- Siempre empieza una funcion con el verbo y la entidad afectada por el. Por ejemplo `addProductToCart`.

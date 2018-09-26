const swaggerJSDoc = require('swagger-jsdoc')

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Ray Users API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'https://rayresfulapi.azurewebsites.net',
  basePath: '/',
};
// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js','routes.js'],// pass all in array
  };
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


module.exports = swaggerSpec;

const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger/swagger.config');

const swagger_controller = require('../controllers/swagger.controller');

router.get('/swagger.json', swagger_controller.swagger);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;

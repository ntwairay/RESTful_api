const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger/swagger.config');
const swaggerv1Spec = require('../swagger/v1/swagger.json');

const swagger_controller = require('../controllers/swagger.controller');

router.get('/swagger.json', swagger_controller.swagger);

router.use('/v1/api', swaggerUi.serve, swaggerUi.setup(swaggerv1Spec));

module.exports = router;

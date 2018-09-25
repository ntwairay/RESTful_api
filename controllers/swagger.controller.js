const swaggerSpec = require('../swagger/swagger.config');

exports.swagger = function(req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(swaggerSpec);
};

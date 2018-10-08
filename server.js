const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.routes'); // Imports routes for users
const swagger = require('./routes/swagger.routes'); // Imports routes for swagger
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/swagger', swagger);

var port = process.env.PORT || 1234;

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log(`API is listening at ${port}`)

})

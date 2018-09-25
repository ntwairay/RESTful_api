const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.routes'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

let port = 1234;

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

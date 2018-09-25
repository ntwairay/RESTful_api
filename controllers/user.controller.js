const fs = require("fs");

var mockDBPath = "./mockdb/users.json"

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

exports.user_delete = function (req, res) {
  fs.readFile( mockDBPath, 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + req.params.id];
      console.log( data );
      res.end( JSON.stringify(data));
  });
};

exports.user_create = function (req, res) {
  fs.readFile( mockDBPath, 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
  });
};

exports.user_getAll = function (req, res) {
  fs.readFile( mockDBPath, 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
  });
};

exports.user_find = function (req, res) {
  fs.readFile(mockDBPath, 'utf8', function (err, data) {
     var users = JSON.parse( data );
     var user = users["user" + req.params.id]
     console.log( user );
     res.end( JSON.stringify(user));
  });
};

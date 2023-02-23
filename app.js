var express = require('express');
var app = express();

app.get('/users', function (req, res) {
   let users = [{id: 1, 'name': 'José'}, {id: 2, 'name': 'Maria'}, {id: 3, 'name': 'João'}]; 
   res.json(users);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s",  host, port)
})
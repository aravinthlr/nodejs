const http = require("http");
const express = require("express");
const _ = require("lodash");
const empJSON = require("./emp.js");
const app = express();

//routing done through express js
app.get("/", function(req,res) {
    res.send("hai");
}).get("/users/:id",function(req,res){
    var obj = _.find(empJSON, {empId:parseInt(req["params"]["id"])});
    res.send(obj ? obj : 'Invalid Id');
});
app.listen(8082);


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: application/json
   response.writeHead(200, {'Content-Type': 'application/json'});
   //http.get("http://127.0.0.1/sam.json");
   
   // Send the response body as "Hello World"
   response.end(JSON.stringify(empJSON));
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
console.log('Server running at http://127.0.0.1:8082/');
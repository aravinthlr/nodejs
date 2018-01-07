var http = require("http");
var express = require("express");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: application/json
   response.writeHead(200, {'Content-Type': 'application/json'});
   //http.get("http://127.0.0.1/sam.json");
   var x=JSON.stringify({
    "name":"Aravinth",
    "age":24,
    "locality":"Chennai"
    });
   
   // Send the response body as "Hello World"
   response.end(x);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
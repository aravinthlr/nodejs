const http = require("http");
const express = require("express");
const empJSON = require("./emp.js");
console.log(empJSON);
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
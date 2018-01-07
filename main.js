const http = require("http");
const express = require("express");
const _ = require("lodash");
const fileSystem = require("file-system");
var empJSON = [];
fileSystem.readFile(__dirname+'/emp.JSON',function(err,data){
    empJSON = JSON.parse(data);   
});
var app8082 = new express();


//8082 - Routing
//routing done through express js
app8082.get("/", function(req,res) {
    res.send("hai");
}).get("/users/:id",function(req,res){
    var obj = _.find(empJSON, {empId:parseInt(req["params"]["id"])});
    res.send(obj ? obj : 'Invalid Id');
});
app8082.listen(8082);
console.log('Server running at http://127.0.0.1:8082/');
//8081-loading sample json
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

//8083-reading a html file
var app8083 = new express();

const bodyParser = require("body-parser");
app8083.use(bodyParser.urlencoded({extended: true}));
app8083.use(bodyParser.json());
app8083.get("/",function(req,res) {
    fileSystem.readFile(__dirname+'/index.html',function(err,data) {
        console.log(data);
        res.write(data ? data : err);
        res.end();
    });
   // res.send("loaded");
});
app8083.post("/users/newEmp", function(req,res) {
    empJSON.push({
        "name": req.body.name,
        "age": req.body.age,
        "locality": req.body.locality
    });
    fileSystem.writeFile(__dirname+"/emp.JSON",empJSON,function (err,data) {
        console.log(err);
    })
    res.send("<h1>successfully saved</h1>");
});
app8083.listen(8083);

console.log('server running at http://127.0.0.1:8083/');
var dataconn = require('./Data/DataConnection');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var config = require('./Config');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

// CORS Middleware node.js package for connect express
app.use(function (req, res, next) {
    var menthods = "GET, POST, PUT, DELETE";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", menthods);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization");
    if (!menthods.includes(req.method.toUpperCase())) {
        return res.status(200).json({});
    };
    next();
});


// Service checking method
app.get("/api/sample", function (req, res) {
    res.status(200).json({ Success: true, Message: "Service Running", Data: null });
});

// Connection checking method
app.get("/api/CheckConnection", function (req, res) {
    dataconn.CheckConnection(res);
});

//Table creation Method
app.get("/api/CreateTable", function (reg, res) {
    dataconn.CreateTable(res);
});

var loginService = require('./Service/Login/LoginService')();
app.use("/api", loginService);

var registerService = require('./Service/Register/RegisterService')();
app.use("/api", registerService);

var CustomerinfoService = require('./Service/CustomerInformation/CustomerInfoService')();
app.use("/api", CustomerinfoService);

var CRMService = require('./Service/CRM/CRM')();
app.use("/api", CRMService);

var server = app.listen(process.env.port || config.service_port, function () {
    var host = server.address().address;
    var port = server.address().port;
    var datetime = new Date();
    var message = "Server :- " + host + " running on Port : - " + port + " Started at :- " + datetime;
    console.log(message);
});
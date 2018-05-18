
const path = require("path");
const express = require("express");
const router = express.Router();

module.exports = function(app) {
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname,  "../public/survey.html"));
    });
}
// directing routes to html or user input pages









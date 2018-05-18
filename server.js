const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.use(express.static("public"));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
console.log ("App is listening on PORT: " + PORT);

});
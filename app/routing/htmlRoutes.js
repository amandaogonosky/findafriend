
const path = require ("path");
// directing routes to html or user input pages
module.exports = function(app){
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname + "survey.html"));
        
        app.use(function(req,res){
            res.sendFile(path.join(__dirname + "home.html"));

        })
    });

}




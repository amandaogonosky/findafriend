
// const path = require ("path");
const friendsData = require ('../data/friends.js');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// go to this url, get the friends data for me
module.exports = function (app){
app.get('/api/friends', function (req,res){
return res.json(friendsData);

});

// Post  friends
app.post("/api/friends", function (req, res) {

    userInfoData = req.body;
    console.log(userInfoData);

    let totalDifference = [];

    //push score dif into totalDifference
    function getSum(total, num) {
        return total + num;
    }
    //lfriends for loop
    for (i = 0; i < friends.length; i++) {
        // users scores info
        const yourScores = userInfoData.scores;
        //grabs the current friends scores as an array
        const theirScores = friends[i].scores;
        //stores the difference of user plus friend scores in an array
         let scoreDifArray = yourScores.diff(theirScores); 
         //makes items in the array into an absolute value
         for (x = 0; x < scoreDifArray.length; x++) {
            scoreDifArray[x] = Math.abs(scoreDifArray[x]); 
         }

         let scoreDif = scoreDif.reduce(getSum);
        totalDifference.push(scoreDif);

        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        var DifIsLeast = Array.min(totalDifference);
    };
    
});

}
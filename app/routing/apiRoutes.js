
const path = require('path');
const friends = require ('./../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        console.log("/api/friends hit");
      res.json(friends);
    });
    app.post('/api/friends', function(req, res){
        const newFriend = req.body;
        console.log("survey.html", newFriend);
            console.log("saving user info...");
        const bestMatch = Algorithm(newFriend);
        console.log(Algorithm(newFriend));
        res.json(bestMatch);
    
    });
    }

    function Algorithm(u) {
        let you = u.scores;
        let theirScores = [];
        
        let difference = [];
        let totalDifference = [];


        friends.forEach(function(friend){
            theirScores.push(friend.scores);
        })
        console.log(theirScores + "theirscores");
// Loop through each array in friendlyScores, and subtract
        // the user's array of values from that individual array
        // and push it to the difference array
       theirScores.forEach(function(numbah){
            getDifference(you, numbah);
        })
        console.log(difference, "Diff");
// create a new array that contains the value of each aray's total sum
        // in difference, creating a single value, "total difference"
        // an indicator of how different the user is from their potential match
        for (let j = 0; j < difference.length; j++){
        x = difference[j].reduce((total, amount) => parseInt(total) + parseInt(amount));
        totalDifference.push(x);
        }
    console.log("Total diff: " + totalDifference);

// call indexofMin to determine the index of the smallest value in the total difference array
        //which by the merit of the other looping functions above,
        // will correlate with the index of the friend whose scores
        // when subtracted from the user's scores, returns the lowest value
    let minIndex = indexOfMin(totalDifference);
    return friends[minIndex];



// calculation functions called in the above functions ^
    // find the index of the lowest value in the array
function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    return minIndex;
};
    // calculate the difference between two arrays
function getDifference(a, b) {
    var x = a.map(function(item, index) {
        return Math.abs(parseInt(item) - parseInt(b[index]));   
})
difference.push(x);
}}



// const path = require ("path");
// const friendsData = require ('../data/friends.js');
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();

// // go to this url, get the friends data for me
// module.exports = function (app){
// app.get('/api/friends', function (req,res){
// return res.json(friendsData);

// });

// // Post  friends
// app.post("/api/friends", function (req, res) {

//     userInfoData = req.body;
//     console.log(userInfoData);

//     let totalDifference = [];

//     //push score dif into totalDifference
//     function getSum(total, num) {
//         return total + num;
//     }
//     //lfriends for loop
//     for (i = 0; i < friends.length; i++) {
//         // users scores info
//         const yourScores = userInfoData.scores;
//         //grabs the current friends scores as an array
//         const theirScores = friends[i].scores;
//         //stores the difference of user plus friend scores in an array
//          let scoreDifArray = yourScores.diff(theirScores); 
//          //makes items in the array into an absolute value
//          for (x = 0; x < scoreDifArray.length; x++) {
//             scoreDifArray[x] = Math.abs(scoreDifArray[x]); 
//          }

//          let scoreDif = scoreDif.reduce(getSum);
//         totalDifference.push(scoreDif);

//         Array.min = function( array ){
//             return Math.min.apply( Math, array );
//         };

//         var DifIsLeast = Array.min(totalDifference);
//     };
    
// });

// }}
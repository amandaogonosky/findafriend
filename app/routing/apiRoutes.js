
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
// Loop through each array in your friend scores, 
       theirScores.forEach(function(numbah){
            getDifference(you, numbah);
        })
        console.log(difference, "Diff");
// 
        for (let j = 0; j < difference.length; j++){
        x = difference[j].reduce((total, amount) => parseInt(total) + parseInt(amount));
        totalDifference.push(x);
        }
    console.log("Total diff: " + totalDifference);

// 
    let minIndex = indexOfMin(totalDifference);
    return friends[minIndex];



// 
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




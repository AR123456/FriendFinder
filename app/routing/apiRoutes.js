// 4. Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
//required
const friendArray = require("../data/friends.js");
//exports function 
module.exports = function(app){
   //GET route for friends array
   app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });
  //POST Route for survey comparison 
  app.post("/api/friends", function (req, res) {
    var newAnswers = req.body.answers;
    // console.log('newAnswers' + newAnswers);
      //the smaller the difference value is, the better the match
    var difference = [];
    //index of the arrays that corresponds to the lowest difference
    var bestMatch = 0;
    //loops through current friends array
    for (var i=0; i<friendArray.length; i++) {
      var currentDifference = 0;
      //loops through each answer for each comparison
      for (var j=0; j<friendArray[i].answers.length; j++) {
          //math.abs insures + number 
      currentDifference += Math.abs(parseInt(friendArray[i].answers[j]) - parseInt(newAnswers[j]));
      }
      difference.push(currentDifference);
    }
    for (var i=1; i<difference.length; i++) {
      if (difference[i] < difference[bestMatch]) {
        bestMatch = i;
      }
    }
    res.json(friendArray[bestMatch]);
    friendArray.push(req.body);
  });
}

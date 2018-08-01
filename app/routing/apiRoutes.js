const friendArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    var newAnswers = req.body.answers;

    var difference = [];

    var bestMatch = 0;

    for (var i = 0; i < friendArray.length; i++) {
      var currentDifference = 0;

      for (var j = 0; j < friendArray[i].answers.length; j++) {
        currentDifference += Math.abs(
          parseInt(friendArray[i].answers[j]) - parseInt(newAnswers[j])
        );
      }
      difference.push(currentDifference);
    }
    for (var i = 1; i < difference.length; i++) {
      if (difference[i] < difference[bestMatch]) {
        bestMatch = i;
      }
    }
    res.json(friendArray[bestMatch]);
    friendArray.push(req.body);
  });
};

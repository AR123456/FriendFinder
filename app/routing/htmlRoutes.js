// 3. Your `htmlRoutes.js` file should include two routes:
//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 
 
//need path package 
//https://nodejs.org/docs/latest/api/path.html
const path = require('path');
//routes - moduel .exports so that server can get and use
module.exports = function(app){
    //tell express to send survey.html when user is on /survey
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
       //tell express to send home.html when user is on /home
       app.get("/", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    
}


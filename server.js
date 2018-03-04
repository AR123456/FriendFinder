//Packages 
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path");

// Server set up 
const PORT = process.env.PORT || 8080;
const app =express();

//Routes 

//Express body-parser middleware code
//https://www.npmjs.com/package/body-parser
 

// // create application/json parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//Server Routing 
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// start the server
app.listen(PORT, function () {
    console.log("listening on PORT" + PORT);
  });

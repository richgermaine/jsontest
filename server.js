var express = require("express");
var myParser = require("body-parser");
var app = express();

  app.use(myParser.urlencoded({extended : true}));
  app.post("/addUser", function(request, response) {
      console.log(request.body); // this line allways produce {}
      response.send("Message received.");
      response.end();
});
  app.get("/test", function(request, response) {
	  console.log(request.body);
	  response.send("testing");
  });

app.listen(8080);
const express = require("express");
const app = express();
var shuffle = require('shuffle-array');
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    
    //TODO: shuffle the array
    let q3Choices = ["Maine", "Nevada", "Rhode Island", "Florida"];
    
    //shuffles question 4 answers
    shuffle(q3Choices);
    
    res.render("index", {"q3Choices":q3Choices});
    
} );


app.get("/gradeQuiz", function(req,res){
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5, f6, f7, f8;
    let message;
    f1 = f2 = f3 = f4 = f5 = f6 = f7 = f8 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 12.5;
        f1 = "Right!";
    }
    if (req.query.q2 == "mo") {
        score += 12.5;
        f2 = "Right!";
    }
    if (req.query.q3a=="false" && req.query.q3b=="false"
     && req.query.q3c=="true" && req.query.q3d=="true" ) {
        score += 12.5;
        f3 = "Right!";
    }
    if (req.query.q4 == "Rhode Island") {
        score += 12.5;
        f4 = "Right!";
    }
   if (req.query.q5 == "seal2") {
        score += 12.5;
        f5 = "Right!";
    }    
    if (req.query.q6 == "cali") {
        score += 12.5;
        f6 = "Right!";
    }
    if (req.query.q7 == "nm") {
        score += 12.5;
        f7 = "Right!";
    }
    if (req.query.q8a=="true" && req.query.q8b=="false"
     && req.query.q8c=="false" && req.query.q8d=="true" ) {
        score += 12.5;
        f8 = "Right!";
    }
    
    if (score > 80 ) {
        message = "Congratulations"
    }
    res.send( {"score": score, "message":message, "feedback":[{"fback":f1}, {"fback":f2}, {"fback":f3}, {"fback":f4}, {"fback":f5}, {"fback":f6}, {"fback":f7}, {"fback":f8}]});
    
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})
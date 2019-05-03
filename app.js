var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search.ejs");
})

app.get("/result",function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=d610010f";
    request(url,function(error,respone,body){
        if(!error && respone.statusCode == 200){
            parsedData = JSON.parse(body);
            res.render("result",{parsedData});
        }
        else{
            console.log(error);
        }
    });
});

app.listen(3000,function(){
    console.log("Started");
});
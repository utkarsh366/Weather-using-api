const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res)
{

//enter your key
const url ="https://api.openweathermap.org/data/2.5/weather?q=london&appid=a91e3b552515aa1b075f69294bf124b8&unit=metric";
   

https.get(url, function(response){
    console.log(response);
})
   res.send("server is up and running"); 
});






app.listen(3000, function(){
    console.log("server is running on port 3000.");
})
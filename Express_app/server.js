var express =require('express');
var path=require('path');
var app=express();
var staticFolder=express.static(path.join(__dirname,"public"));

app.use(staticFolder);

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/index.html");

})
app.listen(9000);
console.log("Express web application is listening on port n0 9000");


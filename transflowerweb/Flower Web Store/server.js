const express = require('express');
const path = require('path')
const app = express();
const staticMiddleware = express.static(path.join(__dirname, "public"));

app.use(staticMiddleware);
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get("/", (require, response)=>{
    response.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/", (require, response)=>{
    response.sendFile(path.join(__dirname + '/about.html'));
});

app.post("/login",(request,response)=>{
    console.log(request.body)
    const user = request.body;
    if(user.email=="ak@gmail.com" && 
        user.password=="ak"){
            console.log("Valid user")
            response.send("Valid user")
        }
        else{
            console.log("Invalid user")
            response.send("Invalid xuser")
        }
    console.log("login form is posted by brower is received at server");
});

app.post("/register",(request,response)=>{
    console.log(request.body)
    console.log("reisteration form is posted by brower is received at server");
});

app.listen(8081);
console.log("Server Started Successeful on 8081");
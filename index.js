//引入
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const signToken = require("./utils/jwt.js").signToken;

//註冊 body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req,res,next){
    console.log(new Date());
    next();
});

app.get("/",function(req,res){
    res.send("Hello World!!!");
});

app.get("/login", function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/login.html")) //login
});

app.post("/login", function(req,res){
    // let{username, password} = req.body;
    let username = req.body.username;
    let password = req.body.password;

    if(username === "123" && password === "123"){
        signToken(
            {username : "123"},
            function(err, token){
                res.json({
                    login : true,
                    token : token

            }
        )
        
        });

    } else {
        res.json({
            login: false
        });
    }
})
app.listen(3000,function(){
    console.log("server start!");
})
var express = require('express');
var app = express();
var temp = [];
app.set("view engine","ejs");
app.set('views');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/signin",function(req,res) {
    res.render("signin",{"title":"登录"});
});

app.get("/signup",function(req,res) {
    res.render("signup",{"title":"注册"});
});

app.post("/signin",function(req,res) {
    var ary = req.body;
    var flag = temp.find(function(item){
        return item.userage == ary.userage && item.username == ary.username
    })
    if(flag){
        res.redirect('/welcome');
    }else{
        res.redirect('/signup');
    }
});

app.post("/signup",function(req,res) {
    temp.push(req.body);
    res.redirect('/signin');
});

app.get("/welcome",function(req,res) {
    res.render("welcome",{"title":"主页"});
});

app.all('*',function(req,res){
    res.redirect('/welcome');
})
app.listen(2255);


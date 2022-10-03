const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
  });
app.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
});

app.get('/article/:read_more',function(req,res){
    res.sendFile(path.join(__dirname+'/article/read_more.html'));
});

app.get('/registration',function(req,res){
    res.sendFile(path.join(__dirname+'/registration.html'));
});

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
  });

  app.use(function(req,res){
    res.status(404).send("Page not found");
  });

app.listen(process.env.port || 3000);

console.log(__dirname);
console.log('Running at Port 3000');
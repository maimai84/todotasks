const express = require('express')
var data= require("./data/db.js")
const app = express()
var path=require('path')
var mongoose = require('mongoose');

app.get('/', function (req, res) {
    res.sendFile('app.html',{root:path.join(__dirname,'./cleint/templet')})
   // res.send("hlowwwwwwwwwwwww")
})

app.get('/todo', function (req, res) {
    res.send(task)
   // res.send("hlowwwwwwwwwwwww")
})

app.post("/", (req, res) => {
  var myData = new todo(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


mongoURI = 'mongodb://localhost/datab';
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});
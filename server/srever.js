const express = require('express')

const app = express()
var path=require('path')
var mongoose = require('mongoose');

app.get('/', function (req, res) {
    res.sendFile('app.html',{root:path.join(__dirname,'./cleint/templet')})
  // res.send("hlowwwwwwwwwwwww")
})

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
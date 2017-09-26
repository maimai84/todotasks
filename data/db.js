var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoURI = 'mongodb://localhost/datab';
mongoose.connect(mongoURI);
 var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function () {
   console.log('Mongodb connection open');
});


var todo = new Schema({
  id:{
    type:Number,
   index:{uniq:true}
  },
  task:String
  
});
var temp=mongoose.model("temp",todo);
module.exports=temp;
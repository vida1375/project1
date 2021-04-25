const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
      type : String ,
      required : true
    },
    title :  {
      type : String ,
      required : true
    },
    assignedBooks:[
      {
      name:{
      type: String
      } 
      } 
      ],
  });

  const User = mongoose.model('User', userSchema);
 
  module.exports = User
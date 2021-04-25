const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    name : {
      type : String ,
      required : true
    },
    description :  {
      type : String ,
      required : true
    },
    author:  {
      type : Number,
      required : true
    },
    numberofbooksinlibrary:  {
      type : Number ,
      required : true 
    },

  });

  const Book = mongoose.model('Book', bookSchema);
 
  module.exports = Book
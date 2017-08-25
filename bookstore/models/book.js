var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
title:{
      type: String,
      required: true
    },
genre:{
      type: String,
      required: true
},
description:{
      type: String,
      required: true
},
author:{
      type: String,
      required: true
},
publisher:{
      type: String,
      required: true
},
pages:{
      type: String,
      required: true
},
image_url:{
      type: String,
      required: true
},
buy_url:{
      type: String,
      required: true
},
create_date:{
      type: Date,
      default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book',bookSchema);

//get  Books
module.exports.getBooks = function(callback,limit){
  Book.find(callback).limit(limit);
}

//get  BookById
module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

//post  Book
module.exports.addBooks = function(book, callback){
  Book.create(book, callback);
}

//update  Book
module.exports.updateBooks = function(id,book,option,callback){
var query = {_id: id};
var update = {
  title: book.title,
  genre: book.genre,
  description: book.description,
  author: book.author,
  publisher: book.publisher,
  pages: book.pages,
  image_url: book.image_url,
  buy_url: book.buy_url
}
  Book.findOneAndUpdate(query,update,option,callback);
}

//delete book
module.exports.deleteBooks = function(id,callback){
  var query = {_id: id};
  Book.remove(query,callback);
}

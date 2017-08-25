var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
Genre = require('./models/genre');
Book = require('./models/book');
//Connet mongoDB
mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true });
var db = mongoose.connection;

app.get('/', function(req,res){
res.send('...Please use /api/book or /api other...');
});

// get allgenre
app.get('/api/genres',function(req,res) {
  Genre.getGenres(function(err,genres) {
      if(err){
          throw err;
      }
      res.json(genres);
  });
});

// post genre
app.post('/api/genres',function(req,res) {
  var genre = req.body;
  Genre.addGenres(genre,function(err,genre) {
      if(err){
          throw err;
      }
      res.json(genre);
      console.log('Insert Complate!!!');
  });
});

// put genre
app.put('/api/genres/:_id',function(req,res) {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenres(id,genre,{},function(err,genre) {
      if(err){
          throw err;
      }
      res.json(genre);
      console.log('Update Complate!!!');
  });
});

// delete genre
app.delete('/api/genres/:_id',function(req,res) {
  var id = req.params._id;
  Genre.deleteGenres(id,function(err,genre) {
      if(err){
          throw err;
      }
      res.json(genre);
      console.log('Delete Complate!!!');
  });
});

// get allbooks
app.get('/api/books',function(req,res) {
  Book.getBooks(function(err,books) {
      if(err){
          throw err;
      }
      res.json(books);
  });
});

// get book by id
app.get('/api/books/:_id',function(req,res) {
  Book.getBookById(req.params._id,function(err,books) {
      if(err){
          throw err;
      }
      res.json(books);
  });
});

// post books
app.post('/api/books', function(req,res) {
  var book = req.body;
  Book.addBooks(book, function(err,book) {
      if(err){
          throw err;
      }
      res.json(book);
      console.log('Table books Insert Complete!!!');
  });
});

// put book
app.put('/api/books/:_id',function(req,res) {
  var id = req.params._id;
  var book = req.body;
  Book.updateBooks(id,book,{},function(err,book) {
      if(err){
          throw err;
      }
      res.json(book);
      console.log('Update Complate!!!');
  });
});

// delete genre
app.delete('/api/books/:_id',function(req,res) {
  var id = req.params._id;
  Book.deleteBooks(id,function(err,book) {
      if(err){
          throw err;
      }
      res.json(book);
      console.log('Delete Complate!!!');
  });
});

app.listen(3838);
console.log('Running on port 3838...');

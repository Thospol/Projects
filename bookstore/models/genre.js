var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
name:{
      type: String,
      required: true
    },
    create_date:{
      type: Date,
      default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

//get  Genre
module.exports.getGenres = function(callback,limit){
  Genre.find(callback).limit(limit);
}

//post  Genre
module.exports.addGenres = function(genre,callback){
  Genre.create(genre,callback);
}

//update  Genre
module.exports.updateGenres = function(id,genre,option,callback){
var query = {_id: id};
var update = {
  name: genre.name
}
  Genre.findOneAndUpdate(query,update,option,callback);
}
//delete genre
module.exports.deleteGenres = function(id,callback){
  var query = {_id: id};
  Genre.remove(query,callback);
}

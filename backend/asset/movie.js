const {
    Int32
} = require('bson');

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    actors: [String],
    countries: [String],
    directors: [String],
    genre: [String],
    imdb_url: String,
    img_url: String,
    languages: [String],
    metascore: String,
    rating: String,
    runtime: String,
    tagline: String,
    title: String,
    users_rating: Double,
    votes: Int32,
    year: Int32,
});

module.exports = mongoose.model('Movie', MovieSchema);
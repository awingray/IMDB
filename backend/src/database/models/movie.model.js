const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * How movies are stored in mongoose database.
 */
const MovieSchema = new Schema({
    title: String,
    rating: String,
    year: Number,
    users_rating: Number,
    votes: String,
    metascore: String,
    img_url: String,
    countries: Array,
    languages: Array,
    actors: String,
    genre: Array,
    tagline: String,
    description: String,
    directors: Array,
    runtime: String,
    imdb_url: String,
}).index({title: 1, year: 2, users_rating: 3});

module.exports = mongoose.model('Movie', MovieSchema);
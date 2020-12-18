  const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    
});

module.exports = mongoose.model('Movie', MovieSchema);
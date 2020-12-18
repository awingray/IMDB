let mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    "name": {
        type: String,
        unique: true
    }
});

const MovieSchema = new mongoose.Schema({
    actors: [actorSchema],
    title: String,
    url: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
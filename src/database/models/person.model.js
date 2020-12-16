const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('../movie/model');

const PersonSchema = new Schema({
    name: {
        type: String,
        unique: true,
        uppercase: true
    },
    gender: String,
    dob: Date,
    bio: String,
    actedIn: [{
        type: Schema.Types.ObjectId,
        ref: Movie
    }],
    producedBy: [{
        type: Schema.Types.ObjectId,
        ref: Movie
    }]
});

module.exports = mongoose.model('Person', PersonSchema);
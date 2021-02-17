const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const DirectorSchema = new Schema ({
    name: String
}).index({directors: 1});

module.exports = mongoose.model('Director', DirectorSchema);
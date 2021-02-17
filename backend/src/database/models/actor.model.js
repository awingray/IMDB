const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ActorSchema = new Schema ({
    name: String
}).index({actors: 1});

module.exports = mongoose.model('Actor', ActorSchema);
let mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Actor', ActorSchema);
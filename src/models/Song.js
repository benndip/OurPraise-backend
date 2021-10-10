const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    soc: {
        type: Number,
        required: true,
        default: 0
    },
    sofp: {
        type: Number,
        required: true,
        default: 0
    },
    tcen: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
    }
});

module.exports = mongoose.model('Song',SongSchema);
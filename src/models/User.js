const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        require: false
    },
    password: {
        type: String,
        required: false,
        max: 1024,
        min: 6
    },
    phone: {
        type: String,
        required: false
    },
    avatar:{
        type: String,
        required: false
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);
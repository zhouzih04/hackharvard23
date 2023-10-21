const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    id:{
        type: String,
        required: true,
        unique: true,
    }
})


module.exports = mongoose.model('User',userSchema);
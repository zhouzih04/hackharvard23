const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    picture_url: {
        type: String,
        required: true,
    },
    poster_id: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price_range: {
        type: Number,
        required: true,
    },
    id: {
        type: String,
        unique: true,
    }
})


module.exports = mongoose.model('Request',requestSchema);
const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

const chatSchema = new mongoose.Schema({
    chatId: {
        type: String,
        unique: true,
    },
    user1Id: {
        type: String,
        required: true,
    },
    user2Id: {
        type: String,
        required: true,
    },
    content: [textSchema]
});


module.exports = mongoose.model('Message', chatSchema);
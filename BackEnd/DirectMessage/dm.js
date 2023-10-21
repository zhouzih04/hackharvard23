const express = require('express');
// const mongoose = require('mongoose');

const app = express();
// const port = 3000;

// Connect to MongoDB database
// mongoose.connect('mongodb://localhost/5000', {
//     useNewUrlParser: true,
//

const Chat = require ('../databases/chat.js');
const router = express.Router();

// Route to handle POST request from front end
router.post('/', async (req, res) => {
    try {
        const { user1Id, user2Id } = req.body;

        // Check if conversation already exists
        const conversation = await Chat.findOne({
            user1Id: user1Id,
            user2Id: user2Id
        });
        const conversation2 = await Chat.findOne({
            user1Id: user2Id,
            user2Id: user1Id
        });

        if (conversation) {
            // Conversation already exists, retrieve chat ID and call /chat/:id route
            const chatId = conversation.chatId;
            res.redirect(`/chat/${chatId}`);
        } else if (conversation2) {
            const chatId = conversation2.chatId;
            res.redirect(`/chat/${chatId}`);
        } else {
            // Conversation does not exist, generate new chat ID and insert into database
            const newConversation = new Chat({
                user1Id,
                user2Id
            });
            const convo = await newConversation.save();
            const id = convo._id.toString();
            convo.chatId = id;
            await convo.save();

            // Call /chat/:id route with new chat ID
            await res.status(201).redirect(`/chat/${chatId}`);
        }
    } catch (err) {
        // console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;




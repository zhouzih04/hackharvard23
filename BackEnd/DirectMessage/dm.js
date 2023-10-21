const express = require('express');
// const mongoose = require('mongoose');

const app = express();


const Chat = require ('../databases/chat.js');
const router = express.Router();

// Route to handle POST request from front end
router.post('/', async (req, res) => {
    try {
        const user1Id = req.body.user1Id;
        const user2Id = req.body.user2Id;
        console.log(user1Id);
        console.log(user2Id);

        // Check if conversation already exists
        const conversation = await Chat.findOne({
            user1Id: user1Id,
            user2Id: user2Id
        });
        const conversation2 = await Chat.findOne({
            user1Id: user2Id,
            user2Id: user1Id
        });

        // if (conversation || conversation2) {
        //     res.status(400).json({ message: "Conversation already exists" });
        // } else {
        //     res.status(200).json({ message: "Conversation does not exist" });
        // }

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
                user1Id: user1Id,
                user2Id: user2Id
            });
            const convo = await newConversation.save();
            const id = convo._id.toString();
            
            convo.chatId = id;
            await convo.save();

            // Call /chat/:id route with new chat ID
            await res.status(201).redirect(`/chat/${convo.chatId}`);
        }
    } catch (err) {
        // console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;




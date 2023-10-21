// Import the necessary modules and set up the MongoDB connection
const express = require('express');
const app = express();
const Chat = require('../databases/chat.js');
const router = express.Router();


// Create a POST route that takes in the chatID parameter and the chat data in JSON format
router.post('/:chatID', async (req, res) => {
    try{
        const user_id = req.body.user_id;
        const text = req.body.text;
        const chatID = req.params.chatID;


        // Use the chatID to find the chat in the database
        const chat = await Chat.findOne({ 
            chatId: chatID });
        
        if (!chat) {
            chat.content = [];
        }
        console.log(chat);
            // Push the new message to the content array
        chat.content.push({ user_id: user_id, 
                            text: text });
        
        await chat.save();
        res.status(201).json(chat);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

);

// Create a GET route that takes in the chatID parameter
router.get('/:chatID', async (req, res) => {
    
    try {
        const chatID = req.params.chatID;
        const chat = await Chat.findOne({ 
            chatId: chatID });
        // Use the chatID to find the chat in the database
        
        if (!chat.content) {
            chat.content = [];
        }
        
        console.log('hi')
        console.log(chat.content);
        res.status(200).json(chat);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

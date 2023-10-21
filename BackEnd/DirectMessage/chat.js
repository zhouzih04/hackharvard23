// Import the necessary modules and set up the MongoDB connection
const express = require('express');
const app = express();
const Chat = require('./databases/chat.js');
const router = express.Router();


// Create a POST route that takes in the chatID parameter and the chat data in JSON format
router.post('/chat/:chatID', (req, res) => {
    const user_id = req.body.user_id;
    const text = req.body.text;
    const chatID = req.params.chatID;


    // Use the chatID to find the chat in the database
    Chat.findOne({ chatID }, (err, chat) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            // Push the new message to the content array
            chat.content.push({ user_id: user_id, 
                                text: text });
            
            chat.save((err, savedChat) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal server error');
                } else {
                    res.status(200).send(savedChat);
                }
            });
        }
    });
});

// Create a GET route that takes in the chatID parameter
app.get('/chat/:chatID', (req, res) => {
    const chatID = req.params.chatID;

    // Use the chatID to find the chat in the database
    Chat.findOne({ chatID }, (err, chat) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            if (!chat) {
                res.status(404).send('Chat not found');
            } else {
                // Return the entire chat history associated with that chatID
                res.status(200).send(chat);
            }
        }
    });
});

module.exports = router;

const { MongoClient } = require('mongodb');

// Connect to the MongoDB database
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
await client.connect();
const database = client.db('mydb');
const chatsCollection = database.collection('chats');

async function sendMessage(chatId, user1Id, user2Id, messageContent) {
    // Create a new message object with the message content, sender ID, and timestamp
    const message = {
        content: messageContent,
        senderId: user1Id,
    };



    
    // Find the chat document in the database with the given chat ID
    const chat = await chatsCollection.findOne({ chatId });

    // If the chat document does not exist, create a new chat document with the chat ID, user 1 ID, user 2 ID, and an empty messages array
    if (!chat) {
        const newChat = {
            chatId,
            user1Id,
            user2Id,
            messages: []
        };
        await chatsCollection.insertOne(newChat);
        chat = newChat;
    }

    // Add the new message object to the messages array in the chat document
    chat.messages.push(message);

    // Update the chat document in the database with the new messages array
    await chatsCollection.updateOne({ chatId }, { $set: { messages: chat.messages } });

    // Find the updated chat document in the database and return it
    const updatedChat = await chatsCollection.findOne({ chatId });
    return updatedChat;
}

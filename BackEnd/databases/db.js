const mongoose = require('mongoose')
const uri = 'mongodb+srv://user:zYY8lCXluWMPCvz1@hackharvard2023.th2hees.mongodb.net/'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on('error',console.error.bind())
database.once('open', () => {
    console.log('Connected to MongoDB')
});
module.exports = mongoose;

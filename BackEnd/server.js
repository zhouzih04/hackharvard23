const express = require('express')

const app = express();
require('./databases/db')
app.set('view engine', 'ejs');

const authRouter = require('./GoogleAuth/auth');
app.use('/auth',authRouter);
app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));

module.exports = app;
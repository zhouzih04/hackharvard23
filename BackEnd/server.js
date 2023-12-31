const express = require('express')

const app = express();
require('./databases/db')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set('view engine', 'ejs');

const authRouter = require('./GoogleAuth/auth');
app.use('/auth',authRouter);
app.use(express.json())


const dmRouter = require('./DirectMessage/dm');
app.use('/dm',dmRouter);
app.use(express.json())

const chatRouter = require('./DirectMessage/chat');
app.use('/chat',chatRouter);
app.use(express.json())

const offerRouter = require('./Offer/offer');
app.use('/offer',offerRouter);
app.use(express.json())

const requestRouter = require('./Request/request');
app.use('/request',requestRouter);
app.use(express.json());

const profileRouter = require('./Profile/profile');
app.use('/profile',profileRouter);
app.use(express.json());

const dashboardRouter = require('./Dashboard/dashboard');
app.use('/home',dashboardRouter);
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));

module.exports = app;
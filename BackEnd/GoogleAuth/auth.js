const express = require('express');
const app = express();
const router = express.Router()
const session = require('express-session');
const user = require('../databases/user')

app.use(express.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

// app.get('/', function(req, res) {
//   res.render('pages/auth');
// });

const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
router.get('/', function(req, res) {
  res.render('pages/auth');
})
router.get('/success', async (req, res) => {
    // Add the userProfile to MongoDB here!
    const existingUser = await user.findOne({id: userProfile.id})
    if (existingUser)
    {
        existingUser.displayName = userProfile.displayName;
        await existingUser.save();
        console.log('user data updated: ',existingUser)
        res.status(200).send(userProfile);
    }
    else{
        const newUser = new User(userProfile)
        try {
            const savedUser = await newUser.save()
            console.log('user data stored: ',savedUser)
            res.status(200).send(userProfile);
        }
        catch(e)
        {
            console.error('Error storing user data:',e)
            res.status(500).send('Failed to store user data')
        }
    }
});
router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '286256665198-fvg7eai9vokvqi0tn0fkc5003ea83car.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
router.get('/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });

module.exports = router;
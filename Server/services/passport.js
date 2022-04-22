
const passport = require('passport');//use for authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;//use for authentication with google
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);//this is the id generate by mongo we are not using profile.id because may be user is login with fb,link etc.
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })

})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }
    ,
    async (accessToken, refreshToken, profile, done) => {

        const existingUser = await User.findOne({ googleId: profile.id });


        if (existingUser) {
            return done(null, existingUser); //done(error,instance)
        }

        const user = await new User({ googleId: profile.id }).save();

        user => {
            done(null, user)
        }
    }
)
);
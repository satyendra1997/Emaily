const express = require('express'); //working like ---import express from 'express'

const mongoose = require('mongoose'); //working with mongoose

const cookieSession = require('cookie-session');

const passport = require('passport');
const bodyParser=require('body-parser');

const keys = require('./config/keys');
require('./models/user');
require('./models/survey');
require('./services/passport');




mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]

    })
)

app.use(passport.initialize());
app.use(passport.session()); //to tell passport to use cookie

require('./routes/authRoutes')(app);  //define the function and immediatly called with argument in this with app
require('./routes/billingRoute')(app);
require('./routes/surveyRoutes')(app);
//http://console.developers.google.com/  for register the project


if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000
app.listen(PORT);

//http://localhost:5000/
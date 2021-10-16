const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser') //Deprecated so I'm using express.json()
require('dotenv').config();

const app = express()
const port = process.env.PORT
const db_url = process.env.DB_URL

//json middleware
app.use(express.json());

//Importing routes
const songsRoute = require('./routes/songs');
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/songs',songsRoute);
app.use('/api/user', authRoute)


// connect to db
mongoose.connect(db_url,()=>{
    console.log("cnnected to Database!");
})

app.listen(port,()=>{
    console.log(`Currently listening to ${port}`)
})
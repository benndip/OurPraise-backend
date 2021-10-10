const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()
const port = process.env.PORT
const db_url = process.env.DB_URL

//json middleware
app.use(bodyParser.json());

//Importing routes
const songsRoute = require('./routes/songs');

//Route Middlewares
app.use('/songs',songsRoute);


// connect to db
mongoose.connect(db_url,()=>{
    console.log("cnnected to Database!");
})

app.listen(port,()=>{
    console.log(`Currently listening to ${port}`)
})
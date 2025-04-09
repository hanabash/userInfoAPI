const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv').config()
const userRoute = require('./routes/userRoute.js')

const app = express();

app.use(express.json());

app.use("/users", userRoute);

mongoose.connect(process.env.DATABASE_CON)
.catch(err => {
    console.error(err)
})

module.exports = app;
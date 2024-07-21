const mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL,
                {useNewUrlParser: true,useUnifiedTopology: true});

const connection = mongoose.connection

connection.on('error', err => console.log(err));

connection.on('connected', () => console.log('Mongo DB Connection Successful'));
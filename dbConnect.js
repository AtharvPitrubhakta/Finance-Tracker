const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://welcomeatharv970:expenseapp@cluster0.ezroylw.mongodb.net/expensemoney-application",
                {useNewUrlParser: true,useUnifiedTopology: true});

const connection = mongoose.connection

connection.on('error', err => console.log(err));

connection.on('connected', () => console.log('Mongo DB Connection Successful'));
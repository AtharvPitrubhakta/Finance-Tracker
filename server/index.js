const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const path = require('path')


const userRoute = require('./routes/usersRoute');
const transactionsRoute = require('./routes/transactionsRoute');

// Setting up routes
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);

const PORT = process.env.PORT || 4000;

// Testing the server
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
});

// Listening to the server
app.listen(PORT, () => 
  console.log(`Node JS Server Started at port ${PORT}!`))

const express = require('express');
const mongoose = require('./db'); // MongoDB कनेक्शन
// const Person = require("./models/person");
const UserPerson = require("./models/userschema");

const app = express();
app.use(express.json()); // body-parser की जगह

// Home Route
app.get("/", (req, res) => {
    res.send('Hello');
});

// POST API for creating a Person

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const userItem = require('./routes/userRotes');
app.use('/user', userItem);

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

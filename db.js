const mongoose = require("mongoose");


const mongoURI = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongoDB Server');
});

db.on('error', (err) => {
    console.error('Mongodb Connection Error', err)
});

db.on('Disconnected', () => {
    console.log('Mongodb Disconnected');
});

module.exports = db;
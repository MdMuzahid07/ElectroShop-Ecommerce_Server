const mongoose = require('mongoose');

async function databaseConnection() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ueifkoz.mongodb.net/AllProducts?retryWrites=true&w=majority`).then(
        console.log(`MongoDB connected using mongoose`)
    );
};

module.exports = databaseConnection;
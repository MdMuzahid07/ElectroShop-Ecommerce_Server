const mongoose = require('mongoose');

async function databaseConnection() {
    await mongoose.connect('mongodb://localhost:27017/test').then(
        console.log(`Database connected using mongoose`)
    );
};

module.exports = databaseConnection
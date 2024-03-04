const mongoose = require('mongoose');
function DbConnect() {
    // console.log('coming here...', "mongodb+srv://kunalcharde1:PAgjkKLLEjuv7c9I@c1.z0y3by2.mongodb.net/?retryWrites=true&w=majority&appName=c1");
    const DB_URL = "mongodb+srv://kunalcharde1:PAgjkKLLEjuv7c9I@c1.z0y3by2.mongodb.net/?retryWrites=true&w=majority&appName=c1";
    // Database connection
    mongoose.connect(DB_URL);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;

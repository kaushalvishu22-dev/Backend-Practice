const mongoose = require('mongoose');

const connectDB = async()=>{
     
    await mongoose.connect('mongodb://localhost:27017/')
    .then((conn) => {
        console.log(`MongoDB Connected!! DBHost: ${conn.connection.host}`)
    }).catch((err) => {
        console.error(err.message);
    });
}

module.exports = connectDB;
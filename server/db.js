const mongoose = require('mongoose');

const DBURL = process.env.DB_URL

const connectDB = () => {
    try {
        mongoose.connect(DBURL, ()=> {
            console.log("Database is Connected");
        })
    } catch (error) {
        console.log("Database connection failed: ", + error);
    }
}

module.exports = connectDB;

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
    });

    console.log("Connected to DB");
  } catch (err) {
    console.log("Database connection error:", err.message);
  }
}

module.exports = connectToDb;

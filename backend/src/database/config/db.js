const mongoose = require("mongoose");

/**
 * Connects to the mongoose cloud database.
 */
const connectDB = async () => {
  try {
    let db = process.env.DB_URL;
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB is Connected...");
  } catch (err) {
    console.error("Error Msg", err.message);
    process.exit(1);  // Exit on failure
  }
};
module.exports = connectDB;

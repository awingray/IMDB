const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    var db = process.env.DB_URL;
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB is Connected...");
  } catch (err) {
    console.error("Error Msg", err.message);
    //Exist on failure
    process.exit(1);
  }
};
module.exports = connectDB;

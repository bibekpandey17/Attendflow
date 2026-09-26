require("dotenv").config();

const mongoose = require("mongoose");

async function connectDb() {
  try{

     const url = process.env.MONGODB_URL;
     if(!url){
      throw new error("Missing MONGODB_URL in the backend/.env");
     }

     await mongoose.connect(url);
     console.log("Database Connected Succeddfully");

  }catch(error){

      console.log(`MongoDb connection error: ${error.message}`);
      throw error;
  }
}

module.exports = connectDb;
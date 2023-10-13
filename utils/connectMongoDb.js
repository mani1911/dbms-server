import mongoose from "mongoose";

const connectMongoDatabase = async (database, uri) => {
    try {
        if(!uri) uri = process.env.MONGO_DB_URI;
        // console.log(uri)
        await mongoose.connect(uri + database);
        console.log('MongoDB Connected Successfully...');
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};


export default connectMongoDatabase;
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'PESEvents',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully at " + process.env.MONGODB_URI); 
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;   
import mongoose from "mongoose";

const connectDB = async () =>{
    console.log(process.env.MONGDBURI);
    return mongoose.connect(process.env.MONGDBURI as string);
}

export default connectDB;
import mongoose from "mongoose";

const DB = async()=>{
    const connect = await mongoose.connect("mongodb://localhost:27017/different")
    return connect;
}

export default DB;
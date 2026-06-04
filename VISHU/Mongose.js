import mongoose from "mongoose";

const DBconnect = async()=>{
    const connect = await mongoose.connect("mongodb://localhost:27017/std")
    return connect;
}

export default DBconnect;
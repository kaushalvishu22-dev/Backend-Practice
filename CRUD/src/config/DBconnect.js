import mongoose from "mongoose";

const DBconnect = async()=>{
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    return connect;
}

export default DBconnect;
import mongoose from "mongoose"

 const DB = async() => {
   const conn = await mongoose.connect("mongodb://127.0.0.1:27017/")

return conn;
}

export default DB;
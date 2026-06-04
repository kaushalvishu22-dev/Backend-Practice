import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
    },
    age:{type:Number,
        required:true,
        default:18
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const pract = mongoose.model("pract",userSchema);

export default pract ;
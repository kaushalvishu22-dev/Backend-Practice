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
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:Number,
        required:true,
        unique:true
    }
},{timestamps:true})

const Student = mongoose.model("Student",userSchema);

export default Student ;
import mongoose  from "mongoose"

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique :true,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // match:"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/" 
    },

    password:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        default:18
    }
      
},{timestamps :true})

const User = mongoose.model("User",Schema)

export default User;



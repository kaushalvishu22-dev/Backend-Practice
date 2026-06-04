import express, { json } from "express"
import DB from "./config.js/Mongose.js"
import  Schema  from "./config.js/Schema.js"
import User from "./config.js/Schema.js"



DB().then(()=> {   
    console.log('MONGDB connect')
})
.catch((err)=>{
    console.error("MONGODB FAILED")
})

const index = express()
index.use(express.json())

index.post("/register",async(req,res)=>{
  
    const {name,email,password,age}=req.body

    const use = await User.create({
        name,email,password
    });
    // console.log('connect',use);
    res.status(201).json({
        message: "user created successfully",
        data : use
    })
})


index.patch('/update',async(req,res)=>{

    const {name,email,password}=req.body

    const user = await User.findOneAndUpdate({name:"aman"},{
        name,
        email,
        password
    },   { new: true }  )

    res.status(200).json({
        message : "user details uopdated successfully",
        data : user
    })
})

index.get('/get', async (req,res)=>{

    
   const find = await User.find()

   res.status(202).json({
    message:"data fetch successfully",
    data:find
   })
})

index.delete("/delete" , async (req,res)=>{

    const Delete = await User.findOneAndDelete({name:"manu"})

    res.status(204),json({
        message:"data delete success",
        data:"delete"
    })
})

index.listen(2000,()=>{
  console.log('DB connected ')})
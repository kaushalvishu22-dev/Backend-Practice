import express from "express"
import Student from "./schema.js"
import DBconnect from "./Mongose.js"


DBconnect().then(()=>{
    console.log("MONGO DB CONNECT ")
}).catch((err)=>{
    console.error("MONGO DB FAILED")
})  

const index=express()
index.use(express.json())

index.post("/post",async (req,res)=>{

    const {name,age,id,email,password}=req.body
    
    const user = await Student.create({
    name,email,id,age,password
    });

    res.status(201).json({
            message: "schema created successfully",
            data : user
        })
})

index.listen(4000,()=>{
  console.log('DB connected ')}) 
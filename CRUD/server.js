import express from "express"
import DBconnect from "./src/config/DBconnect.js"
import pract from "./src/Model/schema.js"
import authRouter from './src/Route/auth.route.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

DBconnect().then(()=>{
    console.log("MONGO DB CONNECT ")
}).catch((err)=>{
    console.error("MONGO DB FAILED")
})  

const index=express()
index.use(express.json())

index.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))
index.use('/api/v1/auth', authRouter)


index.listen(4000,()=>{
  console.log('DB connected ')}) 
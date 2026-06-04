const express=require("express")
const app=express.Router()
const { get,post } = require("../controller/usercontroller")
//  const {auth} = require("../middleware/middleware")
app.get('/', get)



app.post('/',auth,post)

module.exports = app
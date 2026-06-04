const express = require('express')
const app = express.Router()
const {get} = require('./controller')

app.use('/about',get)

 
app.get('/', (req, res) => {
    res.send('Hello from GET route')
})


module.exports=app;
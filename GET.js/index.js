const express =require('express')
const abc = express()

const user = require('./Router/user') // import user 
abc.use(express.json())


abc.use("/user",user)
abc.get('/',(req,res)=>{
    res.send('LE LEYAA BULLET LANDI JEEP VEECH KE ')
})

abc.get('/about',(req,res)=>{
    res.send('VJJDI NAA GEEDI TERI GAALI TAANG AAW')
})

abc.post('/',(req,res)=>{
    res.send(req.body)
    res.send('post kran lyii ')
   
})

abc.put('/',(req,res)=>{
    res.send(req.body)

    res.send('put mtlb oh cheez chknn lyi ')
   
})

abc.delete('/',(req,res)=>{
    res.send('delete krn lyii ')
   
})

abc.listen(4000,()=>{
    console.log('chll gyaa')
})
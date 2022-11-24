const express=require('express')
const cors=require('cors')
const app=express()
const elements=require('./periodic_table.json')

app.use(cors())

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/periodic_table.json')
})

app.get('/elements/:atomicNumber',(req,res)=>{
    const element=elements.find(e=>e.AtomicNumber== req.params.atomicNumber)
    res.json(element ?? 'element not found')
})

app.listen(process.env.PORT || 3000, ()=>{console.log(`your server is running, you better go catch it`)})
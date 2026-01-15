const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = require('./config/dbConnect')
const port = process.env.PORT || 3030
dbConnect()
const app = express()
app.get('/',(req,res)=>{
    res.send('server running......')
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
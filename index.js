const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')


const dbConnect = require('./config/dbConnect')
const port = process.env.PORT || 3030
dbConnect()

const app = express()
app.use(express.json())
app.use(cors())
// routes
const userRouter = require('./routes/userRoutes')
app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.send('server running......')
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
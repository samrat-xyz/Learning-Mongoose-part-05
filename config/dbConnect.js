const mongoose = require("mongoose")

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoose connected to database')
    } catch (error) {
        console.error(error)
    }
}

module.exports=dbConnect
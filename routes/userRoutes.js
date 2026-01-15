const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post('/users',async(req,res)=>{
    try{
        const data = req.body
        console.log(data)
        const user = await User.create(data)
        res.status(201).json({
            success : true,
            message:'user create successfull',
            user
        })
    }catch(error){
        res.status(400).json({
            success : false,
            message:'failed to create user'
        })
    }
})

router.get('/users',async(req,res)=>{
    try{
        const result = await User.find()
        res.status(200).json({
            success:true,
            result
        })
    }catch(err){
        res.status(400).json({
            success :false,
            message:"user not found",
            err
        })
    }
})


module.exports=router
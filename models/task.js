const bcrypt=require('bcrypt')
const mongoose=require('../db/mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    completed:{
       type:Boolean,
       required:true,
       default:false
    },
    due:{
        type:Date,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps:true
})


const task = mongoose.model("Task", taskSchema)

module.exports=task

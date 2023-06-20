const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
      title: {
            required:true,
            type:String,
      },
      createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users",
            required:true
      },
      conpleted:{
            type:Boolean,
            default:false
      }
    });
// creating user collection that contains above user document
const tasks = mongoose.model("tasks",taskSchema)   
module.exports=tasks
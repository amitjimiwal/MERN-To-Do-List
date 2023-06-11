const task = require("../models/task");
// create task 
// delete task 
// update task
exports.newTask=async(req,res)=>{
    try{
         // taking the title from the body
      const {title}=req.body;
      // creating a task
      const newtask= await task.create({
         title,
         createdBy:req.user
      })
      res.status(200).json({
            success:true,
            message:"Successfully created task"
      })
    }
    catch(err){
      res.status(400).json({
            success:true,
            message:"Error in creating task",
            err
      })
    }
}
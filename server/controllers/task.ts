const task = require("../models/task");
// create task
// delete task
// update task
exports.newTask = async (req, res) => {
  try {
    // taking the title from the body
    const { title } = req.body;
    // creating a task
    const newtask = await task.create({
      title,
      createdBy: req.user,
    });
    res.status(201).json({
      success: true,
      message: "Successfully created task",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in creating task",
      err,
    });
  }
};
exports.getmyTask = async (req, res) => {
  try {
    const { _id } = req.user;
    const usersTask = await task.find({ createdBy: _id });
    res.status(200).json({
      success: true,
      tasks: usersTask,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in fetching task",
      err,
    });
  }
};

exports.deletetask = async (req, res) => {
  try {
      const { id } = req.params;
      const reqtask = await task.findById(id);
      await reqtask.deleteOne()
      res.status(200).json({
            success: true,
            message: "Deleted task",
      });
  } catch (error) {
      res.status(404).json({
            success: false,
            message: "Error in deleting the task",
            error
      });
  }
};
exports.updatetask = async (req, res) => {
  try {
    const { id } = req.params;
    const reqtask = await task.findById(id);
    reqtask.conpleted = !reqtask.conpleted;
    await reqtask.save();
    res.status(200).json({
      success: true,
      message: "Updated the task",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error in updating the task",
      error
    });
  }
};

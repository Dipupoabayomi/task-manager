const Task = require('../model/task-manager');

const createTask = async (req, res) => {
    const { taskTitle, description, tags} = req.body;

    try{
        if(!taskTitle || !description || !tags){
            return res 
            .status(404)
            .json({success: false, message: "please input all fields"})
        }
        const task = await Task.create({taskTitle, description, tags})

        res.status(201)
           .json({success: true, message: "Task created succesfully", task});
    }catch(err){
        return err;
    }

}

const getAllTask = async (req, res) => {
    const task = await Task.find();

    res.status(200).json({task});
}

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    res.status(200).json({success: true, task});
}

const deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    await Task.deleteOne(task);
    res.status(200).json({success: true, message:"Task deleted succesfully", task:{} });
}

const editTask = async (req, res) => {
    const fieldToUpdate = {
        taskTitle: req.body.taskTitle,
        description: req.body.description,
        tags: req.body.tags,
    };
    const task = await Task.findByIdAndUpdate(req.params.id, fieldToUpdate,{
        new:true,
        runValidators: true,
    });

    res.status(200).json({success: true, message:"Task editted successfully", task:{} });
}



module.exports = {createTask, getTask, getAllTask,deleteTask,editTask};
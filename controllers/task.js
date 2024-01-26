const Task=require('../models/task')

const CreateTask=async(req,res)=>{
    const {title,description}=req.body
    try{
       if(!title||!description){
        return res.status(404).json({Succuess:false,msg:"Title and Description are required"})
       }
       const createdTask=await Task.create(req.body)
       res.status(201).json({Succuess:true,msg:"Task Created",createdTask})

    }
    catch(err){
       return res.status(500).json({Succuess:false,msg:"Internal Server Error"})
    }
}

const ViewTask=async(req,res)=>{
    try{
        await req.user.populate('tasks')
        res.status(200).json({Tasks:req.user.tasks});
    }
    catch(err){
       return res.status(500).json({Succuess:false,msg:"Internal Server Error"})
    }
}

const EditTask=async(req,res)=>{
        const updates = Object.keys(req.body);
        const allowedUpdates = ["description", "completed"];
        const isValidOperation = updates.every((update) =>
          allowedUpdates.includes(update)
        );
      
        if (!isValidOperation) {
          return res.status(400).send({ error: "Invalid updates!" });
        }
      
        try {
          const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id,
          });
      
          if (!task) {
            return res.status(404).send("Task updated");
          }
      
          updates.forEach((update) => (task[update] = req.body[update]));
          await task.save();
          res.send(task);

    }
    catch(err){
       return res.status(500).json({Succuess:false,msg:"Internal Server Error"})
    }
}

const DeleteTask=async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
          });
      
          if (!task) {
            res.status(404).send("No task found");
          }
      
          res.send({DeletedTask:task});

    }
    catch(err){
       return res.status(500).json({Succuess:false,msg:"Internal Server Error"})
    }
}

const CompleteTask=async(req,res)=>{
    try{
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id,
          });
        if(!task){
            return res.status(404).send("No task found")
        }

    }
    catch(err){
       return res.status(500).json({Succuess:false,msg:"Internal Server Error"})
    }
}

module.exports={
    CreateTask,
    ViewTask,
    EditTask,
    DeleteTask,
    CompleteTask
}


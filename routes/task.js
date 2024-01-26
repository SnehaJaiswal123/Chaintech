const express=require('express')
const router=express.Router();
const {CreateTask,ViewTask,EditTask,DeleteTask,CompleteTask}=require('../controllers/task')
const auth=require('../middleware/auth')

router.post('/createTask',CreateTask)
router.get('/viewTask',auth,ViewTask)
router.patch('/editTask/:id',EditTask)
router.delete('/deleteTask/:id',DeleteTask)
router.post('/completeTask/:id',CompleteTask)

module.exports=router
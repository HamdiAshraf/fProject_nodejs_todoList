const {Router}=require('express');

const router=Router();

const {getAllTasks,createTask,getTaskById,updateTask,deleteTask}=require('../controllers/tasksController')

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);




module.exports=router;
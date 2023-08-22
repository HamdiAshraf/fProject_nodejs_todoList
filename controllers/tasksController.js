const Task=require('../models/Task')
const asyncHandler=require('express-async-handler')
exports.getAllTasks=asyncHandler(async(req,res)=>{
    
        const tasks=await Task.find({})
        res.status(200).json({
            status:'success',
            results:tasks.length,
            tasks
            
        
        })

    }
)


exports.createTask=asyncHandler(async(req,res)=>{
    
    
        
    const task=await Task.create(req.body);
res.status(201).json(task);
} 
)
    

exports.getTaskById=asyncHandler(async(req,res)=>{
    
    const _id=req.params.id;
    // const task=await Task.findById(_id)
    const task=await Task.findOne({_id})
    if(!task){
        res.status(404).json({   // it return task not found when id is 24 length but not correct not found in database
            message:`task not found with id ${_id}`
        })
    }
    res.status(200).json({task})

} )

exports.updateTask=asyncHandler(async(req,res)=>{
    
    const _id=req.params.id;
    const {name,complete}=req.body;
    
    const task=await Task.findOneAndUpdate({_id},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        res.status(404).json({   
            message:`task not found with id ${_id}`
        })
    }

    res.status(200).json({
        status:'success',
        data:task
    })
} )


exports.deleteTask=asyncHandler(async(req,res)=>{
    
    const _id=req.params.id;
    const task=await Task.findOneAndDelete({_id})
    if(!task){
        res.status(404).json({
            message:`task not found with id ${_id}`
        })
    }
    res.status(200).json({
        message:'success',
        task:null
    })
} )
const mongoose=require('mongoose');


const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
        maxlength:[20,'name should not contain more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model('Task',TaskSchema) //'Task' is the name of the model. This is the name you'll use to refer to this model when performing database operations
import mongoose, { Schema } from "mongoose";

const todoSchema  = new mongoose.Schema({
    title:{
        type:String,
        requried:true,
    },
    description:{
        type:String,
        requried:true,
    },
    date:{
        type:Date,
    },
    tags:{
        type:Array,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true,
    }
},
{timestamps:true}
);


const Todo =  mongoose.model('todo',todoSchema);

export default Todo;
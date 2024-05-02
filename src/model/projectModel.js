import mongoose from "mongoose";


const projectSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    projectDescription:{
        type:String,
        required:true
    },
    people:[
        {type:mongoose.Schema.Types.ObjectId,ref:"User"},
    ]
})

const Project = mongoose.model("Project",projectSchema);

export default Project;
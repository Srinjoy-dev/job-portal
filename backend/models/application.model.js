import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema ({//for the job applicants so we need to know stuffs like which company they applied and who applied
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',//creating a relation between job and application schema
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',//the applicant data must be in users schema
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application=mongoose.model("Application",applicationSchema);
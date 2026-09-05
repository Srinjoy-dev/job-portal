import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
    },
     requirements:[{
        type:String,
    }],//here they have to list needed skills so its basically an array of strings
     salary:{
        type:Number,
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true
    },
     location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{//no of openings or vacancies in that job
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,//relation between job and company schema
        ref:'Company',//so the data of that company must be in the company schema
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,//relation between job and user schema
        ref:'User',//referencing from user schema because the person creating the job must be an user
        required:true
    },
    applications:[{//it will have all the applications regarding this job
        type:mongoose.Schema.Types.ObjectId,//relation between job and applications schema
        ref:'Application',//referencing from 
        //required true isnt used here because at the time of creating the job that wont be required
    }]
},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);
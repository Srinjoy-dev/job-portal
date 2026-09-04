import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        //description is not required
    },
    website:{
        type:String,
        //url to company website which is not required
    },
    location:{
        type:String,
        //not required
    },
    logo:{
        type:String,//url to company logo
        //not required
    },
    userId:{//which registered user creating this company
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',//referencing from user schema coz the person created this company must be in the user schema 
        required:true
    }
},{timestamps:true});
export const Company=mongoose.model("Company",companySchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],//enum is used when we want them to select one of the options
        required:true
    },
    profile:{
        bio:{type:String},//required true isnt used coz bio is updated later not at the time of signup
        skills:[{type:String}],//array of strings
        resume:{type:String},//url to resume file url is a string type
        resumeOriginalName:{type:String},//to show the resume name like srinjoy.resume like this
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
        //generating relation between company table and user table
        profilePhoto:{
            type:String,
            default:""//initially there may not be any profile photo
        }
    },
},{timestamps:true});//to record the timestamps
export const User= mongoose.model('User',userSchema);//user is the name of the model 
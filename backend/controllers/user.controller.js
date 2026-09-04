import {User} from "../models/user.model.js";//importing the user schema
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res) => {//this function handles registration requests
    try {
        const{fullname,email,phoneNumber,password,role} = req.body;//take all these values from frontend
        if(!fullname || !email || !phoneNumber || !password || !role) {//if any of the data is missing
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
        };
        //check if the emailidd is already registered or not
        const user = await User.findOne({email});//finding the user on the basis of email
        if(user){//if the user got found then return error
            return res.status(400).json({
                message:'User already exists with this email',
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role
        });
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
        
    }
}
export const login = async(req,res)=> {
    try {
        const {email,password,role} = req.body;
         if(!email || !password || !role) {//if any of the data is missing
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
         };
         //check if email exists in database or not
         let user = await User.findOne({email});
         if(!user){
         return res.status(400).json({
            message:'Incorrect email or password',
            success:false
         })
       }
       const isPasswordMatch = await bcrypt.compare(password,user.password);
       if(!isPasswordMatch) {
         return res.status(400).json({
            message:'Incorrect email or password',
            success:false
         })
       };
       //check role is correct or not
       if(role != user.role) {
        return res.status(400).json({
            message:"Account does not exist with current role.",
            success:false

        })
       };
       //generate a token
       const tokenData = {
        userId:user._id//get this from database//saying that this token belong to this particular user
       }
       const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

       user = {//this is the user info that we want to send back to frontend
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role:user.role,
        profile:user.profile
       }

       //store token in cookies
       return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000,httpOnly:true,
         sameSite:'strict'}).json({
            message:`Welcome back ${user.fullname}`,
            success:true
         })
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
export const logout = async(req,res) => {
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        });//make the cookie empty and expire
        //it immidiately
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
        
    }
}
export const updateProfile = async(req,res) => {
    try {
        const{fullname,email,phoneNumber,bio,skills} = req.body;
        const file=req.file ;//we will get file when we will add resume

        //cloudinary comes here

        //change the skills strings into array
       let skillsArray;
       if(skills) {//using this if because skills was not there at first.
         const skillsArray=skills.split(",");
       }
        //if they want to update profile they must be authenticated/logged in
        const userId = req.id;//middleware authentication,it came from jwt token
        let user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({
                message:"User not found",
                success:false
            });
        };
        //updating data
        if(fullname)  user.fullname = fullname;
        if(email)  user.email = email;
        if(phoneNumber)  user.phoneNumber = phoneNumber;
        if(bio) user.bio = bio;
        if(skills)  user.profile.skills = skillsArray;

        //resume comes later here.... 

        await user.save();

         user = {//this is the user info that we want to send back to frontend
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role:user.role,
        profile:user.profile
       }
       return res.status(200).json({
        message:"Profile updatedd successfully",
        user,
        success:true
       })

    } catch (error) {
         console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
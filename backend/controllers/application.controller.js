import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async(req,res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;//we will get the job id from the requests
        if(!jobId) {
            return res.status(400).json({
                message:"Job id is required",
                success:false
            })
        };
        //check if user is already applied to this job or not
        const existingApplication = await Application.findOne({job:jobId,applicant:userId});
        //above basically we are checking the application database if any job id and in it any user id is same as this application
        if(existingApplication) {
            return res.status(400).json({
                message:"you have already applied to this job",
                success:false
            });//we can handle this ui itself too like the apply button will be disabled if already applied
        }
        //check if the job exists
        const job = await Job.findById(jobId);
        //if the job is not found
        if(!job) {
            return res.status(400).json({
                message:"job not found",
                success:false
            })
        }
        //create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })
    } catch (error) {
          console.log(error);
    return res.status(500).json({
        message: "Internal server error",
        success: false
    });
    }
};
//get all the applied jobs regarding an user
export const getAppliedJobs = async(req,res) => {
    try {
        const userId = req.id;
           //get all the jobs that the user has applied to
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},//we need those in sorted order
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        //we need to populate the jobs which the user has applied which data is in jobs table and also
        //need company data who posted those jobs so we need nested populate.
        if(!application) {
            return res.status(404).json({
                message:"No application data found",
                success:false
            })
        };
        //if we got the application
        return res.status(200).json({
            application,
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
//for admin to see who applied to this job
export const getApplicants = async(req,res) => {
    try {
        const jobId = req.params.id;//params because admin needs to first click on the job to get the ids(coz there can be multiple jobs created by one admin
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant',
            }
        });
        //first populate get the applications for that job and the nested populate gets the user that submitted the application
        if(!job) {
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        };
        //if found
        return res.status(200).json({
            job,//gets the entire job data
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
export const updateStatus = async(req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;//we are using params because when we will update the data of status it will update that only of the selected applicantid
        if(!status) {
            return res.status(400).json({
                message:"status is required",
                success:false
            })
        };
        //find the application by application id
        //search the application collection and find the application whose _id matches the application id we got from url
        //we do this get the exact application id status we need to check
        const application = await Application.findOne({_id:applicationId})
        if(!application) {
            return res.status(404).json({
                message:"application not found",
                success:false
            })
        };
        //update the status
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"status updated successfully",
            success:true
        });
    } catch (error) {
         console.log(error);
    return res.status(500).json({
        message: "Internal server error",
        success: false
        });
    }
}
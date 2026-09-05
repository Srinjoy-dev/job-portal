import {Job} from "../models/job.model.js";
//admin host this job
export const postJob = async(req,res) => {
    try {
        const {title,description,requirements,salary,location,jobType,experience,position,companyId} = req.body;
        const userId = req.id;

        if(!title||!description||!requirements||!salary||!location||!jobType||!experience||!position||!companyId) {
            return res.status(400).json({
                message:"Something is missing",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),//its a string so have to split it.
            salary:Number(salary),//change it to number maybe its coming as a string
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId
        });
        return res.status(201).json({
            message:"new job created successfully",
            job,
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
//for students 
export const getAllJobs = async(req,res) => {
    try {
        //filter the jobs 
        const keyword = req.query.keyword || ""; //get the value after api forexample .../?frontend devoloper we need to get this keyword
        //and if that doesnt comes take an empty string
        const query = {
            $or:[//or operator means this or that, regex searches for a pattern or text,so its basically checking if the job title or description have that keyword
                {title:{$regex:keyword, $options:"i"}},//i means case insensitive matching
                 {description:{$regex:keyword, $options:"i"}},
            ]
        };
        //job.find(query)means go to the job database and find all the jobs that matches this condition
        const jobs = await Job.find(query).populate({//we need to populate the company details while job creation so we are populating it from company schema
            path:"company"
        }).sort({createdAt:-1});//sort jobs based on createdAt field-put the newest job first-(-1:descending order),(1-ascending order)
        if(!jobs) {
            return res.status(404).json({
                message:"job not found",
                success:false
            })
        };
        return res.status(200).json({
            jobs,
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
//for students
export const getJobById = async(req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({
                message:"job not found",
                success:false
            })
        };
        return res.status(200).json({
            job,
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
//how many jobs admin created till now
export const getAdminJobs = async(req,res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs) {
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        };
        return res.status(200).json({
            jobs,
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
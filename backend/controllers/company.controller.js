import {Company} from "../models/company.model.js";
export const registerCompany = async(req,res) => {
    try {
        const {companyName} = req.body;
        if(!companyName) {
            return res.status(400).json({
                message:"company name is required",
                success:false
            });
        }
        //idea: company name must be unique
        let company = await Company.findOne({name:companyName});
        if(company) {
            return res.status(400).json({
                message:"you can't register same company",
                success:false
            })
        };
        company = await Company.create({
            name:companyName,
            userId:req.id
        });
        return res.status(201).json({
            message:"company registered successfully",
            company,//return the company 
            status:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
//it will get the companies the user has posted about
export const getCompany = async(req,res) => {
    try {
        //this is the logged in user's id
        const userId = req.id;//we are finding company on the basis of user id because we needd only the companies created by that user not every company in db
        const companies = await Company.find({userId});
        if(!companies) {
            return res.status(404).json({
                message:"company not found!",
                message:false
            })
        }
        return res.status(200).json({
            companies,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}
//get company by id(only the company we want show only that)
export const getCompanyById = async(req,res) => {
    try {
        const companyId = req.params.id;//we will get the ids from params
        //params means the values that comes from the url. in the company.suppose for this - 
        //router.route("/get/:id").get(isAuthenticated,getCompanyById);- here we are getting ids from
        //the url
        const company = await Company.findById(companyId);
        if(!company) {
            return res.status(404).json({
                message:"company not found!",
                message:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const updateComapny = async(req,res) => {
    try {
        //take all the fields we need to update
        const {name,description,website,location} = req.body;
        const file = req.file //the files for example the logos etc
        //cloudinary comes here

        const updateData = {name,description,website,location};//get all the updated data

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});
        //basicaaly means take the id from the url find the company in mongodb and update it.
        //here in the parameters of those function-
        //first get the data from req.params.id, then update the data with updateData and 
        //{new:true} - it is here to show the updated new data.
        if(!company){
            return res.status(404).json({
                message:"company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company information updated",
            success: true
        })
    } catch (error) {
         return res.status(500).json({
        message: "Internal server error",
        success: false
    });
        
    }
}
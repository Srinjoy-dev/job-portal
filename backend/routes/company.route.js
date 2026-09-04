import express from "express";
import isAuthenticated from "../midddlewares/isauthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateComapny } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/update/:id").put(isAuthenticated,updateComapny);
//the :id is a dynamic parameter - it means that the actual id will be provided via url/from api 
router.route("/get/:id").get(isAuthenticated,getCompanyById);

export default router;
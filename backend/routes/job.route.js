import express from "express";
import isAuthenticated from "../midddlewares/isauthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").post(isAuthenticated, getAdminJobs);
router.route("/jobs/:id").get(isAuthenticated, getJobById);

export default router;
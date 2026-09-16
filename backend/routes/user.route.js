import express from "express";
import {register, login, updateProfile, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../midddlewares/isauthenticated.js";
import { singleUpload } from "../midddlewares/multer.js";

const router = express.Router();//we get router in express

//here basically if someone sends the post request to register then run register function same as 
//login requests and profile update requests. to verify only the authenticated user is updating their
//profile we need to have middlewares.
router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);//it will only comes to this function
//if middleware is verified 
router.route("/logout").get(logout);//its get request coz we are not posting any data

export default router;
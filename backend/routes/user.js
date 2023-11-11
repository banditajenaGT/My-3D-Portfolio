import express from "express";
import { addProject, addTimeline, addYoutube, adminUpdate, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, me } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


export const userRouter=express.Router()

userRouter.route("/login").post(login)
userRouter.route("/logout").get(logout)
userRouter.route("/get/user").get(getUser)
userRouter.route("/me").get(isAuthenticated,me) 
userRouter.route("/contact").post(contact) 
userRouter.route("/admin/update").put(isAuthenticated,adminUpdate) 

userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline) 
userRouter.route("/admin/youtube/add").post(isAuthenticated,addYoutube) 
userRouter.route("/admin/projects/add").post(isAuthenticated,addProject) 

userRouter.route("/admin/timeline/delete/:id").delete(isAuthenticated,deleteTimeline) 
userRouter.route("/admin/youtube/delete/:id").delete(isAuthenticated,deleteYoutube) 
userRouter.route("/admin/projects/delete/:id").delete(isAuthenticated,deleteProject) 
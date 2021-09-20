import express from "express";
import { initializeUser } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/register", initializeUser);


export default userRoutes;
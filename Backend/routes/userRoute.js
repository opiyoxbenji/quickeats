import express from "express";
import { userLogin, userRegistration } from "../controllers/userController.js";

const routeUsers = express.Router();
routeUsers.post("/register", userRegistration);
routeUsers.post("/login", userLogin);

export default routeUsers;
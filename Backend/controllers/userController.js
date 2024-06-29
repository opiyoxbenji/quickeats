import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { message } from "statuses";

const userLogin = async (req, res) => {

}

const userRegistration = async (req, res) => {
    const {name, pasword, email} = body.req;
    try {
        const userExists = await userModel.findOne({email});
        if (userExists) {
            return res.json({success:false, message: "User already exists, please use another email."});
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Email not valid. Please enter a valid email."});
        }
        if (pasword.length < 8) {
            return res.json({success:false, message:"Password not strong enough, add more protein powder"});
        }
        const pwdenc = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(pasword, pwdenc);
        
    } catch (error) {
        
    }
}

export {userLogin, userRegistration};
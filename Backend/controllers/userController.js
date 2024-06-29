import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import pkg from "statuses";

const { message } = pkg;

const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user  = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false, message: "User is non existent"});
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.json({success: false, message: "Credentials invalid, Nice Try"});
        }
        const tok = tokenCreation(user._id);
        res.json({success:true, tok});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error signing user in"});
    }
}
const tokenCreation = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}
const userRegistration = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        const userExists = await userModel.findOne({email});
        if (userExists) {
            return res.json({success:false, message: "User already exists, please use another email."});
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Email not valid. Please enter a valid email."});
        }
        if (password.length< 8) {
            return res.json({success:false, message:"Password not strong enough, add more protein powder"});
        }
        const pwdenc = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(password, pwdenc);
        const newUsr = new userModel({
            name: name,
            email: email,
            password: hashPwd
        });
        const usr = await newUsr.save();
        const tok = tokenCreation(usr._id);
        res.json({success:true, tok});
    } catch (error) {
        console.log(error);
        res.json({succes:false, message: "Error creating a new user"});
    }
}

export {userLogin, userRegistration};
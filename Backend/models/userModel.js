import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, requied: true, unique: true},
    password: {type: String, required: true},
    cartinfo: {type: Object, default: {}}
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchem);

export default userModel;
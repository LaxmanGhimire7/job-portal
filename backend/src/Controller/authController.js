const jwt = require("jsonwebtoken")
const bcrypt = requier("bcrypt");
const User = require("../Model/userModel.js");


const register = async(req, res)=>{
    try {
        const {name, email, password, avatar, role} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400).json({status:400, json:"Email already exists"})
        }
        const hashedPassword = password.bcrypt
    } catch (error) {
        
    }
}
const UserSchema = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req,res)=>{
    try {
        const {username,email,password,about}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const existingUser=await UserSchema.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const user = new UserSchema({
            username,
            email,
            password:hashedPassword,
            about
        })
        await user.save();
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
        res.status(201).json({
            message:"User registered successfully",
            token,
            user: { _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture }
        });
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message})
    }
}

const loginUser = async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const user=await UserSchema.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
        res.status(200).json({
            message:"Login successful",
            token,
            user: { _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture }
        });
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message})
    }
}

module.exports={registerUser,loginUser}
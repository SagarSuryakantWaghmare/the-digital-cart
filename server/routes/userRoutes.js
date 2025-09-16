import express from 'express';
import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

// Router
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user=await User.findOne({email});
        if(user) return res.status(400).json({message:"User already exits"});

        user =new User({name,email,password});
        await user.save();
        // create jwt payload
        const payload={user:{id:user._id,role:user.role}};
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'60h'},
            (err,token)=>{
                if(err) throw err;
                //send the user and token in response
                res.status(201).json({
                    user:{
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        role:user.role,
                    },
                    token
                })
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})

// Login user
//  post /api/users/login

router.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    
    console.log("Login request received:");
    console.log("Request body:", req.body);
    console.log("Email:", email);
    console.log("Password:", password);

    // Validate input
    if (!email || !password) {
        console.log("Missing email or password");
        return res.status(400).json({message:"Email and password are required"});
    }

    try {
        // Find the user by the email in the mongodb
        let user=await User.findOne({email});
        console.log(user);
        if(!user) return res.status(400).json({message:"Invalid Credentials"});
        const isMatch=await user.matchPassword(password);
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const payload={user:{id:user._id,role:user.role}};
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'60h'},
            (err,token)=>{
                if(err) throw err;
                //send the user and token in response
                res.json({
                    user:{
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        role:user.role,
                    },
                    token
                })
            }
        );
    } catch (error) {

        console.error(error);
        res.status(500).send("Server Error");
    }
})
// User routes profile
// Get the user info when logged in the website
// Access is private for this api
router.get("/profile",protect,async(req,res)=>{
    res.json(req.user);
})

export default router;
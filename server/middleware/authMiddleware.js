import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to protect routes
const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token=req.headers.authorization.split(" ")[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.user.id).select("-password");
            // remove password form here
            next();
            
        } catch (error) {
            console.error("Token Verification failed",error);
            res.status(401).json({message:"Not authorized,token failed"});
        }
    }
    else{
        res.status(401).json({message:"Not authorized,no token provided"});
    }

}

export default protect;
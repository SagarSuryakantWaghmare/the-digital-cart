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
            
            // Handle different JWT payload structures
            let userId;
            if (decoded.user && decoded.user.id) {
                userId = decoded.user.id;
            } else if (decoded.userId) {
                userId = decoded.userId;
            } else if (decoded.id) {
                userId = decoded.id;
            } else {
                throw new Error("Invalid token structure");
            }
            
            req.user=await User.findById(userId).select("-password");
            
            if (!req.user) {
                return res.status(401).json({message:"User not found"});
            }
            
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

export const admin=(req,res,next)=>{
    if(req.user &&req.user.role==='admin'){
        next();
    }
    else{
        res.status(403).json({message:"Not authorized as an admin"});
    }
}

export default protect;
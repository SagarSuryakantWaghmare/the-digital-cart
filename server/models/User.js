import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:[ /.+\@.+\..+/,"Please enter a valid email address"],
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer",
    },
},
{timestamps:true}

)
// Password Hash middleware
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

// Match user entered password to hashed password
userSchema.methods.matchPassword=async function (enterPassword) {
    if (!enterPassword) {
        throw new Error('Password is required for comparison');
    }
    return await bcrypt.compare(enterPassword,this.password);
}

const User=mongoose.model("User",userSchema);

export default User;
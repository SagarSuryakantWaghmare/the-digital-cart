import dotenv from 'dotenv';
dotenv.config(); // must call config()
import express from "express";
import cors from "cors";
import connectDB from './db';
import userRoutes from "./routes/userRoutes";
const app=express();
app.use(express.json());
app.use(cors());
connectDB();
console.log(process.env.PORT);
const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("This is the backen for the website");
})

// Api routes
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is runnning on the http://localhost:${PORT}`);
})
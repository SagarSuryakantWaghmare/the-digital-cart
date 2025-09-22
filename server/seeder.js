import mongoose from "mongoose";
import dotenv from 'dotenv';
import Product from './models/Product.js';
import User from './models/User.js';
import Cart from "./models/Cart.js";
import products from './data/products.js';
dotenv.config();

// Connect to db
mongoose.connect(process.env.MONGODB_URI);

// Function to seed the data in the mongodb

const seedDate=async ()=>{
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();


        // Create admin users
        const adminUser1 = await User.create({
            name:"Sagar Waghmare",
            email:"sagar@gmail.com",
            password:"sagar@2004",
            role:"admin",
        });

        const adminUser2 = await User.create({
            name:"Admin User",
            email:"admin@gmail.com",
            password:"admins",
            role:"admin",
        });

        // Assign the default user ID to each product
        const userId = adminUser1._id;

        const sampleProducts=products.map((product=>{
            return {...product,user:userId};
        }));

        // Insert the products into the database
        await Product.insertMany(sampleProducts);

        console.log("Product data seeded successfully");
        process.exit();


    } catch (error) {
        console.error("Error seeding the data:",error);
        process.exit(1);
    }
}

seedDate();


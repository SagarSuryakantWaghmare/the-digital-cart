import express from 'express';
import Product from '../models/Product.js';
import protect, {admin} from '../middleware/authMiddleware.js';
const router=express.Router();

// Route Get /api/admin/products
// Get all products (admin only)
// Access private admin
router.get("/",protect,admin,async(req,res)=>{
    try {
        const products=await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

// Route Get /api/admin/products/:id
// Get single product by ID (admin only)
// Access private admin
router.get("/:id",protect,admin,async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(product){
            res.json(product);
        } else {
            res.status(404).json({message:"Product not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})


export default router;
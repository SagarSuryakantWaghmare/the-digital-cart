import express from 'express';

import Product from '../models/Product.js';
import protect from '../middleware/authMiddleware.js';
import { admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes for the Post /api/products
// Create a new Product
// Private admin only

router.post("/", protect, admin, async (req, res) => {
    try {
        const { name, description, price, discountPrice, countInStock, category, brand,
            sizes, colors, collections, material, gender, images, isFeatured, isPublished, tags, dimensions,
            weight, sku,
        } = req.body;

        const product = new Product(
            {
                name, description, price, discountPrice, countInStock, category, brand,
                sizes, colors, collections, material, gender, images, isFeatured, isPublished, tags, dimensions,
                weight, sku,
                user: req.user._id,//admin who created the product
            }
        );
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})

// Route put and for /api/products/:id
// Update a product
router.put("/:id", protect, admin, async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validate ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const { name, description, price, discountPrice, countInStock, category, brand,
            sizes, colors, collections, material, gender, images, isFeatured, isPublished, tags, dimensions,
            weight, sku,
        } = req.body;

        // Find product by id
        const product = await Product.findById(id);
        if (product) {
            // Update product fields
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.gender = gender || product.gender;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;
            // Keep the original user who created the product
            // Don't update the user field as it should remain the original creator
            // Ensure user field is preserved (should already be there, but just in case)
            if (!product.user) {
                product.user = req.user._id; // Use current admin as fallback
            }
            // Save the uploaded product
            const updatedProduct=await product.save();
            res.json(updatedProduct);
        }
        else{
            res.status(404).json({message:"Product not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})


// Detete the user with using id
// Router for using the id
// Private the adming
router.delete("/:id",protect,admin,async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(product){
            // await it and delete form the user
            await product.deleteOne();
            res.json({message:"Product deleted"});
        }
        else{
            res.status(404).json({message:"Product not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error while deleting the product");
    }
})

export default router;
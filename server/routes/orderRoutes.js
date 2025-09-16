import express from 'express';
import Order from '../models/Order.js';
import protect from '../middleware/authMiddleware.js';

const router =express.Router();

// @route get /api/orders/my-orders
//Get logged in user's orders
// access private
router.get("/my-orders",protect,async(req,res)=>{
    try {
        // Find orders for teh authenticated user
        const orders=(await Order.find({user:req.user._id})).toSorted({
            createdAt:-1,
        });//Sort by recent first
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error in fetching the order"});
    }
});

// Route GET /api/orders/:id
// Get order details by id
router.get("/:id",protect,async(req,res)=>{
    try {
        const order=await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );
        if(!order){
            return res.status(404).json({message:"Order not found"});
        }
        // Return the full order details
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Sever error"});
    }
})

export default router;
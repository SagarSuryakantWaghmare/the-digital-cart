import express from 'express';
import Order from '../models/Order.js';
import protect from '../middleware/authMiddleware.js';

const router =express.Router();

// @route get /api/orders/my-orders
//Get logged in user's orders
// access private
router.get("/my-orders",protect,async(req,res)=>{
    try {
        // Find orders for the authenticated user
        const orders = await Order.find({user:req.user._id}).sort({
            createdAt:-1,
        }); // Sort by recent first
        
        res.json({
            success: true,
            orders: orders,
            totalOrders: orders.length
        });
    } catch (error) {
        res.status(500).json({message:"Server Error in fetching the order"});
    }
});

// Route GET /api/orders/:id
// Get order details by id
// Access: Private
router.get("/:id",protect,async(req,res)=>{
    try {       
        const order=await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );
        
        if(!order){
            return res.status(404).json({message:"Order not found"});
        }
        
        // Check if the order belongs to the authenticated user
        if(order.user._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({message:"Unauthorized access to order"});
        }
        
        // Return the full order details
        res.json({
            success: true,
            order: order
        });
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
})

export default router;
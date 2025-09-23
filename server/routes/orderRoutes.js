import express from 'express';
import Order from '../models/Order.js';
import protect from '../middleware/authMiddleware.js';

const router =express.Router();

// @route get /api/orders/my-orders
//Get logged in user's orders
// access private
router.get("/my-orders",protect,async(req,res)=>{
    try {
        console.log('=== FETCHING USER ORDERS ===');
        console.log('User ID:', req.user._id);
        
        // Find orders for the authenticated user
        const orders = await Order.find({user:req.user._id}).sort({
            createdAt:-1,
        }); // Sort by recent first
        
        console.log('Found orders count:', orders.length);
        console.log('Orders:', orders.map(o => ({ id: o._id, total: o.totalPrice, status: o.paymentStatus })));
        
        res.json({
            success: true,
            orders: orders,
            totalOrders: orders.length
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
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
            console.log('Order not found');
            return res.status(404).json({message:"Order not found"});
        }
        
        // Check if the order belongs to the authenticated user
        if(order.user._id.toString() !== req.user._id.toString()) {
            console.log('Unauthorized access attempt');
            return res.status(403).json({message:"Unauthorized access to order"});
        }
        
        console.log('Order found:', order._id);
        // Return the full order details
        res.json({
            success: true,
            order: order
        });
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).json({message:"Server error"});
    }
})

export default router;
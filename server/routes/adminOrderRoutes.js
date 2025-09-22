import express from 'express';
import Order from '../models/Order.js';
import protect, {admin} from '../middleware/authMiddleware.js';

const router=express.Router();

// Route GET /api/admin/orders
// Get all order (admin only)
// Private admin
router.get("/",protect,admin,async(req,res)=>{
    try {
        const orders=await Order.find({}).populate("user","name email");
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

// Router PUT /api/admin/orders/:id
//Update order status
//Private admin
router.put("/:id",protect,admin,async(req,res)=>{
    try {
        const order=await Order.findById(req.params.id).populate("user","name");
        if(order){
          order.status=req.body.status||order.status;
          order.isDelivered=
          req.body.status==="Delivered"?true:order.isDelivered;
          order.deliveredAt=req.body.status==="Delivered"?Date.now():order.deliveredAt();
          const updatedOrder=await order.save();
          res.json(updatedOrder);
        }
        else{
            res.status(404).json({message:"Order not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

// Route delete /api/admin/orders/:id
// Delete an order
// Private admin only
router.delete("/:id",protect,admin,async(req,res)=>{
    try {
        const order=await Order.findById(req.params.id);
        if(order){
            await order.deleteOne();
            res.json({message:"order removed"});
        }
        else{
            res.status(404).json({message:"Order not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

export default router;
import express from 'express';
import Checkout from '../models/Checkout';
import Cart from '../models/Cart';
import Product from '../models/Product';
import Order from '../models/Order';
import protect from '../middleware/authMiddleware';

const route=express.Router();
// @route post /api/checkout
//Create a new checkout session
// Access proivate

route.post("/",protect,async(req,res)=>{
    const{checkoutItems,shippingAddress,paymentMethod,totalPrice}=req.body;
    if(!checkoutItems||checkoutItems.length===0){
        return res.status(400).json({message:"No items in Checkout"})
    }

    try {
        // Create a new checkout session
        const newCheckout =await Checkout.create({
            user:req.user._id,
            checkoutItems:checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus:"Peding",
            isPaid:false,
        });
        console.log(`Checkout created for user: ${req.user._id}`);
        res.status(201).json(newCheckout);
    } catch (error) {
        console.log(`Error creating checkout sessiong`,error);
        res.status(500).json({message:"Server Error"});
    }
})

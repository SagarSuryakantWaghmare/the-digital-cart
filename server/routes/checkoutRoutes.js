import express from 'express';
import Checkout from '../models/Checkout';
import Cart from '../models/Cart';
import Product from '../models/Product';
import Order from '../models/Order';
import protect from '../middleware/authMiddleware';

const router=express.Router();
// @route post /api/checkout
//Create a new checkout session
// Access proivate

router.post("/",protect,async(req,res)=>{
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
});

// Route PUT /api/checkout/:id/pay
// Update checkout to  mark as paid after successfuly payment
// Private access
router.put("/:id/pay",protect,async(req,res)=>{
    const {paymentStatus,paymentDetails}=req.body;
    try {
        const checkout=await Checkout.findById(req.params.id);
        if(!checkout){
            return res.status(404).json({message:"Checkout not found"});
        }

        if(paymentStatus==='paid'){
            checkout.isPaid=true;
            checkout.paymentStatus=paymentStatus;
            checkout.paymentDetails=paymentDetails;
            checkout.paidAt=Date.now();
            await checkout.save();

            res.status(200).json(checkout);
        }
        else{
            res.status(400).json({message:"Invalid payment status"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
    }
})

// route post /api/ checkout/:id/finalize
// Finalize checkout and convert to an order after payment confirmation
// Aces private
router.post("/:id/finalize",protect,async (req,res)=>{
    try {
        const checkout=await Checkout.findById(req.params.id);

        if(!checkout){
            return res.status(404).json({message:"Checkout not found"});
        }
        if(checkout.isPaid &&!checkout.isFinalized){
            // Create final order based on the checkout details
            const finalOrder=await Order.create({
                user:checkout.user,
                orderItems:checkout.orderItems,
                shippingAddress:checkout.shippingAddress,
                paymentMethod:checkout.paymentMethod,
                totalPrice:checkout.totalPrice,
                isPaid:true,
                paidAt:checkout.paidAt,
                isDelivered:false,
                paymentStatus:"paid",
                paymentDetails:checkout.paymentDetails,
            });

            // Mark the checkout as finalized
            checkout.isFinalized=true;
            checkout.finalizedAt=Date.now();
            await checkout.save();

            // Delete the cart associated with the user
            await Cart.findOneAndDelete({user:Checkout.user});
            res.status(201).json(finalOrder);
        }
        else if (checkout.isFinalized){
            res.status(400).json({message:"Checkout already finalized"});
        }
        else{
            res.status(400).json({message:"Checkout is not paid"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
    }
})

export default router;


import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// Helper function to get a cart by user Id or guest Id

const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    }
    else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
}


// route post /api/cart
// add a product to the cart for a guest or logged in user
// Access public
router.post("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        // If the cart exists, update it
        if (cart) {
            const productIndex = cart.products.findIndex((p) => {
                return p.productId.toString() === productId
                    && p.size === size
                    && p.color === color
            });

            if (productIndex > -1) {
                // If the product already exists, update the quantity
                cart.products[productIndex].quantity += quantity;
            }
            else {
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,
                })
            }

            // Recalculate the total price
            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        }
        else {
            // Create a new cart for the guest or user
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        price: product.price,
                        size,
                        color,
                        quantity,

                    },
                ],
                totalPrice: product.price * quantity,
            });
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
})

// Route put /api/cart
//update product quanity in the cart for a guest or logged in user
// access is public
router.put("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        const productIndex = cart.products.findIndex(
            (p) =>
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        )

        if (productIndex > -1) {
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            }
            else {
                cart.products.splice(productIndex, 1);//Remove product if quantity is 0
            }
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        }
        else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }

})

// route delete /api/cart
//Remove a product from the cart
// Access public
router.delete("/", async (req, res) => {
    const { productId, size, color, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId
                && p.size === size && p.color === color
        );
        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity, 0)
            await cart.save();
            return res.status(200).json(cart);
        }
        else {
            return res.status(404).json({ message: "Product not found in cart" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
})


// route get /api/cart
//get logged in user's or guest user's cart
// access public
router.get("/", async (req, res) => {
    const { userId, guestId } = req.query;
    try {
        const cart = await getCart(userId, guestId);
        if (cart) {
            res.json(cart);
        }
        else {
            // Return empty cart structure instead of 404 when cart doesn't exist
            const emptyCart = {
                user: userId || null,
                guestId: guestId || null,
                products: [],
                totalPrice: 0
            };
            res.json(emptyCart);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

// route Post /api/cart/merge
// Merge guest cart into user cart on login
// Private
router.post("/merge", protect, async (req, res) => {
    const { guestId } = req.body;
    try {
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: "Guest cart is empty" });

            }
            if (userCart) {
                // Merge guest cart into the user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(
                        (item) =>
                            item.productId.toString() === guestItem.productId.toString() &&
                            item.size === guestItem.size && item.color === guestItem.color
                    );

                    if (productIndex > -1) {
                        userCart.products[productIndex].quantity += guestItem.quantity;
                    }
                    else {
                        userCart.products.push(guestItem);
                    }
                });

                userCart.totalPrice = userCart.products.reduce((acc, item) => acc + item.price
                    * item.quantity, 0);
                await userCart.save();


                // Remove the guest cart after merging
                try {
                    await Cart.findOneAndDelete({ guestId });
                } catch (error) {
                    console.log("Error deleting the guest cart", error);
                }
                res.status(200).json(userCart);
            }
            else{
                // If the user has no existing cart, assign the guest cart to the user
                guestCart.user=req.user._id;
                guestCart.guestId=undefined;
                await guestCart.save();

                res.status(200).json(guestCart);
            }
        } else{
            if(userCart){
                // Guest cart has already been merged.
                return res.status(200).json(userCart);
            }
            res.status(404).json({message:"Guest cart not found:"});

        }
    } catch (error) {

        // Logging errors
        console.error(500);
        res.status(500).json({message:"Server Error"});
    }
})

export default router;
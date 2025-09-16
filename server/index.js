import dotenv from 'dotenv';
dotenv.config(); // must call config()
import express from "express";
import cors from "cors";
import connectDB from './db/index.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import checkoutRoutes from './routes/checkoutRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import productAdminRoutes from './routes/productAdminRoutes.js';
import adminOrderRoutes from './routes/adminOrderRoutes.js';
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("This is the backen for the website");
})


// Api routes
app.use("/api/users", userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/order",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscriberRoutes);


// Admin routes
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",adminOrderRoutes);

app.listen(PORT, () => {
    console.log(`Server is runnning on the http://localhost:${PORT}`);
})
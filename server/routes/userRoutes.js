import express from 'express';
import User from "../models/User";
import jwt from 'jsonwebtoken';

const router = express.Router();

// Router
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        res.send({ name, email, password });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})


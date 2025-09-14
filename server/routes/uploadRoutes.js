import express from 'express';
import multer from 'multer';
import cloudinary, { v2 } from 'cloudinary';
import streamifier from 'streamifier';
import 'dotenv';
const router = express.Router();
dotenv.config();

//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// multer setup for memory storage

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file Uploaded" });
        }

        // upload to cloudinary
        const streamUpload = (flieBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.upload.upload_stream((error, result) => {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject(error);
                    }
                });

                // Use stramifier to convert file buffer to a stream
                streamifier.createReadStream(flieBuffer).pipe(stream);
            })
        };

        // Call the stream upload function
        const result=await streamUpload(req.file.buffer);

        // Respond with upload image url
        res.json({imageUrl:result.secure_url});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})
export default router;
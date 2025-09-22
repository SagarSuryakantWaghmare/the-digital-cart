# Deployment Guide

## Prerequisites
- Vercel Account (for frontend)
- Render Account (for backend)
- MongoDB Atlas database
- Cloudinary account for image uploads

## Backend Deployment (Render)

### 1. Environment Variables to Set in Render Dashboard:
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://sagar:9KLy8t0KibbrT8TK@thedigitalcart.ohigc47.mongodb.net/?retryWrites=true&w=majority&appName=TheDigitalCart
JWT_SECRET=Cru4/Ua7KKg5rEbnEH8e/RNY3LCR4rYp0UxyluhfBmfUKalHpbfmLvtB9Fq7J5Fi
CLOUDINARY_CLOUD_NAME=sagarnevergiveup
CLOUDINARY_API_KEY=814637938883449
CLOUDINARY_API_SECRET=C8TGCvHLIrR8dlEqdKkT5IY1WAc
CORS_ORIGIN=https://your-vercel-app.vercel.app
```

### 2. Render Setup:
1. Connect your GitHub repository
2. Choose the `server` folder as root directory
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add all environment variables above

## Frontend Deployment (Vercel)

### 1. Environment Variables to Set in Vercel Dashboard:
```
VITE_PAYPAL_CLIENT_ID=AVx2V-qecGAcjTyZ9D6Wtr1B98vb2geVKXpFmAyXM4g3RgGVyaCQyU9NsDUMM1VBlnDNnsAvno9XKVNS
VITE_BACKEND_URL=https://your-render-app.onrender.com
VITE_NODE_ENV=production
```

### 2. Vercel Setup:
1. Connect your GitHub repository
2. Choose the `client` folder as root directory
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add all environment variables above

## Post-Deployment Steps

### 1. Update CORS Origin:
After getting your Vercel URL, update the `CORS_ORIGIN` environment variable in Render with your actual Vercel domain.

### 2. Update Backend URL:
After getting your Render URL, update the `VITE_BACKEND_URL` environment variable in Vercel with your actual Render domain.

### 3. Test the Deployment:
1. Test user registration/login
2. Test product browsing
3. Test cart functionality
4. Test checkout with PayPal
5. Test admin panel access

## Important Notes:
- Use HTTPS URLs for production
- Keep sensitive environment variables secure
- Monitor your MongoDB Atlas usage
- Test all payment flows thoroughly in production
- Ensure CORS is properly configured for your domains

## Troubleshooting:
- Check browser console for CORS errors
- Verify environment variables are set correctly
- Check Render/Vercel build logs for errors
- Test API endpoints directly if frontend fails
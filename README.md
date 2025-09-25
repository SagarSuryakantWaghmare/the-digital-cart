# 🛒 The Digital Cart - Premium E-commerce Platform

A modern, full-stack e-commerce web application built with React.js and Node.js, designed for premium fashion and lifestyle products. Features a complete shopping experience with admin panel, payment processing, and order management.

![Hero Section](./screenshots/HeroSection.png)

## 🌟 Features

### 🛍️ Customer Features
- **Modern Product Catalog** - Browse through curated collections
- **Advanced Filtering** - Filter by category, brand, price, color, and size
- **Shopping Cart** - Add, remove, and manage items
- **Secure Checkout** - Direct payment processing with order confirmation
- **User Authentication** - Register, login, and profile management
- **Order Tracking** - View order history and status
- **Responsive Design** - Optimized for all devices

### 👨‍💼 Admin Features
- **Dashboard Analytics** - Revenue, orders, and product statistics
- **Product Management** - Add, edit, and delete products
- **Order Management** - Track and update order status
- **User Management** - Manage customer accounts
- **Image Upload** - Product image management

## 📸 Screenshots

<div align="center">

### Homepage & Collections
![Collections](./screenshots/AllCollections.png)
*Browse our curated collections*

![Fresh Arrivals](./screenshots/FreshArrivals.png)
*Latest fashion arrivals*

### Admin Dashboard
![Admin Dashboard](./screenshots/AdminDashboard.png)
*Comprehensive admin dashboard*

![Order Management](./screenshots/OrderMangement.png)
*Advanced order tracking*

### User Experience
![Login](./screenshots/Login.png)
*Secure user authentication*

![Profile](./screenshots/ProfilePageUsers.png)
*User profile management*

</div>

## 🚀 Tech Stack

### Frontend
- **React.js 19** - Modern UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icons
- **Sonner** - Toast notifications
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/SagarSuryakantWaghmare/the-digital-cart.git
cd the-digital-cart
```

### 2. Server Setup

```bash
cd server
npm install
```

Create `.env` file in the server directory:
```env
# Database
MONGO_URI=mongodb://localhost:27017/digital-cart
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/digital-cart

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=5000
NODE_ENV=development

# Admin Credentials (for seeding)
ADMIN_EMAIL=admin@digitalcart.com
ADMIN_PASSWORD=admin123

# File Upload (optional - for local development)
UPLOAD_PATH=./uploads
```

Start the server:
```bash
# Seed database with sample data
npm run seed

# Start development server
npm run dev
```

### 3. Client Setup

```bash
cd ../client
npm install
```

Create `.env` file in the client directory:
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5000

# App Configuration
VITE_APP_NAME=The Digital Cart
VITE_APP_VERSION=1.0.0

# Environment
VITE_NODE_ENV=development

# API Endpoints (optional - for development)
VITE_API_TIMEOUT=10000
VITE_ENABLE_CONSOLE_LOGS=true
```

Start the client:
```bash
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:5173/admin

**Default Admin Credentials:**
- Email: `admin@digitalcart.com`
- Password: `admin123`

## 🔧 Environment Variables

### Server (.env)
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGO_URI` | MongoDB connection string | ✅ | - |
| `JWT_SECRET` | JWT signing secret | ✅ | - |

### Client (.env)
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_BACKEND_URL` | Backend API URL | ✅ | - |


## 📁 Project Structure

```
the-digital-cart/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # State management
│   │   └── assets/        # Images and media
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # Database models  
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── data/             # Seed data
│   └── package.json
├── screenshots/          # Application screenshots
└── README.md
```

## 🎯 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/search` - Search products

### Cart & Orders
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `POST /api/checkout` - Create checkout session
- `GET /api/orders/my-orders` - Get user orders

### Admin Routes
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with automatic builds

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Get connection string
3. Update `MONGO_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Sagar Suryakant Waghmare**
- LinkedIn: [Connect with me](https://www.linkedin.com/in/sagar-waghmare-developer)
- GitHub: [@SagarSuryakantWaghmare](https://github.com/SagarSuryakantWaghmare)
- Email: sagarwaghmare@developer.com

## 🙏 Acknowledgments

- Thanks to all the open-source libraries used in this project
- Special thanks to the React and Node.js communities
- Icons provided by Lucide React
- Images sourced from Unsplash

## 📞 Support

If you have any questions or need support, please feel free to:
- Open an issue on GitHub
- Connect with me on LinkedIn
- Send an email

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Sagar Suryakant Waghmare](https://www.linkedin.com/in/sagar-waghmare-developer)

</div>

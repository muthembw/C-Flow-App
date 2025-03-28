# C-Flow-App
# C-FLOW Digital Device Backend

## Overview

C-FLOW Digital Device is a AI-Powered wireless multi-function TENS (Transcutaneous Electrical Nerve Stimulation) device designed to provide relief from menstrual cramps, endometriosis pain, and other associated discomforts. This backend application serves as the API for managing users, products, orders, reviews, and sessions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Product management (CRUD operations)
- Order management
- Review system for products
- Cart management
- Admin functionalities

## Technologies

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv (for environment variable management)
- JSON Web Tokens (JWT) for authentication
- Cloudinary (for image uploads)

## Folder Structure
backend/ ├── config/ # Configuration files │ ├── db.js # Database connection setup │ ├── keys.js # API keys and secrets │ └── cloudinary.js # Cloudinary configuration ├── controllers/ # Controllers for handling requests │ ├── authController.js # Authentication logic │ ├── userController.js # User-related logic │ ├── productController.js # Product-related logic │ ├── orderController.js # Order-related logic │ ├── reviewController.js # Review-related logic │ ├── cartController.js # Cart-related logic │ └── adminController.js # Admin-related logic ├── middleware/ # Middleware functions │ ├── authMiddleware.js # Authentication middleware │ ├── errorMiddleware.js # Error handling middleware │ ├── validateMiddleware.js # Input validation middleware │ └── uploadMiddleware.js # File upload middleware ├── models/ # Database models │ ├── User.js # User model │ ├── Product.js # Product model │ ├── Order.js # Order model │ ├── Review.js # Review model │ ├── Cart.js # Cart model │ └── Admin.js # Admin model ├── routes/ # API route definitions │ ├── authRoutes.js # Authentication routes │ ├── userRoutes.js # User-related routes │ ├── productRoutes.js # Product-related routes │ ├── orderRoutes.js # Order-related routes │ ├── reviewRoutes.js # Review-related routes │ ├── cartRoutes.js # Cart-related routes │ └── adminRoutes.js # Admin-related routes ├── utils/ # Utility functions │ ├── generateToken.js # Token generation utility │ ├── sendEmail.js # Email sending utility │ ├── formatResponse.js # Response formatting utility │ └── logger.js # Logging utility ├── seeders/ # Seed data for initial setup │ ├── seedUsers.js # Seed users data │ └── seedProducts.js # Seed products data ├── .env # Environment variables ├── .gitignore # Git ignore file ├── server.js # Main entry point for the application ├── package.json # Project metadata and dependencies └── README.md # Project documentation

Run
Copy code

## Installation

1. Clone the repository:

   ```bash
   git clone  https://github.com/muthembw/C-Flow-App.git
   cd cflow-digital-device-backend
Install the dependencies:

bash
Run
Copy code
npm install
Create a .env file in the root directory and add your environment variables. Example:

Run
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cflow
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
Usage
Start the server:

bash
Run
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
Authentication Routes
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in an existing user
User Routes
GET /api/users/:id: Get user details

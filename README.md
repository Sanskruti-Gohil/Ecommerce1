# 🛒 E-Commerce Platform

### A full-stack e-commerce application built with React, Express, and MongoDB.

This project is a full-stack e-commerce platform that enables users to browse products, create accounts, manage shopping carts, and explore an online shopping experience. It also includes an admin panel for product management, allowing administrators to add, update, and manage products with image uploads.

The application demonstrates the integration of a modern React frontend with an Express.js backend, MongoDB database, and JWT-based user authentication.

---

## ✨ Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Product Browsing
* Shopping Cart Management
* Responsive User Interface

### 🛍 Product Management

* View product catalog
* Category-based products
* Product images
* Price management

### 👨‍💼 Admin Features

* Add new products
* Upload product images
* Remove existing products
* Manage product inventory

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

### Database

* MongoDB
* Mongoose

---

## 🏗 System Architecture

```text
                Customer
                    │
                    ▼
             React Frontend
                    │
              REST API Calls
                    ▼
            Express.js Backend
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 JWT Authentication        Product APIs
        │                       │
        └───────────┬───────────┘
                    ▼
               MongoDB Database
```

---

## 📂 Project Structure

```text
Ecommerce1/
│
├── src/                 # React Frontend
├── public/
├── backend/
│   ├── index.js
│   ├── upload/
│   └── package.json
│
├── admin/               # Admin Dashboard
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Sanskruti-Gohil/Ecommerce1.git
```

---

### Install Frontend Dependencies

```bash
npm install
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Start MongoDB

Ensure MongoDB is running locally.

Default connection:

```text
mongodb://localhost:27017/Ecommerce
```

---

### Run the Backend

```bash
cd backend
node index.js
```

Backend runs on:

```text
http://localhost:4000
```

---

### Run the Frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 📌 API Highlights

* User Registration
* User Login
* Product Upload
* Product Management
* Shopping Cart APIs
* Image Upload using Multer

---

## 💡 Learning Outcomes

Through this project, I gained hands-on experience in building a complete full-stack web application. It strengthened my understanding of RESTful APIs, JWT-based authentication, MongoDB integration, image uploads, and connecting frontend and backend components into a functional e-commerce system.

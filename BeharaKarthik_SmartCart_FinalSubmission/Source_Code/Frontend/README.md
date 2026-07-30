# 🛒 SmartCart – React Frontend (Phase 1 Submission)

A modern, responsive Single-Page Application (SPA) for the **SmartCart** E-Commerce platform, built using **React.js**, **Context API**, **React Router v5**, and **Axios**.

---

## 📌 Project Overview

**SmartCart** is a full-stack E-Commerce platform designed to deliver a seamless online shopping experience. This repository contains the complete frontend client application. It communicates asynchronously with the Spring Boot backend REST API to perform user authentication, product catalog operations, cart management, checkout execution, order placement, and order status tracking.

---

## ✨ Key Features

- **🔑 User Authentication**: User registration and login flow with state persistence in `localStorage`.
- **🏷️ Product Catalog**: Paginated product grid view with category tags, pricing, and detail modals.
- **📦 Category Management**: Browse products by category with responsive card layouts.
- **🔍 Real-Time Search & Sorting**: Live navbar keyword search bar and price sorting (Low to High, High to Low, Name A-Z).
- **🛒 Shopping Cart Drawer**: Slide-over cart drawer with quantity increments/decrements, item removal, live subtotal calculations, and dynamic navbar badge counter.
- **💳 Checkout & Order Processing**: Multi-step checkout form collecting shipping addresses, payment method options (Credit Card, COD, UPI), and generating instant order receipts.
- **📜 User Order History (`/orders`)**: Dedicated customer dashboard to track past orders, order status tags (`PENDING`, `PROCESSING`, `SHIPPED`, `DELIVERED`, `CANCELLED`), item details, and total amounts.
- **🛡️ Admin Order Dashboard (`/admin/orders`)**: Admin control panel for reviewing customer orders and updating status dropdowns in real time.
- **🎨 Glassmorphism Dark UI**: Modern responsive design tokens with CSS Grid and smooth animations.

---

## 🛠️ Technology Stack

| Layer / Library | Technology |
|---|---|
| **Frontend Framework** | React.js (v16.12+) |
| **Routing** | React Router DOM (v5.1+) |
| **State Management** | React Context API + `useReducer` Hook |
| **HTTP Client** | Axios (v0.21+) |
| **Styling & Design System** | Vanilla CSS3 (Design Tokens) + Semantic UI React |
| **Markup & Scripting** | HTML5, JavaScript (ES6+) |
| **Package Manager** | npm |

---

## 📁 Folder Structure

```
ecommerce-frontend/
├── public/                     ← Static HTML entry point & web assets
│   ├── favicon.ico
│   ├── index.html              ← HTML5 root template
│   ├── manifest.json
│   └── robots.txt
│
└── src/                        ← React Source Code
    ├── components/             ← Reusable UI Components
    │   ├── AddCategoryForm.js  ← Admin add category modal
    │   ├── AddProductForm.js   ← Admin add product modal
    │   ├── CartModal.js        ← Shopping cart drawer & badge
    │   ├── Category.js         ← Category card component
    │   ├── Detail.js           ← Product detail modal
    │   ├── Navbar.js           ← Glassmorphism navbar with search
    │   ├── Pagination.js       ← Reusable page pagination
    │   └── Product.js          ← Product card with "Add to Cart"
    │
    ├── config/                 ← Context API & Axios Client
    │   ├── apiCurrency.js      ← Currency conversion client
    │   ├── axios.js            ← Axios base URL configuration
    │   ├── connector.js        ← Global Context Connector Provider
    │   ├── context.js          ← React Context object
    │   ├── reducer.js          ← State reducer logic
    │   └── values.js           ← Reducer action constant tags
    │
    ├── pages/                  ← Page Views (Routes)
    │   ├── AdminOrders.js      ← Admin order management dashboard
    │   ├── Categories.js       ← Category listing page
    │   ├── Checkout.js         ← Checkout form & order confirmation
    │   ├── Home.js             ← Hero banner & landing page
    │   ├── Login.js            ← User login page
    │   ├── Orders.js           ← Customer order history page
    │   ├── Products.js         ← Product listing page with search/sort
    │   └── Signin.js           ← User registration page
    │
    ├── App.js                  ← Main Router application entry
    ├── index.js                ← DOM rendering entry point
    └── smartcart.css           ← Custom global CSS design system
```

---

## ⚡ Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

---

## 🚀 Installation & Running Instructions

### 1. Extract & Navigate to Project Directory
```bash
cd ecommerce-frontend
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will open automatically in your browser at:
`http://localhost:3000`

> **Note**: Ensure the Spring Boot backend server is running on `http://localhost:8080` for API data connectivity.

---

## 👤 Author & Submission Details

- **Student Name**: Behara Karthik
- **Project**: SmartCart – Full Stack E-Commerce Shopping Website
- **Phase**: Phase 1 Submission (Frontend & Architecture)
- **Year**: 2026

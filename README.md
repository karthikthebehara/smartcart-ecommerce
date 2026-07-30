# 🛒 SmartCart – Full Stack E-Commerce Shopping Website

A complete, enterprise-grade full-stack E-Commerce web application developed using **Spring Boot 3.3** (Java 21 backend) and **React.js** (frontend), integrated with a **MySQL** database.

---

## 📌 Project Overview

**SmartCart** is an end-to-end E-Commerce shopping platform designed for modern online retail. It seamlessly connects a dynamic single-page application (SPA) client to a high-performance RESTful API backend.

### Key Capabilities:
- **👤 User Authentication**: Registration, Login, and Session State Management.
- **🏷️ Product Catalog**: Paginated grid view with dynamic category tags and detail modals.
- **📦 Category Management**: Filter and browse products by categories.
- **🔍 Real-Time Search & Price Sorting**: Navbar live search bar and price sorting (Low-to-High, High-to-Low, Name A-Z).
- **🛒 Shopping Cart System**: Slide-over drawer cart with quantity management, item removal, live total calculations, and dynamic navbar badge counter.
- **💳 Checkout & Order Processing**: Multi-step checkout collecting shipping address, payment selection (Card, COD, UPI), and order placement.
- **📜 Customer Order History (`/orders`)**: Order timeline with status tags (`PENDING`, `PROCESSING`, `SHIPPED`, `DELIVERED`, `CANCELLED`).
- **🛡️ Admin Order Dashboard (`/admin/orders`)**: Admin control panel for managing customer orders and updating status dropdowns in real time.

---

## 🛠️ Technologies Used

### Frontend Presentation Layer
- **Framework**: React.js (v16.12+)
- **Routing**: React Router DOM (v5.1+)
- **State Management**: React Context API + `useReducer` Hook
- **HTTP Client**: Axios (v0.21+)
- **UI & Design**: Custom Glassmorphism CSS3 Design System + Semantic UI React
- **Deployment**: Vercel

### Backend Service Layer
- **Language**: Java 21 (LTS)
- **Framework**: Spring Boot 3.3.0
- **Data Access / ORM**: Spring Data JPA (Hibernate)
- **Build Tool**: Apache Maven (Wrapper Included)
- **Application Server**: Embedded Apache Tomcat 10.1
- **Deployment**: Render / Railway / Docker Container

### Database Layer
- **Relational DBMS**: MySQL Server 8.0+
- **Database Cloud Deployment**: Railway MySQL / Aiven MySQL

---

## 🏗️ System Architecture

```
                    ┌────────────────────────┐
                    │      User Browser      │
                    └───────────┬────────────┘
                                │
                                ▼
         ┌───────────────────────────────────────────────┐
         │     React Single-Page Application (SPA)      │
         │           (Hosted on Vercel Cloud)            │
         └──────────────────────┬────────────────────────┘
                                │
                        REST API (Axios)
                                │
                                ▼
         ┌───────────────────────────────────────────────┐
         │           Spring Boot REST Backend            │
         │           (Hosted on Render Cloud)            │
         └──────────────────────┬────────────────────────┘
                                │
                        Spring Data JPA
                                │
                                ▼
         ┌───────────────────────────────────────────────┐
         │             MySQL Relational Database         │
         │           (Hosted on Railway MySQL)           │
         └───────────────────────────────────────────────┘
```

---

## 📁 Integrated Project Folder Structure

```
SmartCart/
├── .mvn/                                 ← Maven Wrapper dependencies
│   └── wrapper/
│       ├── MavenWrapperDownloader.java
│       ├── maven-wrapper.jar
│       └── maven-wrapper.properties
│
├── src/                                  ← Spring Boot Backend Source Code
│   └── main/
│        ├── java/com/devrobot/springbootecommerce/
│        │    ├── config/                 ← CORS & Exception Handlers
│        │    ├── controller/             ← REST API Controllers
│        │    ├── model/                  ← JPA Entities
│        │    ├── repository/             ← Spring Data Repositories
│        │    ├── resource/               ← REST API Endpoints
│        │    ├── service/                ← Business Logic Services
│        │    └── SpringBootEcommerceApplication.java
│        │
│        └── resources/
│             └── application.properties  ← Database & Spring Configuration
│
├── ecommerce-frontend/                   ← React.js Frontend Application
│   ├── public/                           ← Static Web Assets & HTML5 Template
│   ├── src/                              ← React Components & Context State
│   │   ├── components/                   ← Reusable UI Components
│   │   ├── config/                       ← Context API Connector, Reducer, Axios Client
│   │   ├── pages/                        ← Route Page Views (Home, Products, Checkout, Orders)
│   │   ├── App.js                        ← Router Application Entry
│   │   └── index.js                      ← React Render Entry
│   │
│   ├── .env.example                      ← Production Environment Variables Template
│   ├── .gitignore                        ← Frontend Git Exclusions
│   ├── vercel.json                       ← Vercel Routing Configuration
│   ├── package.json                      ← Frontend Dependencies
│   └── README.md                         ← Frontend Documentation
│
├── Dockerfile                            ← Multi-stage Containerization Config
├── .gitignore                            ← Root Git Exclusions
├── mvnw                                  ← Maven Linux/macOS Wrapper
├── mvnw.cmd                              ← Maven Windows Wrapper
├── pom.xml                               ← Backend Dependencies & POM
└── README.md                             ← Main Integrated Documentation
```

---

## 🔑 Environment Variables Setup

### Backend Environment Variables (`Render` / `Railway`)

| Variable | Description | Default Local Value |
| :--- | :--- | :--- |
| `SPRING_DATASOURCE_URL` | MySQL Connection String | `jdbc:mysql://localhost:3306/ecommerce` |
| `SPRING_DATASOURCE_USERNAME` | MySQL Username | `root` |
| `SPRING_DATASOURCE_PASSWORD` | MySQL Password | `root` |
| `SERVER_PORT` / `PORT` | Backend Server Port | `8080` |

### Frontend Environment Variables (`Vercel`)

| Variable | Description | Production Example |
| :--- | :--- | :--- |
| `REACT_APP_API_URL` | Spring Boot REST API Endpoint Base URL | `https://smartcart-backend.onrender.com/api/` |

---

## 🗄️ Local Development & Running Instructions

### 1. Database Setup (MySQL)
1. Ensure **MySQL Server** is running locally on `localhost:3306`.
2. Configure credentials in `src/main/resources/application.properties` or set environment variables.

### 2. Start the Spring Boot Backend (Port 8080)
Open a terminal in the root directory:
```bash
# Windows:
.\mvnw.cmd spring-boot:run

# Linux / macOS:
./mvnw spring-boot:run
```
> 🟢 **Backend API URL**: `http://localhost:8080/api/`

### 3. Start the React Frontend (Port 3000)
Open a second terminal window in the `ecommerce-frontend` directory:
```bash
cd ecommerce-frontend
npm install
npm start
```
> 🌐 **Frontend Application URL**: `http://localhost:3000`

---

## 🌐 Production Deployment Guide

### Step 1: Database Setup on Railway MySQL
1. Log in to [Railway.app](https://railway.app/).
2. Create a **New Project** ➔ Select **Provision MySQL**.
3. Copy the MySQL Connection URL, Username, Password, and Database Name from the **Variables** tab.

### Step 2: Backend Deployment on Render
1. Log in to [Render.com](https://render.com/).
2. Click **New +** ➔ Select **Web Service**.
3. Connect your GitHub Repository: `https://github.com/karthikthebehara/smartcart-ecommerce`
4. Set build settings:
   - **Environment**: `Docker` or `Java`
   - **Build Command**: `./mvnw clean package -DskipTests`
   - **Start Command**: `java -jar target/spring-boot-ecommerce-0.0.1-SNAPSHOT.jar`
5. In **Environment Variables**, add:
   - `SPRING_DATASOURCE_URL`: `jdbc:mysql://<railway-host>:<port>/railway?useSSL=false`
   - `SPRING_DATASOURCE_USERNAME`: `<railway-user>`
   - `SPRING_DATASOURCE_PASSWORD`: `<railway-password>`
6. Deploy service and copy your public backend domain (e.g. `https://smartcart-backend.onrender.com`).

### Step 3: Frontend Deployment on Vercel
1. Log in to [Vercel.com](https://vercel.com/).
2. Click **Add New Project** ➔ Import `smartcart-ecommerce` repository.
3. Set **Root Directory** to `ecommerce-frontend`.
4. In **Environment Variables**, set:
   - `REACT_APP_API_URL` = `https://smartcart-backend.onrender.com/api/`
5. Click **Deploy**. Vercel will build and host your Single Page Application.

---

## 📡 REST API Endpoints Summary

| Operation | HTTP Method | Endpoint |
| :--- | :--- | :--- |
| **Get Catalog** | `GET` | `/api/products/all` |
| **Get Categories** | `GET` | `/api/categories/all` |
| **User Login** | `POST` | `/api/users/login` |
| **User Register** | `POST` | `/api/users/add` |
| **Create Order** | `POST` | `/api/orders/create` |
| **User Orders** | `GET` | `/api/orders/user/{username}` |
| **Admin All Orders** | `GET` | `/api/orders/all` |
| **Update Order Status** | `PUT` | `/api/orders/{id}/status` |

---

## 👤 Author & Repository Information

- **Student Name**: Behara Karthik
- **GitHub Repository**: [https://github.com/karthikthebehara/smartcart-ecommerce](https://github.com/karthikthebehara/smartcart-ecommerce)
- **Year**: 2026

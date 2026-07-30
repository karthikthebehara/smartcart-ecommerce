# 🛒 SmartCart – Full Stack E-Commerce Shopping Website

A complete, enterprise-grade full-stack E-Commerce web application developed using **Spring Boot 3.3** (Java 21 backend) and **React.js** (frontend), integrated with a **MySQL** database.

---

## 📸 Project Overview

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

### Frontend Layer
- **Framework**: React.js (v16.12+)
- **Routing**: React Router DOM (v5.1+)
- **State Management**: React Context API + `useReducer` Hook
- **HTTP Client**: Axios (v0.21+)
- **UI & Design**: Custom Glassmorphism CSS3 Design System + Semantic UI React

### Backend Layer
- **Language**: Java 21 (LTS)
- **Framework**: Spring Boot 3.3.0
- **Data Access / ORM**: Spring Data JPA (Hibernate)
- **Build Tool**: Apache Maven (Wrapper Included)
- **Application Server**: Embedded Apache Tomcat 10.1

### Database Layer
- **Relational DBMS**: MySQL Server 8.0+

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
         │             (Running on Port 3000)            │
         └──────────────────────┬────────────────────────┘
                                │
                        REST API (Axios)
                                │
                                ▼
         ┌───────────────────────────────────────────────┐
         │           Spring Boot REST Backend            │
         │             (Running on Port 8080)            │
         └──────────────────────┬────────────────────────┘
                                │
                        Spring Data JPA
                                │
                                ▼
         ┌───────────────────────────────────────────────┐
         │             MySQL Relational Database         │
         │             (Running on Port 3306)            │
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
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/                              ← React Components & Context State
│   │   ├── components/                   ← Reusable UI Components (Navbar, CartModal, Product, etc.)
│   │   ├── config/                       ← Context API Connector, Reducer, Axios Instance
│   │   ├── pages/                        ← Route Page Views (Home, Products, Checkout, Orders, etc.)
│   │   ├── App.js                        ← Router Application Entry
│   │   ├── index.js                      ← React Render Entry
│   │   └── smartcart.css                 ← Global Design System
│   │
│   ├── .gitignore
│   ├── package.json                      ← Frontend Dependencies
│   ├── package-lock.json
│   └── README.md                         ← Frontend Documentation
│
├── .gitignore                            ← Git Ignore Configuration
├── mvnw                                  ← Maven Linux/macOS Wrapper
├── mvnw.cmd                              ← Maven Windows Wrapper
├── pom.xml                               ← Backend Dependencies & POM
└── README.md                             ← Main Integrated Documentation
```

---

## 🗄️ Database Setup

1. Ensure **MySQL Server** is running on `localhost:3306`.
2. Configure credentials in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

*(Spring Data JPA will automatically create the `ecommerce` database schema and entity tables on first launch).*

---

## 🚀 Running the Integrated Application

### 1. Start the Spring Boot Backend (Port 8080)

Open a terminal in the root directory:

**Windows:**
```powershell
.\mvnw.cmd spring-boot:run
```

**Linux / macOS:**
```bash
./mvnw spring-boot:run
```

> 🟢 **Backend API URL**: `http://localhost:8080/api/`

---

### 2. Start the React Frontend (Port 3000)

Open a second terminal window in the root directory:

```bash
cd ecommerce-frontend
npm install
npm start
```

> 🌐 **Frontend Application URL**: `http://localhost:3000`

---

## 📡 API Communication Overview

The React client communicates with the Spring Boot backend via Axios at `http://localhost:8080/api`:

| Operation | Frontend Action | HTTP Method & Endpoint |
|---|---|---|
| **Products** | Fetch catalog | `GET /api/products/all` |
| **Search** | Filter product list | `GET /api/products/all` + client filter |
| **User** | Login / Profile | `GET /api/users/{username}` |
| **Auth** | Register User | `POST /api/users/add` |
| **Checkout** | Create Order | `POST /api/orders/create` |
| **Orders** | Customer Orders | `GET /api/orders/user/{username}` |
| **Admin** | All Orders | `GET /api/orders/all` |
| **Admin** | Update Status | `PUT /api/orders/{id}/status` |

---

## 👤 Author & Submission Details

- **Student Name**: Behara Karthik
- **Project Title**: SmartCart – Full Stack E-Commerce Shopping Website
- **Phase**: Integrated Full-Stack Project Submission
- **Year**: 2026

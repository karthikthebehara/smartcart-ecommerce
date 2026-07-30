# SmartCart – Full Stack E-Commerce Shopping Website
### Major Project Submission (2025–2026)
**Developer**: Behara Karthik  
**Degree**: Bachelor of Technology (B.Tech) in Computer Science & Engineering  

---

## 📌 Project Overview
**SmartCart** is an enterprise-grade full-stack electronic shopping platform engineered using client-server multi-tiered architecture. The application decouples the Single Page Application (SPA) presentation interface from backend microservice processing, offering real-time product search, live price sorting, persistent cart drawer management, multi-step checkout processing, customer order history tracking, and administrative order controls.

---

## 🛠️ Technology Stack

### Frontend Presentation Layer
- **Framework**: React.js (v16+)
- **Core Languages**: HTML5, CSS3, JavaScript (ES6+)
- **HTTP Client**: Axios (v0.21+)
- **Routing**: React Router DOM (v5.1+)
- **State Management**: Context API + localStorage

### Backend Service Layer
- **Runtime**: Java 21 (LTS)
- **Framework**: Spring Boot 3.3.0
- **Data Access**: Spring Data JPA (Hibernate ORM)
- **Build Tool**: Maven (v3.9+)
- **Application Server**: Embedded Apache Tomcat (Port 8080)

### Persistence Layer
- **Database Engine**: MySQL Server 8.0+
- **Database Name**: `ecommerce`

---

## 📁 Directory Structure
```text
BeharaKarthik_SmartCart_FinalSubmission/
 ├── Documentation/
 │    ├── SmartCart_Output_Explanation.docx
 │    ├── SmartCart_Output_Explanation.pdf
 │    ├── SmartCart_Major_Project_Documentation_bbd1.docx
 │    ├── SmartCart_Major_Project_Documentation_bbd1.pdf
 │    └── SmartCart_Software_Testing_Report.docx
 ├── Database/
 │    └── ecommerce.sql
 ├── Source_Code/
 │    ├── Backend/       (Spring Boot Java Maven Project)
 │    └── Frontend/      (React.js Single Page Application)
 └── README.md
```

---

## 🚀 Installation & Running Instructions

### 1. Database Setup (MySQL)
1. Open **MySQL Workbench** or command line.
2. Import and execute the SQL file located at:
   ```bash
   Database/ecommerce.sql
   ```
3. Verify that database `ecommerce` and tables (`user`, `product`, `category`, `customer_order`, `order_item`) are created.

---

### 2. Backend Server Execution (Spring Boot)
1. Navigate to the Backend source directory:
   ```bash
   cd Source_Code/Backend
   ```
2. Verify database connection credentials in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce?createDatabaseIfNotExist=true
   spring.datasource.username=root
   spring.datasource.password=root
   ```
3. Build and launch the Spring Boot application:
   ```bash
   mvn clean spring-boot:run
   ```
4. The backend server will start on: **`http://localhost:8080`**

---

### 3. Frontend Client Execution (React.js)
1. Navigate to the Frontend source directory:
   ```bash
   cd Source_Code/Frontend
   ```
2. Install node dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The client web application will automatically open in your default browser at: **`http://localhost:3000`**

---

## 🔑 REST API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/products/all` | Fetch all catalog products |
| **GET** | `/api/categories/all` | Fetch product categories |
| **POST** | `/api/users/login` | Authenticate user credentials |
| **POST** | `/api/users/register` | Register new user account |
| **POST** | `/api/orders/create` | Submit checkout & create order |
| **GET** | `/api/orders/user/{username}` | Retrieve customer order history |
| **GET** | `/api/orders/all` | Retrieve all orders (Admin view) |
| **PUT** | `/api/orders/{id}/status` | Update order status tag (Admin control) |

---

## 🏆 Project Author
**Behara Karthik**  
Department of Computer Science & Engineering  
School of Engineering & Technology (Academic Year 2025–2026)

# 🛒 SmartCart – Full Stack E-Commerce Shopping Website

A professional, full-stack E-Commerce web application built as a college mini project using **Spring Boot** (backend) and **React** (frontend), connected to a **MySQL** database.

---

## 📸 Project Overview

**SmartCart** is a complete E-Commerce platform featuring:
- User authentication (Login & Registration)
- Product catalog with image support
- Category management
- Admin panel for adding products and categories
- Paginated product/category listings
- Responsive, mobile-friendly dark UI

---

## 🛠️ Technology Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Backend   | Java 21, Spring Boot 3.3, Maven   |
| ORM       | Spring Data JPA (Hibernate)       |
| Database  | MySQL                             |
| Frontend  | React 16, JavaScript (ES6+)       |
| UI Library| Semantic UI React                  |
| HTTP      | Axios                             |
| Routing   | React Router DOM v5               |

---

## 🏗️ Architecture

```
SmartCart
├── src/                          ← Spring Boot Backend (Java)
│   └── main/
│       ├── java/com/devrobot/springbootecommerce/
│       │   ├── model/            ← JPA Entities (Product, Category, User)
│       │   ├── repository/       ← Spring Data Repositories
│       │   └── resource/         ← REST Controllers
│       └── resources/
│           └── application.properties
│
└── ecommerce-frontend/           ← React Frontend
    └── src/
        ├── components/           ← Reusable UI components
        ├── config/               ← Axios, Context API, Reducer
        ├── pages/                ← Route-level pages
        └── smartcart.css         ← Global design system
```

---

## 🚀 Getting Started

### Prerequisites

- [Java 21](https://adoptium.net/)
- [Node.js 14+](https://nodejs.org/)
- [MySQL Server](https://dev.mysql.com/downloads/)
- [Maven](https://maven.apache.org/) (or use the included `mvnw` wrapper)

---

### 1. Configure the Database

Edit `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce?createDatabaseIfNotExist=true...
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

### 2. Create the Database

```bash
mysql -u root -p
```

```sql
CREATE DATABASE ecommerce;
```

### 3. Start the Spring Boot Backend

```bash
./mvnw spring-boot:run
```

The API will be available at: `http://localhost:8080/api/`

### 4. (Optional) Create an Admin User

```sql
USE ecommerce;
INSERT INTO user (username, email, is_admin, password)
VALUES ('admin', 'admin@smartcart.com', true, 'admin123');
```

### 5. Start the React Frontend

```bash
cd ecommerce-frontend
npm install
npm start
```

The frontend will be available at: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| GET    | `/api/products/all`    | List all products       |
| POST   | `/api/products/add`    | Add a new product       |
| GET    | `/api/categories/all`  | List all categories     |
| POST   | `/api/categories/add`  | Add a new category      |
| GET    | `/api/users/{username}`| Get user by username    |
| POST   | `/api/users/add`       | Register a new user     |

---

## 🎨 UI Features

- **Dark glassmorphism navbar** with SmartCart branding
- **Hero banner** with animated gradient background
- **Featured Products** section on the home page
- **Why Choose Us** feature cards section
- **Responsive CSS Grid** product/category layouts
- **Modern auth pages** with glassmorphism cards
- **Hover animations** on all product/category cards
- **Professional footer** with project attribution

---

## 📁 Frontend Source Files

| File | Purpose |
|---|---|
| `src/smartcart.css` | Global design system (CSS tokens, components) |
| `src/App.js` | Root component with routing |
| `src/pages/Home.js` | Landing page with hero & features |
| `src/pages/Products.js` | Paginated product listing |
| `src/pages/Categories.js` | Category listing |
| `src/pages/Login.js` | User login |
| `src/pages/Signin.js` | User registration |
| `src/components/Navbar.js` | SmartCart navigation bar |
| `src/components/Product.js` | Product card component |
| `src/components/Category.js` | Category card component |
| `src/components/Detail.js` | Product detail modal |
| `src/components/AddProductForm.js` | Admin: add product modal |
| `src/components/AddCategoryForm.js` | Admin: add category modal |
| `src/config/connector.js` | Context API + all API calls |
| `src/config/axios.js` | Axios base URL config |

---

## 📚 Libraries Used

- [React](https://reactjs.org/) – Frontend framework
- [Semantic UI React](https://react.semantic-ui.com/) – UI component library
- [Spring Boot](https://spring.io/projects/spring-boot) – Backend framework
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) – ORM layer
- [Axios](https://axios-http.com/) – HTTP client
- [React Router DOM](https://reactrouter.com/) – Client-side routing

---

## 📄 License

Apache 2.0 — see [LICENSE](LICENSE).

---

> **SmartCart** · Full Stack E-Commerce Shopping Website  
> Developed using **Spring Boot + React** · College Mini Project · © 2026

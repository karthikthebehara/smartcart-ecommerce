const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = 'd:/projects/spring-boot-ecommerce';
const packageDir = path.join(rootDir, 'BeharaKarthik_SmartCart_FinalSubmission');
const zipPath = path.join(rootDir, 'BeharaKarthik_SmartCart_FinalSubmission.zip');

console.log('1. Cleaning up any previous build artifact...');
if (fs.existsSync(packageDir)) {
  fs.rmSync(packageDir, { recursive: true, force: true });
}
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Create Folder Structure
fs.mkdirSync(packageDir, { recursive: true });
fs.mkdirSync(path.join(packageDir, 'Documentation'), { recursive: true });
fs.mkdirSync(path.join(packageDir, 'Database'), { recursive: true });
fs.mkdirSync(path.join(packageDir, 'Source_Code', 'Backend'), { recursive: true });
fs.mkdirSync(path.join(packageDir, 'Source_Code', 'Frontend'), { recursive: true });

console.log('2. Copying Documentation files...');
const docSrcDir = path.join(rootDir, 'ecommerce-frontend');
const docTargetDir = path.join(packageDir, 'Documentation');

const docsToCopy = [
  'SmartCart_Output_Explanation.docx',
  'SmartCart_Output_Explanation.pdf',
  'SmartCart_Major_Project_Documentation_bbd1.docx',
  'SmartCart_Major_Project_Documentation_bbd1.pdf',
  'SmartCart_Software_Testing_Report.docx'
];

docsToCopy.forEach(docFile => {
  const src = path.join(docSrcDir, docFile);
  const dst = path.join(docTargetDir, docFile);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    console.log(` - Copied: ${docFile}`);
  } else {
    console.warn(` - Warning: ${docFile} not found in frontend directory`);
  }
});

console.log('3. Generating Database script ecommerce.sql...');
const sqlContent = `-- ========================================================
-- SmartCart - Full Stack E-Commerce Shopping Website
-- Database DDL Schema & Seed Data Dump (MySQL 8.0+)
-- Author: Behara Karthik (B.Tech Major Project)
-- ========================================================

CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- --------------------------------------------------------
-- Table structure for table \`user\`
-- --------------------------------------------------------
DROP TABLE IF EXISTS \`user\`;
CREATE TABLE \`user\` (
  \`username\` varchar(255) NOT NULL,
  \`email\` varchar(255) NOT NULL,
  \`password\` varchar(255) NOT NULL,
  \`is_admin\` boolean DEFAULT FALSE,
  PRIMARY KEY (\`username\`),
  UNIQUE KEY \`uk_user_email\` (\`email\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table \`category\`
-- --------------------------------------------------------
DROP TABLE IF EXISTS \`category\`;
CREATE TABLE \`category\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) NOT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table \`product\`
-- --------------------------------------------------------
DROP TABLE IF EXISTS \`product\`;
CREATE TABLE \`product\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) NOT NULL,
  \`description\` varchar(1000) DEFAULT NULL,
  \`price\` double NOT NULL,
  \`weight\` double DEFAULT NULL,
  \`picture1\` varchar(500) DEFAULT NULL,
  \`picture2\` varchar(500) DEFAULT NULL,
  \`picture3\` varchar(500) DEFAULT NULL,
  \`category_id\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`fk_product_category\` (\`category_id\`),
  CONSTRAINT \`fk_product_category\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\` (\`id\`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table \`customer_order\`
-- --------------------------------------------------------
DROP TABLE IF EXISTS \`customer_order\`;
CREATE TABLE \`customer_order\` (
  \`id\` bigint NOT NULL AUTO_INCREMENT,
  \`username\` varchar(255) NOT NULL,
  \`order_date\` varchar(255) NOT NULL,
  \`total_amount\` double NOT NULL,
  \`status\` varchar(255) NOT NULL,
  \`shipping_address\` varchar(500) NOT NULL,
  \`payment_method\` varchar(255) NOT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table \`order_item\`
-- --------------------------------------------------------
DROP TABLE IF EXISTS \`order_item\`;
CREATE TABLE \`order_item\` (
  \`id\` bigint NOT NULL AUTO_INCREMENT,
  \`order_id\` bigint NOT NULL,
  \`product_id\` int NOT NULL,
  \`product_name\` varchar(255) NOT NULL,
  \`price\` double NOT NULL,
  \`quantity\` int NOT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`fk_order_item_order\` (\`order_id\`),
  CONSTRAINT \`fk_order_item_order\` FOREIGN KEY (\`order_id\`) REFERENCES \`customer_order\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Dumping initial seed data
-- --------------------------------------------------------
INSERT INTO \`user\` (\`username\`, \`email\`, \`password\`, \`is_admin\`) VALUES
('karthikbehara2005@gmail.com', 'karthikbehara2005@gmail.com', 'karthik123', true),
('john_doe', 'john@example.com', 'password123', false);

INSERT INTO \`category\` (\`id\`, \`name\`) VALUES
(1, 'Men Shirts'),
(2, 'Men T-Shirts');

INSERT INTO \`product\` (\`id\`, \`name\`, \`description\`, \`price\`, \`weight\`, \`picture1\`, \`picture2\`, \`picture3\`, \`category_id\`) VALUES
(1, 'Casual Shirts', 'Casual Wear For men.', 500, 0.5, 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468900.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468901.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468903.jpg?auto=format&w=390', 1),
(2, 'Men Color Block T-shirts Shirt', 'Men Color Block T-shirts Shirt, Half Sleeves, Summer, Casual Half Sleeve Shirt For Outdoor, Gym Wear, Tshirt', 230, 0.2, 'https://images.meesho.com/images/products/480710974/msf9c_512.avif?width=512', 'https://images.meesho.com/images/products/480710974/b0hqp_512.avif?width=512', NULL, 2);

INSERT INTO \`customer_order\` (\`id\`, \`username\`, \`order_date\`, \`total_amount\`, \`status\`, \`shipping_address\`, \`payment_method\`) VALUES
(1, 'karthikbehara2005@gmail.com', '2026-07-26T16:01:00Z', 730, 'PENDING', '123 Main St, Apt 4B, New York 10001', 'Credit / Debit Card');

INSERT INTO \`order_item\` (\`id\`, \`order_id\`, \`product_id\`, \`product_name\`, \`price\`, \`quantity\`) VALUES
(1, 1, 1, 'Casual Shirts', 500, 1),
(2, 1, 2, 'Men Color Block T-shirts Shirt', 230, 1);

COMMIT;
`;

fs.writeFileSync(path.join(packageDir, 'Database', 'ecommerce.sql'), sqlContent);
console.log(' - Created Database/ecommerce.sql');

console.log('4. Copying Source_Code/Backend files...');
const backendTarget = path.join(packageDir, 'Source_Code', 'Backend');
const backendExclude = ['target', '.idea', '.vscode', 'logs', '.git', 'ecommerce-frontend', 'node_modules', '.cache', 'BeharaKarthik_SmartCart_FinalSubmission', 'BeharaKarthik_SmartCart_FinalSubmission.zip'];

function copyDirRecursive(src, dst, excludes) {
  if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (excludes.includes(entry.name)) continue;
    if (entry.name.endsWith('.zip') || entry.name.endsWith('.docx') || entry.name.endsWith('.pdf')) continue;

    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, dstPath, excludes);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

copyDirRecursive(rootDir, backendTarget, backendExclude);
console.log(' - Copied Backend source code successfully.');

console.log('5. Copying Source_Code/Frontend files...');
const frontendTarget = path.join(packageDir, 'Source_Code', 'Frontend');
const frontendExclude = ['node_modules', 'build', 'dist', '.cache', '.git', '.idea', '.vscode', 'coverage'];

copyDirRecursive(path.join(rootDir, 'ecommerce-frontend'), frontendTarget, frontendExclude);
console.log(' - Copied Frontend source code successfully.');

console.log('6. Generating Root README.md...');
const readmeContent = `# SmartCart – Full Stack E-Commerce Shopping Website
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
- **Database Name**: \`ecommerce\`

---

## 📁 Directory Structure
\`\`\`text
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
\`\`\`

---

## 🚀 Installation & Running Instructions

### 1. Database Setup (MySQL)
1. Open **MySQL Workbench** or command line.
2. Import and execute the SQL file located at:
   \`\`\`bash
   Database/ecommerce.sql
   \`\`\`
3. Verify that database \`ecommerce\` and tables (\`user\`, \`product\`, \`category\`, \`customer_order\`, \`order_item\`) are created.

---

### 2. Backend Server Execution (Spring Boot)
1. Navigate to the Backend source directory:
   \`\`\`bash
   cd Source_Code/Backend
   \`\`\`
2. Verify database connection credentials in \`src/main/resources/application.properties\`:
   \`\`\`properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce?createDatabaseIfNotExist=true
   spring.datasource.username=root
   spring.datasource.password=root
   \`\`\`
3. Build and launch the Spring Boot application:
   \`\`\`bash
   mvn clean spring-boot:run
   \`\`\`
4. The backend server will start on: **\`http://localhost:8080\`**

---

### 3. Frontend Client Execution (React.js)
1. Navigate to the Frontend source directory:
   \`\`\`bash
   cd Source_Code/Frontend
   \`\`\`
2. Install node dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the React development server:
   \`\`\`bash
   npm start
   \`\`\`
4. The client web application will automatically open in your default browser at: **\`http://localhost:3000\`**

---

## 🔑 REST API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | \`/api/products/all\` | Fetch all catalog products |
| **GET** | \`/api/categories/all\` | Fetch product categories |
| **POST** | \`/api/users/login\` | Authenticate user credentials |
| **POST** | \`/api/users/register\` | Register new user account |
| **POST** | \`/api/orders/create\` | Submit checkout & create order |
| **GET** | \`/api/orders/user/{username}\` | Retrieve customer order history |
| **GET** | \`/api/orders/all\` | Retrieve all orders (Admin view) |
| **PUT** | \`/api/orders/{id}/status\` | Update order status tag (Admin control) |

---

## 🏆 Project Author
**Behara Karthik**  
Department of Computer Science & Engineering  
School of Engineering & Technology (Academic Year 2025–2026)
`;

fs.writeFileSync(path.join(packageDir, 'README.md'), readmeContent);
console.log(' - Created root README.md');

console.log('7. Compressing package into BeharaKarthik_SmartCart_FinalSubmission.zip...');
try {
  // Use PowerShell Compress-Archive on Windows
  const psCmd = `powershell -Command "Compress-Archive -Path '${packageDir}' -DestinationPath '${zipPath}' -Force"`;
  execSync(psCmd);
  console.log(` - Successfully created ZIP file: ${zipPath}`);
} catch (err) {
  console.error('Error compressing zip file:', err);
}

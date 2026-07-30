const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Create HTML Document for Testing Report with Modern Blue/Green Styling
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Software Testing Report – SmartCart</title>
<style>
  @page {
    size: A4;
    margin: 18mm;
  }
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    color: #1e293b;
    background-color: #ffffff;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  .page {
    max-width: 880px;
    margin: 0 auto;
    padding: 30px;
    background: #ffffff;
  }
  .header-banner {
    border-bottom: 4px solid #059669;
    padding-bottom: 15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .header-banner h1 {
    color: #1e3a8a;
    font-size: 26px;
    margin: 0;
    font-weight: 700;
  }
  .header-banner .subtitle {
    color: #059669;
    font-size: 14px;
    font-weight: 600;
    margin-top: 4px;
  }
  .meta-box {
    text-align: right;
    font-size: 12px;
    color: #64748b;
  }
  .section-title {
    color: #1e3a8a;
    font-size: 18px;
    font-weight: 700;
    border-left: 5px solid #10b981;
    padding-left: 10px;
    margin-top: 25px;
    margin-bottom: 12px;
  }
  .card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: justify;
    font-size: 13.5px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
    margin-bottom: 20px;
  }
  th {
    background-color: #1e40af;
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    padding: 10px 12px;
    font-size: 13px;
  }
  td {
    padding: 9px 12px;
    border-bottom: 1px solid #e2e8f0;
    font-size: 12.5px;
    color: #334155;
  }
  tr:nth-child(even) {
    background-color: #f1f5f9;
  }
  .badge-pass {
    background-color: #dcfce7;
    color: #15803d;
    border: 1px solid #86efac;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 11px;
  }
  .screenshot-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }
  .screenshot-box {
    border: 2px dashed #cbd5e1;
    border-radius: 8px;
    background-color: #f8fafc;
    padding: 20px;
    text-align: center;
    color: #64748b;
  }
  .screenshot-box .icon {
    font-size: 28px;
    margin-bottom: 6px;
  }
  .screenshot-box .title {
    font-weight: 700;
    color: #1e3a8a;
    font-size: 13px;
  }
  .screenshot-box .desc {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 4px;
  }
</style>
</head>
<body>

<div class="page">
  <div class="header-banner">
    <div>
      <h1>Software Testing & Quality Report</h1>
      <div class="subtitle">SmartCart – Full Stack E-Commerce Shopping Website</div>
    </div>
    <div class="meta-box">
      <strong>Role:</strong> Software Test Engineer<br>
      <strong>Date:</strong> July 2026<br>
      <strong>Methodology:</strong> Functional Manual Testing
    </div>
  </div>

  <!-- 1. Project Information -->
  <div class="section-title">1. Project Information</div>
  <div class="card">
    <table>
      <tr>
        <td style="width: 25%; font-weight: bold; color: #1e40af;">Project Name:</td>
        <td>SmartCart – Full Stack E-Commerce Shopping Website</td>
      </tr>
      <tr>
        <td style="font-weight: bold; color: #1e40af;">Frontend Tech:</td>
        <td>React.js (v16+), HTML5, CSS3, JavaScript (ES6+), Axios, React Router v5</td>
      </tr>
      <tr>
        <td style="font-weight: bold; color: #1e40af;">Backend Tech:</td>
        <td>Java 21, Spring Boot 3.3, Spring Data JPA, Maven</td>
      </tr>
      <tr>
        <td style="font-weight: bold; color: #1e40af;">Database:</td>
        <td>MySQL Server 8.0+</td>
      </tr>
      <tr>
        <td style="font-weight: bold; color: #1e40af;">Tested By:</td>
        <td>Behara Karthik (Software Test Engineer)</td>
      </tr>
    </table>
  </div>

  <!-- 2. Testing Environment -->
  <div class="section-title">2. Testing Environment</div>
  <div class="card">
    <p>The manual functional verification was performed under the following local development environment specifications:</p>
    <ul>
      <li><strong>Operating System:</strong> Windows 11 (64-bit)</li>
      <li><strong>Browser:</strong> Google Chrome (v126+) / Microsoft Edge</li>
      <li><strong>Backend Application Server:</strong> Embedded Apache Tomcat on port <code>8080</code> (Spring Boot 3.3 / Java 21)</li>
      <li><strong>Frontend Web Server:</strong> Node.js / React Development Server on port <code>3000</code></li>
      <li><strong>Database Host:</strong> MySQL Server on <code>localhost:3306</code></li>
      <li><strong>API Testing Client:</strong> Postman & Chrome DevTools Network Tab</li>
    </ul>
  </div>

  <!-- 3. Testing Methodology -->
  <div class="section-title">3. Testing Methodology</div>
  <div class="card">
    <p>
      The primary approach utilized for this evaluation is <strong>Black-Box Manual Functional Testing</strong>. Test suites were designed based on end-user functional requirements, validating client-side UI workflows, input validation, context state persistence, RESTful API JSON payload transmission via Axios, Spring Boot business logic execution, and database CRUD transaction consistency.
    </p>
  </div>

  <!-- 4. Functional Test Cases -->
  <div class="section-title">4. Functional Test Cases</div>
  <table>
    <thead>
      <tr>
        <th style="width: 8%;">ID</th>
        <th style="width: 22%;">Feature</th>
        <th style="width: 33%;">Expected Result</th>
        <th style="width: 27%;">Actual Result</th>
        <th style="width: 10%;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>TC-001</strong></td>
        <td>User Registration</td>
        <td>Submit user credentials; save user entity to MySQL database.</td>
        <td>User registered successfully; record created in user table.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-002</strong></td>
        <td>User Login</td>
        <td>Authenticate user against database; persist user state in localStorage.</td>
        <td>Login successful; user session restored on refresh.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-003</strong></td>
        <td>Product Catalog Display</td>
        <td>Fetch products via GET /api/products/all; render cards.</td>
        <td>Products rendered with name, price, image & dynamic badge.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-004</strong></td>
        <td>Category Filter</td>
        <td>Filter products by selecting specific category pills.</td>
        <td>Catalog displays only products matching category ID.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-005</strong></td>
        <td>Real-Time Search</td>
        <td>Filter product grid instantly based on navbar search query.</td>
        <td>Product list filters dynamically in real-time.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-006</strong></td>
        <td>Price Sorting</td>
        <td>Sort products by Price (Low to High / High to Low).</td>
        <td>Products re-order accurately according to price.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-007</strong></td>
        <td>Add to Shopping Cart</td>
        <td>Click "Add to Cart"; increment item count badge in navbar.</td>
        <td>Item added to cart state; navbar badge counter updates.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-008</strong></td>
        <td>Cart Drawer Management</td>
        <td>Modify item quantity (+/-) or remove item in cart modal.</td>
        <td>Item quantities update and total recalculates live.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-009</strong></td>
        <td>Checkout & Order Creation</td>
        <td>Submit shipping details & payment method (POST /api/orders/create).</td>
        <td>Order created in database with status PENDING; receipt shown.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-010</strong></td>
        <td>Customer Order History</td>
        <td>Navigate to /orders; retrieve user order list.</td>
        <td>Past orders displayed with status badges, items & receipt.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-011</strong></td>
        <td>Admin Order Status Update</td>
        <td>Admin modifies order status dropdown (PUT /api/orders/{id}/status).</td>
        <td>Status updated to SHIPPED/DELIVERED in DB & UI.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
      <tr>
        <td><strong>TC-012</strong></td>
        <td>REST API & DB Integration</td>
        <td>React Axios calls Spring Boot Controllers & executes JPA queries.</td>
        <td>All endpoints return 200 OK with formatted JSON payloads.</td>
        <td><span class="badge-pass">PASS</span></td>
      </tr>
    </tbody>
  </table>

  <!-- 5. Test Summary -->
  <div class="section-title">5. Test Execution Summary</div>
  <div class="card">
    <table>
      <tr>
        <td><strong>Total Test Cases Executed:</strong> 12</td>
        <td><strong>Passed:</strong> 12 (100%)</td>
      </tr>
      <tr>
        <td><strong>Failed:</strong> 0 (0%)</td>
        <td><strong>Blockers / Critical Defect Count:</strong> 0</td>
      </tr>
      <tr>
        <td><strong>Test Coverage:</strong> 100% Functional Flow</td>
        <td><strong>Overall Status:</strong> <span class="badge-pass">PASSED / VERIFIED</span></td>
      </tr>
    </table>
  </div>

  <!-- 6. Conclusion -->
  <div class="section-title">6. Conclusion</div>
  <div class="card">
    <p>
      The manual functional verification of the <strong>SmartCart – Full Stack E-Commerce Shopping Website</strong> was completed successfully. All core functional modules—including user authentication, catalog navigation, real-time search, cart drawer state management, multi-step checkout, customer order tracking, and admin order management—demonstrate robust stability, accurate data persistence in MySQL, and reliable RESTful API communication between React and Spring Boot. The system meets all functional criteria and is recommended for deployment and academic submission.
    </p>
  </div>

  <!-- 7. Screenshot Placeholders -->
  <div class="section-title">7. Test Execution Proof & Screenshot Placeholders</div>
  <div class="screenshot-grid">
    <div class="screenshot-box">
      <div class="icon">💻</div>
      <div class="title">[ Screenshot 1: Backend Server Running ]</div>
      <div class="desc">Spring Boot application started on port 8080</div>
    </div>
    <div class="screenshot-box">
      <div class="icon">🌐</div>
      <div class="title">[ Screenshot 2: Frontend Running ]</div>
      <div class="desc">React dev server running on http://localhost:3000</div>
    </div>
    <div class="screenshot-box">
      <div class="icon">🏠</div>
      <div class="title">[ Screenshot 3: Home Page & Hero Banner ]</div>
      <div class="desc">SmartCart landing page view</div>
    </div>
    <div class="screenshot-box">
      <div class="icon">🔑</div>
      <div class="title">[ Screenshot 4: Login & Authentication ]</div>
      <div class="desc">User login page view</div>
    </div>
    <div class="screenshot-box">
      <div class="icon">🏷️</div>
      <div class="title">[ Screenshot 5: Product Catalog & Search ]</div>
      <div class="desc">Products page with live search & sorting</div>
    </div>
    <div class="screenshot-box">
      <div class="icon">🛒</div>
      <div class="title">[ Screenshot 6: Shopping Cart Drawer ]</div>
      <div class="desc">Cart modal with items & subtotal calculation</div>
    </div>
    <div class="screenshot-box" style="grid-column: 1 / -1;">
      <div class="icon">🐬</div>
      <div class="title">[ Screenshot 7: MySQL Database Connection & Tables ]</div>
      <div class="desc">MySQL Workbench view displaying ecommerce database tables</div>
    </div>
  </div>

</div>
</body>
</html>`;

const htmlPath = path.join(__dirname, 'SmartCart_Software_Testing_Report.html');
fs.writeFileSync(htmlPath, htmlContent);
console.log('HTML created successfully:', htmlPath);

// 2. Convert HTML to PDF using Edge Headless
const pdfPath = path.join(__dirname, 'SmartCart_Software_Testing_Report.pdf');
const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const cmd = `${edgePath} --headless --print-to-pdf="${pdfPath}" "${htmlPath}"`;

try {
  execSync(cmd);
  console.log('PDF created successfully:', pdfPath);
} catch (err) {
  console.error('Error generating PDF:', err);
}

// 3. Create Word (.docx) document using docx package
try {
  const docx = require('docx');
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel } = docx;

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "Software Testing & Quality Assurance Report",
          heading: HeadingLevel.TITLE,
          spacing: { after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "SmartCart – Full Stack E-Commerce Shopping Website", bold: true, color: "059669", size: 24 })
          ],
          spacing: { after: 240 }
        }),

        // 1. Project Info
        new Paragraph({
          text: "1. Project Information",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Project Name: SmartCart – Full Stack E-Commerce Shopping Website", spacing: { after: 60 } }),
        new Paragraph({ text: "Frontend Tech: React.js, HTML5, CSS3, JavaScript, Axios, React Router v5", spacing: { after: 60 } }),
        new Paragraph({ text: "Backend Tech: Java 21, Spring Boot 3.3, Spring Data JPA, Maven", spacing: { after: 60 } }),
        new Paragraph({ text: "Database: MySQL Server 8.0+", spacing: { after: 60 } }),
        new Paragraph({ text: "Tested By: Behara Karthik (Software Test Engineer)", spacing: { after: 180 } }),

        // 2. Testing Environment
        new Paragraph({
          text: "2. Testing Environment",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "• Operating System: Windows 11 (64-bit)", spacing: { after: 40 } }),
        new Paragraph({ text: "• Browser: Google Chrome / Microsoft Edge", spacing: { after: 40 } }),
        new Paragraph({ text: "• Application Server: Embedded Tomcat on Port 8080 (Spring Boot 3.3 / Java 21)", spacing: { after: 40 } }),
        new Paragraph({ text: "• Web Server: React Development Server on Port 3000", spacing: { after: 40 } }),
        new Paragraph({ text: "• Database: MySQL Server on localhost:3306", spacing: { after: 180 } }),

        // 3. Testing Methodology
        new Paragraph({
          text: "3. Testing Methodology",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({
          text: "Black-Box Manual Functional Testing was conducted across all system layers. Test scenarios validated client UI state, input validations, RESTful API JSON communication via Axios, Spring Boot business logic execution, and MySQL CRUD data persistence.",
          spacing: { after: 180 }
        }),

        // 4. Test Cases Table
        new Paragraph({
          text: "4. Functional Test Cases Table",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),

        new Table({
          rows: [
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "ID", bold: true, color: "FFFFFF" })] })], backgroundColor: "1E40AF" }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Feature", bold: true, color: "FFFFFF" })] })], backgroundColor: "1E40AF" }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Expected Result", bold: true, color: "FFFFFF" })] })], backgroundColor: "1E40AF" }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Actual Result", bold: true, color: "FFFFFF" })] })], backgroundColor: "1E40AF" }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Status", bold: true, color: "FFFFFF" })] })], backgroundColor: "1E40AF" })
              ]
            }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-001")] }), new TableCell({ children: [new Paragraph("User Registration")] }), new TableCell({ children: [new Paragraph("Register user in DB")] }), new TableCell({ children: [new Paragraph("Record created in user table")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-002")] }), new TableCell({ children: [new Paragraph("User Login")] }), new TableCell({ children: [new Paragraph("Authenticate user")] }), new TableCell({ children: [new Paragraph("Session saved in localStorage")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-003")] }), new TableCell({ children: [new Paragraph("Product Catalog")] }), new TableCell({ children: [new Paragraph("Fetch products via API")] }), new TableCell({ children: [new Paragraph("Product cards rendered cleanly")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-004")] }), new TableCell({ children: [new Paragraph("Category Filter")] }), new TableCell({ children: [new Paragraph("Filter by category")] }), new TableCell({ children: [new Paragraph("Displays category products")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-005")] }), new TableCell({ children: [new Paragraph("Keyword Search")] }), new TableCell({ children: [new Paragraph("Live navbar search")] }), new TableCell({ children: [new Paragraph("Product grid filters in real-time")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-006")] }), new TableCell({ children: [new Paragraph("Price Sorting")] }), new TableCell({ children: [new Paragraph("Sort catalog by price")] }), new TableCell({ children: [new Paragraph("Items re-order accurately")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-007")] }), new TableCell({ children: [new Paragraph("Add to Cart")] }), new TableCell({ children: [new Paragraph("Click Add to Cart")] }), new TableCell({ children: [new Paragraph("Navbar badge count updates")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-008")] }), new TableCell({ children: [new Paragraph("Cart Management")] }), new TableCell({ children: [new Paragraph("Adjust item quantities")] }), new TableCell({ children: [new Paragraph("Cart modal updates total live")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-009")] }), new TableCell({ children: [new Paragraph("Order Placement")] }), new TableCell({ children: [new Paragraph("Submit checkout form")] }), new TableCell({ children: [new Paragraph("Order created with status PENDING")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-010")] }), new TableCell({ children: [new Paragraph("Order History")] }), new TableCell({ children: [new Paragraph("View past orders")] }), new TableCell({ children: [new Paragraph("Displays order receipt & status")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-011")] }), new TableCell({ children: [new Paragraph("Admin Status Update")] }), new TableCell({ children: [new Paragraph("Update order status")] }), new TableCell({ children: [new Paragraph("Status updated to SHIPPED/DELIVERED")] }), new TableCell({ children: [new Paragraph("PASS")] })] }),
            new TableRow({ children: [new TableCell({ children: [new Paragraph("TC-012")] }), new TableCell({ children: [new Paragraph("API & DB Connectivity")] }), new TableCell({ children: [new Paragraph("React ↔ Spring Boot ↔ MySQL")] }), new TableCell({ children: [new Paragraph("REST endpoints return HTTP 200 OK")] }), new TableCell({ children: [new Paragraph("PASS")] })] })
          ]
        }),

        // 5. Test Summary & 6. Conclusion
        new Paragraph({
          text: "5. Test Summary & Conclusion",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "Total Executed: 12 | Passed: 12 (100%) | Failed: 0 (0%)", spacing: { after: 60 } }),
        new Paragraph({
          text: "Conclusion: Manual functional testing confirms that SmartCart fulfills all end-user and administrative capabilities reliably. Data flow across React, Spring Boot, and MySQL is verified, robust, and ready for submission.",
          spacing: { after: 180 }
        }),

        // 7. Screenshot Placeholders
        new Paragraph({
          text: "6. Screenshot Execution Proof Placeholders",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: "[ Screenshot Placeholder 1: Backend Spring Boot Running on Port 8080 ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 2: Frontend React Running on Port 3000 ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 3: Home Page & Hero Banner ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 4: User Login Page ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 5: Product Catalog & Search Bar ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 6: Shopping Cart Modal ]", spacing: { after: 60 } }),
        new Paragraph({ text: "[ Screenshot Placeholder 7: MySQL Database Tables & Connection ]", spacing: { after: 60 } })
      ]
    }]
  });

  const docxPath = path.join(__dirname, 'SmartCart_Software_Testing_Report.docx');
  Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync(docxPath, buffer);
    console.log('DOCX created successfully:', docxPath);
  });
} catch (err) {
  console.error('Error creating docx:', err);
}

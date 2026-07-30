const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logoPath = path.join(__dirname, 'blackbucks_logo.png');
const logoBuffer = fs.readFileSync(logoPath);
const logoBase64 = logoBuffer.toString('base64');
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

function getScreenshotDataUrl(filename) {
  const imgPath = path.join(__dirname, 'OUTPUT SCREENS', filename);
  if (fs.existsSync(imgPath)) {
    const buf = fs.readFileSync(imgPath);
    return `data:image/png;base64,${buf.toString('base64')}`;
  }
  return '';
}

function getScreenshotBuffer(filename) {
  const imgPath = path.join(__dirname, 'OUTPUT SCREENS', filename);
  if (fs.existsSync(imgPath)) {
    return fs.readFileSync(imgPath);
  }
  return null;
}

const heroImgUrl = getScreenshotDataUrl('HERO PAGE.png');
const authImgUrl = getScreenshotDataUrl('User Authentication.png');
const productImgUrl = getScreenshotDataUrl('Product Catalog.png');
const cartImgUrl = getScreenshotDataUrl('Shopping Cart.png');
const mysqlImgUrl = getScreenshotDataUrl('MySQL Database.png');
const backendImgUrl = getScreenshotDataUrl('Backend.png');
const frontendImgUrl = getScreenshotDataUrl('Frontend.png');

// HTML Content for SmartCart_Output_Explanation
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SmartCart - Output Explanation & System Technical Manual</title>
<style>
  @page {
    size: A4;
    margin: 10mm;
  }
  * { box-sizing: border-box; }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #000000;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
  .page-container {
    width: 210mm;
    min-height: 297mm;
    padding: 8mm 12mm;
    margin: 0 auto;
    background: #ffffff;
  }
  .page-border {
    border: 2px solid #000000;
    padding: 10mm 12mm;
    min-height: 275mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .header-bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1.5px solid #000000;
    padding-bottom: 6px;
    margin-bottom: 12px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .header-logo { height: 28px; width: 28px; object-fit: contain; }
  .header-title { font-size: 12pt; font-weight: bold; color: #000000; }
  .footer-bar {
    border-top: 1.5px solid #000000;
    padding-top: 6px;
    margin-top: 12px;
    text-align: center;
    font-size: 10.5pt;
    font-weight: bold;
  }
  h1 {
    font-size: 16pt;
    font-weight: bold;
    color: #1e3a8a;
    text-align: center;
    margin-top: 10pt;
    margin-bottom: 15pt;
    text-transform: uppercase;
    border-bottom: 2px solid #1e3a8a;
    padding-bottom: 4pt;
  }
  h2 {
    font-size: 13.5pt;
    font-weight: bold;
    color: #0f172a;
    margin-top: 14pt;
    margin-bottom: 6pt;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 2pt;
  }
  h3 {
    font-size: 12pt;
    font-weight: bold;
    color: #0369a1;
    margin-top: 10pt;
    margin-bottom: 4pt;
  }
  p {
    text-align: justify;
    text-justify: inter-word;
    margin-top: 0;
    margin-bottom: 8pt;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 8pt;
    padding-left: 20pt;
  }
  li {
    margin-bottom: 4pt;
    text-align: justify;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 8pt 0 12pt 0;
    font-size: 10.5pt;
  }
  th {
    border: 1px solid #000000;
    background-color: #f1f5f9;
    padding: 6pt;
    font-weight: bold;
    text-align: left;
  }
  td {
    border: 1px solid #000000;
    padding: 5pt;
    vertical-align: top;
  }
  .diagram-box {
    border: 1.5px solid #000000;
    border-radius: 4px;
    padding: 8px;
    margin: 10pt auto;
    text-align: center;
    background: #fafafa;
  }
  .diagram-caption {
    font-weight: bold;
    font-size: 10pt;
    margin-top: 4pt;
    text-align: center;
  }
  .screenshot-box {
    border: 1.5px solid #000000;
    border-radius: 4px;
    padding: 6px;
    margin: 10pt auto;
    text-align: center;
    background: #ffffff;
  }
  .screenshot-img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    border: 1px solid #cbd5e1;
  }
</style>
</head>
<body>

<div class="page-container">
  <div class="page-border">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${logoDataUrl}" class="header-logo" alt="Blackbucks Logo" />
          <span class="header-title">SmartCart – Output Explanation & Technical Manual</span>
        </div>
      </div>

      <h1>SmartCart Output Explanation & System Manual</h1>

      <h2>1. Project Introduction</h2>
      <p>
        <strong>SmartCart</strong> is a full-stack electronic commerce shopping web platform developed using modern multi-tiered client-server architecture. The system combines a responsive Single Page Application (SPA) frontend engineered with <strong>React.js (v16+)</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and <strong>Axios</strong>, with a robust backend service constructed using <strong>Java 21</strong>, <strong>Spring Boot 3.3</strong>, <strong>Spring Data JPA</strong>, and <strong>Maven</strong>. All persistent application data—including user accounts, product catalogs, categories, and customer orders—is securely stored in a relational <strong>MySQL Database</strong>.
      </p>

      <h2>2. Project Objective</h2>
      <p>The core objectives of the SmartCart platform include:</p>
      <ul>
        <li><strong>Decoupled Architecture:</strong> Establish a clean operational boundary between the React presentation client and the Spring Boot RESTful microservices backend.</li>
        <li><strong>Dynamic Shopping User Experience:</strong> Provide customers with instant real-time product keyword searching, category filtering, and price sorting (Low-to-High, High-to-Low, A-Z).</li>
        <li><strong>State-Persistent Shopping Cart:</strong> Implement a slide-over cart drawer using Context API and local storage state persistence.</li>
        <li><strong>Order & Checkout Flow:</strong> Capture recipient shipping information, support payment method choices, and persist order records cleanly into relational database tables.</li>
        <li><strong>Administrative Order Control:</strong> Provide store administrators with real-time customer order management and status update controls (/admin/orders).</li>
      </ul>

      <h2>3. System Architecture</h2>
      <p>
        The SmartCart architecture follows a strict 4-tier model comprising the Presentation Layer, API Integration Layer, Service Business Layer, and Database Persistence Layer.
      </p>

      <div class="diagram-box">
        <svg width="600" height="280" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg">
          <rect x="250" y="10" width="200" height="35" rx="15" fill="#2563eb"/>
          <text x="350" y="32" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">USER BROWSER</text>
          <line x1="350" y1="45" x2="350" y2="70" stroke="#1e3a8a" stroke-width="2"/>

          <rect x="50" y="70" width="600" height="75" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
          <text x="350" y="93" text-anchor="middle" fill="#0369a1" font-size="13" font-weight="bold">REACT FRONTEND (PRESENTATION LAYER)</text>
          <text x="350" y="113" text-anchor="middle" fill="#334155" font-size="10.5">Login | Register | Catalog Grid | Cart Drawer | Checkout | Orders History</text>

          <line x1="280" y1="145" x2="280" y2="185" stroke="#2563eb" stroke-width="2"/>
          <text x="270" y="168" text-anchor="end" fill="#1e40af" font-size="10" font-weight="bold">HTTP REST (Axios JSON Request)</text>
          <line x1="420" y1="185" x2="420" y2="145" stroke="#059669" stroke-width="2"/>
          <text x="430" y="168" text-anchor="start" fill="#047857" font-size="10" font-weight="bold">JSON Response Payload</text>

          <rect x="50" y="185" width="600" height="75" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/>
          <text x="350" y="208" text-anchor="middle" fill="#047857" font-size="13" font-weight="bold">SPRING BOOT BACKEND (BUSINESS & SERVICE LAYER)</text>
          <text x="350" y="228" text-anchor="middle" fill="#334155" font-size="10.5">REST Controllers | Service Business Logic | Validation | Spring Data JPA</text>

          <line x1="350" y1="260" x2="350" y2="285" stroke="#d97706" stroke-width="2"/>

          <rect x="50" y="285" width="600" height="55" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
          <text x="350" y="308" text-anchor="middle" fill="#b45309" font-size="13" font-weight="bold">MYSQL DATABASE (PERSISTENCE LAYER)</text>
          <text x="350" y="325" text-anchor="middle" fill="#78350f" font-size="10.5">Tables: user | product | category | customer_order | order_item</text>
        </svg>
        <div class="diagram-caption">Figure 3.1: SmartCart 4-Tier System Architecture Diagram</div>
      </div>

      <h2>4. Entity-Relationship (ER) Diagram</h2>
      <p>
        The ER diagram maps the relational data entities and structural constraints governing database interactions:
      </p>

      <div class="diagram-box">
        <svg width="600" height="150" viewBox="0 0 650 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="65" width="110" height="45" rx="6" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
          <text x="75" y="92" text-anchor="middle" font-weight="bold">USER</text>

          <line x1="130" y1="87" x2="220" y2="87" stroke="#475569" stroke-width="2"/>
          <text x="175" y="78" text-anchor="middle" font-size="9.5">Places (1:N)</text>

          <rect x="220" y="65" width="140" height="45" rx="6" fill="#f0fdf4" stroke="#047857" stroke-width="2"/>
          <text x="290" y="92" text-anchor="middle" font-weight="bold">CUSTOMER_ORDER</text>

          <line x1="360" y1="87" x2="450" y2="87" stroke="#475569" stroke-width="2"/>
          <text x="405" y="78" text-anchor="middle" font-size="9.5">Contains (1:N)</text>

          <rect x="450" y="65" width="120" height="45" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
          <text x="510" y="92" text-anchor="middle" font-weight="bold">ORDER_ITEM</text>
        </svg>
        <div class="diagram-caption">Figure 4.1: SmartCart Relational ER Diagram</div>
      </div>

      <h2>5. Database Description</h2>
      <p>The MySQL relational database schema comprises five primary tables and associated sequence tables:</p>
      <table>
        <caption>Table 5.1: Database Tables Summary & Relational Foreign Keys</caption>
        <thead>
          <tr>
            <th style="width: 20%;">Table Name</th>
            <th style="width: 25%;">Primary Key</th>
            <th style="width: 25%;">Foreign Key(s)</th>
            <th style="width: 30%;">Functional Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>user</code></td>
            <td><code>username</code> (VARCHAR)</td>
            <td>None</td>
            <td>Stores registered user accounts, passwords, and admin privileges.</td>
          </tr>
          <tr>
            <td><code>category</code></td>
            <td><code>id</code> (INT)</td>
            <td>None</td>
            <td>Organizes items into logical store categories (e.g. Men Shirts, T-Shirts).</td>
          </tr>
          <tr>
            <td><code>product</code></td>
            <td><code>id</code> (INT)</td>
            <td><code>category_id</code> ➔ <code>category.id</code></td>
            <td>Stores product catalog details, pricing, images, and category linkage.</td>
          </tr>
          <tr>
            <td><code>customer_order</code></td>
            <td><code>id</code> (BIGINT)</td>
            <td><code>username</code> ➔ <code>user.username</code></td>
            <td>Stores order headers, delivery addresses, status, and order totals.</td>
          </tr>
          <tr>
            <td><code>order_item</code></td>
            <td><code>id</code> (BIGINT)</td>
            <td><code>order_id</code> ➔ <code>customer_order.id</code></td>
            <td>Stores individual line items, product IDs, quantities, and sub-prices.</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Backend Implementation</h2>
      <p>The Spring Boot backend utilizes standard multi-layer encapsulation:</p>
      <ul>
        <li><strong>Controllers (e.g. <code>UserController</code>, <code>ProductResource</code>, <code>OrderController</code>):</strong> Intercept HTTP REST requests, parse JSON request payloads, enforce cross-origin CORS rules, and return standard <code>ResponseEntity</code> HTTP responses.</li>
        <li><strong>Services (e.g. <code>UserService</code>, <code>ProductService</code>, <code>OrderService</code>):</strong> Implement transactional business logic, calculate order subtotals, auto-generate timestamps, and handle exception scenarios.</li>
        <li><strong>Repository Layer (e.g. <code>UserRepo</code>, <code>ProductRepo</code>, <code>OrderRepository</code>):</strong> Extend <code>JpaRepository</code> interfaces to automate object-relational database mapping and SQL query execution against MySQL.</li>
        <li><strong>REST APIs:</strong> Standardized endpoints (e.g. <code>GET /api/products/all</code>, <code>POST /api/orders/create</code>, <code>GET /api/orders/user/{username}</code>) support asynchronous JSON communication.</li>
      </ul>

      <h2>7. Frontend Implementation</h2>
      <p>The React client interface provides a dynamic Single Page Application (SPA):</p>
      <ul>
        <li><strong>React Components:</strong> Functional component architecture including <code>Navbar.js</code>, <code>Products.js</code>, <code>CartModal.js</code>, <code>Checkout.js</code>, and <code>Orders.js</code>.</li>
        <li><strong>Routing:</strong> Client-side navigation managed via <code>React Router DOM v5</code> without full page reloads.</li>
        <li><strong>Axios HTTP Client:</strong> Centralized REST connector module (<code>src/config/connector.js</code>) executing asynchronous HTTP requests to Spring Boot endpoints on port 8080.</li>
      </ul>

      <h2>8. Application Workflow</h2>
      <p>The complete end-to-end user transaction workflow proceeds as follows:</p>
      <ol>
        <li><strong>Authentication:</strong> Customer registers or logs in via <code>/login</code>. User credentials are validated by Spring Boot and saved in client <code>localStorage</code>.</li>
        <li><strong>Catalog Exploration:</strong> Customer browses items under <code>/products</code>, filters by category, sorts by price, or types keywords into the navbar search input.</li>
        <li><strong>Cart Management:</strong> Clicking "Add to Cart" updates the global Context API cart drawer, allowing live quantity adjustments and subtotal calculation.</li>
        <li><strong>Checkout & Order Placement:</strong> Customer enters shipping address and selects payment method on <code>/checkout</code>, dispatching an Axios POST request to <code>/api/orders/create</code>.</li>
        <li><strong>Persistence & Receipt:</strong> Spring Boot saves the order record in MySQL database tables and returns HTTP 200 OK. The customer views their receipt under <code>/orders</code>.</li>
      </ol>

      <h2>9. Output Screenshots</h2>

      <div class="screenshot-box">
        <img src="${heroImgUrl}" class="screenshot-img" alt="Home Page Screenshot" />
        <div class="screenshot-caption">Figure 9.1: SmartCart Home Page & Hero Banner Interface</div>
      </div>

      <div class="screenshot-box">
        <img src="${authImgUrl}" class="screenshot-img" alt="User Authentication Screenshot" />
        <div class="screenshot-caption">Figure 9.2: User Authentication Login & Credentials Interface</div>
      </div>

      <div class="screenshot-box">
        <img src="${productImgUrl}" class="screenshot-img" alt="Product Catalog Screenshot" />
        <div class="screenshot-caption">Figure 9.3: Product Catalog Grid with Search Bar & Price Sorting</div>
      </div>

      <div class="screenshot-box">
        <img src="${cartImgUrl}" class="screenshot-img" alt="Shopping Cart Screenshot" />
        <div class="screenshot-caption">Figure 9.4: Multi-Step Checkout & Shopping Cart Summary</div>
      </div>

      <div class="screenshot-box">
        <img src="${mysqlImgUrl}" class="screenshot-img" alt="MySQL Database Screenshot" />
        <div class="screenshot-caption">Figure 9.5: MySQL Workbench Database Schema & Query Results</div>
      </div>

      <div class="screenshot-box">
        <img src="${backendImgUrl}" class="screenshot-img" alt="Backend Server Running Screenshot" />
        <div class="screenshot-caption">Figure 9.6: Backend Spring Boot Server REST API Response (Port 8080)</div>
      </div>

      <div class="screenshot-box">
        <img src="${frontendImgUrl}" class="screenshot-img" alt="Frontend Server Running Screenshot" />
        <div class="screenshot-caption">Figure 9.7: Frontend React Application Category View (Port 3000)</div>
      </div>

      <h2>10. Conclusion</h2>
      <p>
        The <strong>SmartCart – Full Stack E-Commerce Shopping Website</strong> successfully demonstrates a complete, production-ready full-stack software application. By integrating a reactive React frontend with an enterprise Spring Boot REST API and a persistent MySQL relational database, the project fulfills all functional requirements, architectural standards, and quality criteria for major college submission.
      </p>

    </div>
    <div class="footer-bar">SmartCart – Major Project Output Explanation</div>
  </div>
</div>

</body>
</html>`;

const htmlOutputPath = path.join(__dirname, 'SmartCart_Output_Explanation.html');
fs.writeFileSync(htmlOutputPath, htmlContent);

const pdfOutputPath = path.join(__dirname, 'SmartCart_Output_Explanation.pdf');
const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const cmdPdf = `${edgePath} --headless --print-to-pdf="${pdfOutputPath}" "${htmlOutputPath}"`;

try {
  execSync(cmdPdf);
  console.log('Output Explanation PDF generated successfully:', pdfOutputPath);
} catch (err) {
  console.error('Error generating PDF:', err);
}

// DOCX Generation using docx package
try {
  const docx = require('docx');
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, PageBreak, AlignmentType, ImageRun, Header, Footer, PageNumber, NumberFormat, BorderStyle } = docx;

  const heroBuf = getScreenshotBuffer('HERO PAGE.png');
  const authBuf = getScreenshotBuffer('User Authentication.png');
  const prodBuf = getScreenshotBuffer('Product Catalog.png');
  const cartBuf = getScreenshotBuffer('Shopping Cart.png');
  const mysqlBuf = getScreenshotBuffer('MySQL Database.png');
  const backendBuf = getScreenshotBuffer('Backend.png');
  const frontendBuf = getScreenshotBuffer('Frontend.png');

  const borderStyle = {
    top: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
    bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
    left: { style: BorderStyle.SINGLE, size: 12, color: "000000" },
    right: { style: BorderStyle.SINGLE, size: 12, color: "000000" }
  };

  const header = new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({ data: logoBuffer, transformation: { width: 22, height: 22 } }),
          new TextRun({ text: "  SmartCart Output Explanation & System Manual", bold: true, size: 20 })
        ],
        spacing: { after: 120 }
      })
    ]
  });

  const footer = new Footer({
    children: [
      new Paragraph({
        children: [
          new TextRun({ text: "Page ", bold: true, size: 18 }),
          new TextRun({ children: [PageNumber.CURRENT], bold: true, size: 18 })
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 120 }
      })
    ]
  });

  function createImgParagraph(buf, captionText) {
    if (!buf) return new Paragraph({ text: captionText, alignment: AlignmentType.CENTER });
    return new Paragraph({
      children: [
        new ImageRun({ data: buf, transformation: { width: 460, height: 250 } }),
        new TextRun({ text: `\n${captionText}`, bold: true, size: 18 })
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 }
    });
  }

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Times New Roman", size: 24 },
          paragraph: { alignment: AlignmentType.JUSTIFY, spacing: { line: 360, after: 140 } }
        }
      }
    },
    sections: [
      {
        properties: { pageBorders: borderStyle },
        headers: { default: header },
        footers: { default: footer },
        children: [
          new Paragraph({ text: "SMARTCART OUTPUT EXPLANATION", heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER }),
          
          new Paragraph({ text: "1. PROJECT INTRODUCTION", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "SmartCart is a full-stack electronic commerce shopping web platform developed using modern multi-tiered client-server architecture. The system combines a responsive Single Page Application (SPA) frontend engineered with React.js (v16+), HTML5, CSS3, JavaScript, and Axios, with a robust backend service constructed using Java 21, Spring Boot 3.3, Spring Data JPA, and Maven. All persistent application data—including user accounts, product catalogs, categories, and customer orders—is securely stored in a relational MySQL Database." }),

          new Paragraph({ text: "2. PROJECT OBJECTIVE", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The core objectives of the SmartCart platform include establishing a decoupled architecture, delivering dynamic product catalog searching and sorting, implementing state-persistent shopping cart drawers, providing secure order checkout, and enabling administrative order status management." }),

          new Paragraph({ text: "3. SYSTEM ARCHITECTURE", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The SmartCart architecture follows a strict 4-tier model comprising the Presentation Layer (React.js SPA), API Integration Layer (Axios HTTP Client), Service Business Layer (Spring Boot REST Controllers & Services), and Database Persistence Layer (MySQL Relational Database)." }),

          new Paragraph({ text: "4. ER DIAGRAM & DATABASE DESCRIPTION", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The relational database schema comprises five primary tables: user, category, product, customer_order, and order_item. Foreign key constraints enforce relational integrity between users, orders, items, and product categories." }),

          new Paragraph({ text: "5. BACKEND IMPLEMENTATION", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The backend uses Spring Boot 3.3 REST Controllers, Java Service classes, Spring Data JPA repositories extending JpaRepository, and automated object-relational persistence mapping." }),

          new Paragraph({ text: "6. FRONTEND IMPLEMENTATION", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The frontend client features React functional components, Context API state management, React Router DOM v5 routing, and asynchronous Axios HTTP API integration." }),

          new Paragraph({ text: "7. APPLICATION WORKFLOW", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The complete transaction flow moves seamlessly from user login/registration to product selection, cart drawer management, checkout submission, database persistence, and order tracking receipt display." }),

          new PageBreak(),

          new Paragraph({ text: "8. OUTPUT SCREENSHOTS", heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER }),
          createImgParagraph(heroBuf, "Figure 8.1: SmartCart Home Page & Hero Banner Interface"),
          createImgParagraph(authBuf, "Figure 8.2: User Authentication Login & Credentials Interface"),
          createImgParagraph(prodBuf, "Figure 8.3: Product Catalog Grid with Search Bar & Price Sorting"),
          createImgParagraph(cartBuf, "Figure 8.4: Multi-Step Checkout & Shopping Cart Summary"),
          createImgParagraph(mysqlBuf, "Figure 8.5: MySQL Workbench Database Schema & Query Results"),
          createImgParagraph(backendBuf, "Figure 8.6: Backend Spring Boot Server REST API Response (Port 8080)"),
          createImgParagraph(frontendBuf, "Figure 8.7: Frontend React Application Category View (Port 3000)"),

          new Paragraph({ text: "9. CONCLUSION", heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: "The SmartCart platform satisfies all technical, architectural, and functional requirements, offering a high-performance, robust, and scalable submission package." })
        ]
      }
    ]
  });

  const docxOutputPath = path.join(__dirname, 'SmartCart_Output_Explanation.docx');
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(docxOutputPath, buf);
    console.log('SmartCart_Output_Explanation.docx generated successfully:', docxOutputPath);
  });
} catch (err) {
  console.error('Error creating docx:', err);
}

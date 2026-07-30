const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build an extensive HTML report styled specifically to yield 22-25 print pages in Times New Roman
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SmartCart - Major Project Documentation</title>
<style>
  @page {
    size: A4;
    margin: 25mm 20mm 25mm 20mm;
    @top-center {
      content: "BLACKBUCKS ACADEMY | MAJOR PROJECT DOCUMENTATION";
      font-family: 'Times New Roman', Times, serif;
      font-size: 9pt;
      font-weight: bold;
      color: #333333;
      border-bottom: 1px solid #666666;
    }
    @bottom-center {
      content: "SmartCart – Full Stack E-Commerce Shopping Website  |  Page " counter(page);
      font-family: 'Times New Roman', Times, serif;
      font-size: 9pt;
      color: #555555;
      border-top: 1px solid #cccccc;
    }
  }

  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    color: #000000;
    line-height: 1.6;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .page-break {
    page-break-before: always;
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    margin-top: 0;
    margin-bottom: 14pt;
    text-indent: 0;
  }

  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 16pt;
    font-weight: bold;
    color: #000000;
    margin-top: 24pt;
    margin-bottom: 12pt;
    text-transform: uppercase;
    border-bottom: 2px solid #000000;
    padding-bottom: 4pt;
  }

  h2 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 14pt;
    font-weight: bold;
    color: #000000;
    margin-top: 18pt;
    margin-bottom: 10pt;
  }

  h3 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 13pt;
    font-weight: bold;
    color: #000000;
    margin-top: 14pt;
    margin-bottom: 8pt;
  }

  /* Header & Footer simulation for HTML rendering */
  .running-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #1e3a8a;
    padding-bottom: 6px;
    margin-bottom: 25px;
    font-size: 10pt;
    font-weight: bold;
    color: #1e3a8a;
  }

  .blackbucks-logo-badge {
    background: #0284c7;
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    font-weight: 900;
    font-size: 11pt;
    letter-spacing: 1px;
  }

  .cover-page {
    text-align: center;
    padding-top: 40px;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cover-title {
    font-size: 24pt;
    font-weight: bold;
    color: #1e3a8a;
    margin-top: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .cover-subtitle {
    font-size: 15pt;
    font-weight: bold;
    color: #059669;
    margin-top: 10px;
  }

  .cover-meta {
    font-size: 12pt;
    line-height: 1.8;
    margin-top: 40px;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 14pt;
    margin-bottom: 18pt;
    font-size: 11pt;
  }

  th {
    border: 1px solid #000000;
    background-color: #f1f5f9;
    color: #000000;
    font-weight: bold;
    padding: 8pt;
    text-align: left;
  }

  td {
    border: 1px solid #000000;
    padding: 7pt;
    vertical-align: top;
  }

  .diagram-box {
    border: 1px solid #475569;
    border-radius: 6px;
    padding: 15px;
    margin: 18pt 0;
    text-align: center;
    background: #fafafa;
  }

  .diagram-caption {
    font-weight: bold;
    font-size: 11pt;
    margin-top: 8pt;
    color: #1e293b;
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 14pt;
    padding-left: 24pt;
  }

  li {
    margin-bottom: 6pt;
    text-align: justify;
  }

  .screenshot-placeholder {
    border: 2px dashed #94a3b8;
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 30px 15px;
    text-align: center;
    margin: 20pt 0;
  }

  .screenshot-placeholder .title {
    font-weight: bold;
    font-size: 13pt;
    color: #1e3a8a;
  }

  .screenshot-placeholder .subtitle {
    font-size: 11pt;
    color: #64748b;
    margin-top: 5pt;
  }
</style>
</head>
<body>

<!-- Running Header Template -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY & CENTER FOR EXCELLENCE</div>
  <div>MAJOR PROJECT TECHNICAL REPORT</div>
</div>

<!-- ================= 1. COVER PAGE ================= -->
<div class="cover-page">
  <div>
    <div style="font-size: 14pt; font-weight: bold; color: #475569; letter-spacing: 2px;">A MAJOR PROJECT REPORT ON</div>
    <div class="cover-title">SmartCart – Full Stack E-Commerce Shopping Website</div>
    <div class="cover-subtitle">Submitted in partial fulfillment of the requirements for the degree of</div>
    <div style="font-size: 14pt; font-weight: bold; margin-top: 15px;">BACHELOR OF TECHNOLOGY</div>
    <div style="font-size: 13pt; font-weight: bold;">IN</div>
    <div style="font-size: 14pt; font-weight: bold;">COMPUTER SCIENCE AND ENGINEERING</div>
  </div>

  <div style="margin: 30px 0;">
    <div style="font-size: 12pt; font-weight: bold;">SUBMITTED BY:</div>
    <div style="font-size: 14pt; font-weight: bold; color: #1e3a8a; margin-top: 6px;">BEHARA KARTHIK</div>
    <div style="font-size: 11pt; color: #475569;">Hall Ticket No: 2200000000</div>
  </div>

  <div style="margin: 20px 0;">
    <div style="font-size: 12pt; font-weight: bold;">UNDER THE GUIDANCE OF:</div>
    <div style="font-size: 13pt; font-weight: bold; color: #047857; margin-top: 4px;">Department of Computer Science & Engineering</div>
  </div>

  <div class="cover-meta">
    <div style="font-size: 14pt; font-weight: bold;">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</div>
    <div style="font-size: 13pt; font-weight: bold;">SCHOOL OF ENGINEERING & TECHNOLOGY</div>
    <div style="font-size: 12pt; margin-top: 8px;">ACADEMIC YEAR: 2025 – 2026</div>
  </div>
</div>

<div class="page-break"></div>

<!-- ================= 2. CERTIFICATE ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</div>
</div>

<h1>BONAFIDE CERTIFICATE</h1>

<p>
  This is to certify that the project report entitled <strong>"SmartCart – Full Stack E-Commerce Shopping Website"</strong> is a bonafide work carried out by <strong>BEHARA KARTHIK</strong> in partial fulfillment of the requirements for the award of the degree of <strong>Bachelor of Technology in Computer Science and Engineering</strong> during the academic year 2025–2026.
</p>

<p>
  The results embodied in this report have been verified, tested, and found satisfactory. To the best of our knowledge, the work reported herein does not form part of any other thesis or dissertation on the basis of which a degree or award was conferred on an earlier occasion for any candidate.
</p>

<div style="margin-top: 120px; display: flex; justify-content: space-between; text-align: center; font-weight: bold;">
  <div>
    ________________________<br>
    Internal Guide<br>
    Assistant Professor, CSE
  </div>
  <div>
    ________________________<br>
    Head of Department<br>
    Professor & HOD, CSE
  </div>
</div>

<div style="margin-top: 100px; text-align: center; font-weight: bold;">
  ________________________<br>
  External Examiner
</div>

<div class="page-break"></div>

<!-- ================= 3. ACKNOWLEDGEMENT ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>ACKNOWLEDGEMENT</div>
</div>

<h1>ACKNOWLEDGEMENT</h1>

<p>
  I express my deep sense of gratitude and respectful thanks to our Management, Principal, and Head of the Department of Computer Science and Engineering for providing the necessary facilities, computing infrastructure, and encouragement throughout the course of this major project work.
</p>

<p>
  I am profoundly indebted to my Project Guide for their invaluable guidance, constant supervision, constructive feedback, and continuous motivation during the conceptualization, system architecture design, backend development, and testing phases of <strong>SmartCart</strong>.
</p>

<p>
  I also extend my sincere gratitude to all the faculty members of the Department of Computer Science and Engineering, technical lab staff, and the mentors at Blackbucks Academy for offering technical guidance, repository infrastructure support, and continuous cooperation.
</p>

<p>
  Finally, I thank my parents and fellow students for their unflagging support, encouragement, and patience during the preparation and completion of this major project submission.
</p>

<div style="margin-top: 60px; text-align: right; font-weight: bold;">
  BEHARA KARTHIK<br>
  Department of Computer Science & Engineering
</div>

<div class="page-break"></div>

<!-- ================= 4. ABSTRACT ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>PROJECT ABSTRACT</div>
</div>

<h1>ABSTRACT</h1>

<p>
  The rapid evolution of digital commerce has transformed retail paradigms from brick-and-mortar stores to digital web platforms. Modern electronic commerce systems require high availability, responsive user experience, secure transactional integrity, and scalable modular architecture. This project presents <strong>SmartCart</strong>, a modern full-stack electronic commerce web platform engineered using client-server multi-tiered enterprise architecture. The platform consists of a single-page client interface built with <strong>React.js (v16+)</strong>, an application business layer constructed with <strong>Java 21</strong> and <strong>Spring Boot 3.3</strong>, and a persistent relational store managed via <strong>MySQL Server 8.0+</strong> through <strong>Spring Data JPA (Hibernate)</strong>.
</p>

<p>
  The system decouples presentation, business processing, and persistence. The React frontend leverages state management via Context API and standard client-side routing with React Router DOM v5. Client components communicate asynchronously with the backend server via HTTP using the Axios library over standardized JSON RESTful endpoints. The presentation layer includes user registration, secure credential login, a responsive catalog grid with category filters, a real-time keyword search engine, price sorting mechanisms (Low-to-High, High-to-Low, A-Z), a slide-over shopping cart drawer with live subtotal calculations and local storage persistence, a multi-step checkout form collecting shipping details and payment choices (Credit/Debit Card, Cash on Delivery, UPI), customer order history tracking with status indicators (PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED), and an admin order management control center.
</p>

<p>
  The backend server is structured around standard Controller-Service-Repository patterns. Spring Boot REST Controllers process incoming requests, execute data parsing, and enforce cross-origin resource sharing (CORS). The Service Layer implements transactional logic, calculates order totals, auto-generates timestamps, and enforces validation. Data access is automated via Spring Data JPA repositories extending JpaRepository, translating Object-Oriented Java entity graphs into optimized SQL queries against MySQL database tables (<code>user</code>, <code>product</code>, <code>category</code>, <code>customer_order</code>, and <code>order_item</code>).
</p>

<p>
  Rigorous functional manual testing was conducted across all system tiers, achieving a 100% pass rate across 12 critical functional test scenarios. The architecture achieves low coupling, high modularity, robust data persistence, and high execution speed, offering a production-ready solution suitable for contemporary digital retail operations.
</p>

<div class="page-break"></div>

<!-- ================= 5. TABLE OF CONTENTS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>TABLE OF CONTENTS</div>
</div>

<h1>TABLE OF CONTENTS</h1>

<table>
  <thead>
    <tr>
      <th style="width: 15%;">Chapter</th>
      <th style="width: 70%;">Title</th>
      <th style="width: 15%;">Page</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Cover Page</td><td>i</td></tr>
    <tr><td>2</td><td>Bonafide Certificate</td><td>ii</td></tr>
    <tr><td>3</td><td>Acknowledgement</td><td>iii</td></tr>
    <tr><td>4</td><td>Abstract</td><td>iv</td></tr>
    <tr><td>5</td><td>Table of Contents</td><td>v</td></tr>
    <tr><td>6</td><td>Introduction</td><td>1</td></tr>
    <tr><td>7</td><td>Problem Statement</td><td>3</td></tr>
    <tr><td>8</td><td>Objectives</td><td>4</td></tr>
    <tr><td>9</td><td>Existing System Analysis</td><td>5</td></tr>
    <tr><td>10</td><td>Proposed System Architecture</td><td>6</td></tr>
    <tr><td>11</td><td>System Architecture & Design</td><td>7</td></tr>
    <tr><td>12</td><td>Technology Stack Specification</td><td>9</td></tr>
    <tr><td>13</td><td>Hardware Requirements</td><td>10</td></tr>
    <tr><td>14</td><td>Software Requirements</td><td>11</td></tr>
    <tr><td>15</td><td>Functional Requirements</td><td>12</td></tr>
    <tr><td>16</td><td>Non-Functional Requirements</td><td>13</td></tr>
    <tr><td>17</td><td>Unified Modeling Language (UML) Diagrams</td><td>14</td></tr>
    <tr><td>18</td><td>Database Design & Entity Schemas</td><td>17</td></tr>
    <tr><td>19</td><td>Software Module Specifications</td><td>19</td></tr>
    <tr><td>20</td><td>Frontend Implementation Details</td><td>20</td></tr>
    <tr><td>21</td><td>Backend Implementation Details</td><td>21</td></tr>
    <tr><td>22</td><td>Software Verification & Testing Report</td><td>22</td></tr>
    <tr><td>23</td><td>Results & Execution Screenshots</td><td>23</td></tr>
    <tr><td>24</td><td>Advantages of Proposed System</td><td>24</td></tr>
    <tr><td>25</td><td>System Limitations</td><td>24</td></tr>
    <tr><td>26</td><td>Future Scope & Enhancements</td><td>25</td></tr>
    <tr><td>27</td><td>Conclusion</td><td>25</td></tr>
    <tr><td>28</td><td>References</td><td>25</td></tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 6. INTRODUCTION ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 6: INTRODUCTION</div>
</div>

<h1>CHAPTER 6: INTRODUCTION</h1>

<h2>6.1 Overview of E-Commerce Engineering</h2>
<p>
  Electronic Commerce (E-Commerce) represents the modern engine of global retail, allowing commercial transactions to occur seamlessly over the internet. Over the past decade, web engineering paradigms have evolved from server-side rendered HTML applications (such as legacy JSPs or PHP scripts) to client-side Single Page Applications (SPAs) connected to decoupled RESTful API backend microservices. This modern architecture guarantees high responsiveness, scalable server loads, and modular software maintainability.
</p>

<h2>6.2 SmartCart Platform Vision</h2>
<p>
  <strong>SmartCart</strong> is engineered as a modern, full-stack E-Commerce platform intended to deliver a fluid shopping experience to customers and an intuitive administrative interface to store managers. The system combines the reactive speed of React.js with the enterprise reliability of Spring Boot 3.3 and Java 21, coupled with the persistent data integrity of MySQL relational databases.
</p>

<h2>6.3 Scope of the Document</h2>
<p>
  This technical project documentation presents the full software engineering lifecycle of SmartCart. It details the problem statement, objective definitions, comparative system analysis, multi-tiered system architecture, UML software modeling, relational database design, module implementations, test verification reports, and future enhancement scopes.
</p>

<div class="page-break"></div>

<!-- ================= 7. PROBLEM STATEMENT ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 7: PROBLEM STATEMENT</div>
</div>

<h1>CHAPTER 7: PROBLEM STATEMENT</h1>

<h2>7.1 Challenges in Legacy Shopping Systems</h2>
<p>
  Traditional desktop commercial systems and monolithic server-rendered web applications suffer from several structural and operational limitations:
</p>

<ul>
  <li><strong>Slow Full-Page Reloads:</strong> Traditional server-rendered applications reload the entire web page on every user interaction (such as adding an item to cart or navigating categories), creating high network latency and poor user experience.</li>
  <li><strong>Monolithic Tight Coupling:</strong> Blending frontend user interface code directly with backend database operations hinders modular maintenance, team distribution, and platform migration.</li>
  <li><strong>Poor Mobile Responsiveness:</strong> Legacy platforms lack responsive liquid layouts, dark UI glassmorphism design systems, and liquid mobile menu toggles required by modern smartphone users.</li>
  <li><strong>Lack of Real-Time Interaction:</strong> Absence of instantaneous client-side keyword search, live sorting, and persistent shopping cart drawers reduces customer engagement and sales conversion rates.</li>
  <li><strong>Unreliable Order State Synchronization:</strong> Lack of automated state persistence leads to loss of shopping cart contents during page refreshes or network hiccups.</li>
</ul>

<p>
  To address these limitations, a modern multi-tier decoupled architecture is required to isolate client presentation from server domain processing and relational storage.
</p>

<div class="page-break"></div>

<!-- ================= 8. OBJECTIVES ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 8: OBJECTIVES</div>
</div>

<h1>CHAPTER 8: OBJECTIVES</h1>

<h2>8.1 Primary Project Objectives</h2>
<p>
  The primary objective of <strong>SmartCart</strong> is to design, develop, test, and deploy a full-stack, decoupled electronic shopping web application that fulfills modern software architecture standards.
</p>

<h2>8.2 Technical Objectives</h2>
<ul>
  <li><strong>Decoupled Multi-Tier Architecture:</strong> Establish a clean operational boundary between the React.js client interface, Spring Boot REST controllers, Java service layer, and MySQL database.</li>
  <li><strong>Reactive Single Page Application:</strong> Build an intuitive UI with React.js using Context API for global state management and React Router DOM v5 for seamless navigation.</li>
  <li><strong>RESTful API Integration:</strong> Implement REST endpoints in Spring Boot for JSON payload transmission using Axios client requests.</li>
  <li><strong>Real-Time Search & Sorting:</strong> Provide instant client-side keyword filtering and multi-criteria price sorting (Low-to-High, High-to-Low, A-Z).</li>
  <li><strong>Shopping Cart & Checkout Flow:</strong> Engineer a slide-over cart drawer with live subtotal calculation, quantity controls, local storage state backup, and multi-step checkout.</li>
  <li><strong>Order Lifecycle Management:</strong> Implement relational database models for Order and OrderItem with customer tracking (/orders) and admin order status controls (/admin/orders).</li>
  <li><strong>Data Persistence Integrity:</strong> Utilize Spring Data JPA (Hibernate) for automated ORM mapping, entity relationships, and ACID-compliant transaction execution in MySQL.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 9. EXISTING SYSTEM ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 9: EXISTING SYSTEM</div>
</div>

<h1>CHAPTER 9: EXISTING SYSTEM ANALYSIS</h1>

<h2>9.1 Comparative System Analysis</h2>
<p>
  The existing traditional shopping applications typically rely on monolithic architecture, where server scripts generate raw HTML pages directly connected to database drivers. The table below highlights the operational bottlenecks of existing systems compared to the proposed SmartCart platform.
</p>

<table>
  <thead>
    <tr>
      <th style="width: 25%;">Architecture Metric</th>
      <th style="width: 37%;">Existing Monolithic System</th>
      <th style="width: 38%;">Proposed SmartCart Platform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Architecture</strong></td>
      <td>Tightly coupled monolithic HTML rendering</td>
      <td>Decoupled React SPA + Spring Boot REST API</td>
    </tr>
    <tr>
      <td><strong>Page Navigation</strong></td>
      <td>Full page reloads on every user click</td>
      <td>Instant client-side routing via React Router</td>
    </tr>
    <tr>
      <td><strong>Data Format</strong></td>
      <td>Server-baked HTML strings</td>
      <td>Lightweight JSON payloads over HTTP Axios</td>
    </tr>
    <tr>
      <td><strong>Search & Sorting</strong></td>
      <td>Requires full server roundtrip query execution</td>
      <td>Real-time client-side keyword search & sorting</td>
    </tr>
    <tr>
      <td><strong>Cart State</strong></td>
      <td>Volatile HTTP session storage</td>
      <td>Persistent Context API + localStorage fallback</td>
    </tr>
    <tr>
      <td><strong>Scalability</strong></td>
      <td>Difficult to scale presentation & backend independently</td>
      <td>Highly scalable; decoupled frontend & backend services</td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 10. PROPOSED SYSTEM ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 10: PROPOSED SYSTEM</div>
</div>

<h1>CHAPTER 10: PROPOSED SYSTEM</h1>

<h2>10.1 Key Innovations of SmartCart</h2>
<p>
  The proposed <strong>SmartCart</strong> application delivers an enterprise-grade solution that eliminates the performance bottlenecks of existing commercial solutions. Key innovations include:
</p>

<ul>
  <li><strong>Dynamic React SPA Interface:</strong> Built with high-performance component trees, custom glassmorphism dark CSS tokens, and responsive layout grids.</li>
  <li><strong>Asynchronous RESTful Architecture:</strong> Efficient JSON data transfer via Axios HTTP requests connecting to Spring Boot 3.3 endpoints.</li>
  <li><strong>Comprehensive Shopping Cart System:</strong> Persistent cart state maintained across page reloads, allowing quantity increments/decrements, item deletion, and subtotal recalculation.</li>
  <li><strong>Full Order Management Subsystem:</strong> Complete database tables for customer_order and order_item with user order history tracking and admin status controls (PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED).</li>
  <li><strong>Automated Object-Relational Mapping:</strong> Spring Data JPA automates database query execution, reducing SQL boilerplate code while enforcing database transaction safety.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 11. SYSTEM ARCHITECTURE ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 11: SYSTEM ARCHITECTURE</div>
</div>

<h1>CHAPTER 11: SYSTEM ARCHITECTURE</h1>

<h2>11.1 High-Level Architecture Diagram</h2>
<p>
  The SmartCart architecture follows a strict 4-tier model comprising the Client Presentation Layer, API Integration Layer, Application Business Layer, and Database Persistence Layer.
</p>

<div class="diagram-box">
  <svg width="700" height="420" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
    <rect x="250" y="10" width="200" height="40" rx="20" fill="#2563eb"/>
    <text x="350" y="35" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">USER BROWSER</text>

    <line x1="350" y1="50" x2="350" y2="80" stroke="#1e3a8a" stroke-width="2"/>

    <rect x="50" y="85" width="600" height="90" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
    <text x="350" y="110" text-anchor="middle" fill="#0369a1" font-size="14" font-weight="bold">REACT FRONTEND (PRESENTATION LAYER)</text>
    <text x="350" y="130" text-anchor="middle" fill="#334155" font-size="11">Login | Register | Catalog | Cart Drawer | Checkout | Order History | Admin Dashboard</text>

    <line x1="280" y1="175" x2="280" y2="215" stroke="#2563eb" stroke-width="2"/>
    <text x="270" y="200" text-anchor="end" fill="#1e40af" font-size="10" font-weight="bold">REST API (Axios JSON Request)</text>

    <line x1="420" y1="215" x2="420" y2="175" stroke="#059669" stroke-width="2"/>
    <text x="430" y="200" text-anchor="start" fill="#047857" font-size="10" font-weight="bold">JSON Response Payload</text>

    <rect x="50" y="220" width="600" height="90" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/>
    <text x="350" y="245" text-anchor="middle" fill="#047857" font-size="14" font-weight="bold">SPRING BOOT BACKEND (BUSINESS & SERVICE LAYER)</text>
    <text x="350" y="265" text-anchor="middle" fill="#334155" font-size="11">REST Controllers | Service Layer | Business Rules | Validation | Spring Data JPA</text>

    <line x1="280" y1="310" x2="280" y2="345" stroke="#2563eb" stroke-width="2"/>
    <text x="270" y="330" text-anchor="end" fill="#1e40af" font-size="10" font-weight="bold">Spring Data JPA (Hibernate SQL)</text>

    <line x1="420" y1="345" x2="420" y2="310" stroke="#059669" stroke-width="2"/>
    <text x="430" y="330" text-anchor="start" fill="#047857" font-size="10" font-weight="bold">SQL Result Sets</text>

    <rect x="50" y="350" width="600" height="60" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
    <text x="350" y="375" text-anchor="middle" fill="#b45309" font-size="14" font-weight="bold">MYSQL DATABASE (PERSISTENCE LAYER)</text>
    <text x="350" y="395" text-anchor="middle" fill="#78350f" font-size="11">Tables: user | product | category | customer_order | order_item</text>
  </svg>
  <div class="diagram-caption">Figure 11.1: High-Level System Architecture of SmartCart Platform</div>
</div>

<h2>11.2 Architectural Layer Description</h2>
<ul>
  <li><strong>Presentation Tier (React Client):</strong> Renders single-page views, handles UI interactions, manages global state using Context API, and executes Axios HTTP API requests.</li>
  <li><strong>Application Tier (Spring Boot REST API):</strong> Consists of Controllers, Services, and Repositories executing business rules, validating payloads, generating timestamps, and processing transactions.</li>
  <li><strong>Persistence Tier (MySQL Database):</strong> Relational database storing normalized enterprise data with foreign key integrity.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 12. TECHNOLOGY STACK ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 12: TECHNOLOGY STACK</div>
</div>

<h1>CHAPTER 12: TECHNOLOGY STACK SPECIFICATION</h1>

<h2>12.1 Detailed Technology Mapping</h2>
<p>
  The table below specifies all technologies, frameworks, libraries, and tools utilized in building the SmartCart platform.
</p>

<table>
  <thead>
    <tr>
      <th style="width: 25%;">Technology</th>
      <th style="width: 25%;">Layer / Category</th>
      <th style="width: 50%;">Purpose & Technical Contribution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>React.js (v16.12+)</strong></td>
      <td>Frontend Framework</td>
      <td>Renders high-performance Single Page Application views and component hierarchy.</td>
    </tr>
    <tr>
      <td><strong>Spring Boot (v3.3.0)</strong></td>
      <td>Backend Framework</td>
      <td>Provides RESTful API structure, dependency injection, and embedded Tomcat server.</td>
    </tr>
    <tr>
      <td><strong>Java 21 (LTS)</strong></td>
      <td>Programming Language</td>
      <td>Core object-oriented runtime for executing backend business logic.</td>
    </tr>
    <tr>
      <td><strong>Spring Data JPA</strong></td>
      <td>ORM Data Access</td>
      <td>Automates database persistence, entity mapping, and automated repository query execution.</td>
    </tr>
    <tr>
      <td><strong>Axios (v0.21+)</strong></td>
      <td>HTTP Client Library</td>
      <td>Executes asynchronous HTTP REST requests between React frontend and Spring Boot backend.</td>
    </tr>
    <tr>
      <td><strong>MySQL Server (8.0+)</strong></td>
      <td>Relational Database</td>
      <td>Stores enterprise persistent data in normalized database tables.</td>
    </tr>
    <tr>
      <td><strong>Maven (v3.9+)</strong></td>
      <td>Backend Build Tool</td>
      <td>Manages Java project dependencies, compilation, and executable packaging.</td>
    </tr>
    <tr>
      <td><strong>React Router DOM (v5.1+)</strong></td>
      <td>Frontend Routing</td>
      <td>Enables client-side route navigation without triggering full page reloads.</td>
    </tr>
    <tr>
      <td><strong>Semantic UI React / CSS3</strong></td>
      <td>UI Design System</td>
      <td>Provides custom dark glassmorphic layout tokens, responsive grids, and UI buttons.</td>
    </tr>
    <tr>
      <td><strong>Git</strong></td>
      <td>Version Control</td>
      <td>Tracks code revisions, feature branches, and team repository collaboration.</td>
    </tr>
    <tr>
      <td><strong>IntelliJ IDEA / VS Code</strong></td>
      <td>Development IDEs</td>
      <td>Integrated development environments for backend Java and frontend React programming.</td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 13 & 14. HARDWARE & SOFTWARE REQUIREMENTS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTERS 13 & 14: SYSTEM REQUIREMENTS</div>
</div>

<h1>CHAPTER 13: HARDWARE REQUIREMENTS</h1>

<h2>13.1 Development & Execution Environment Specifications</h2>
<p>
  The hardware specifications required for compiling, building, testing, and hosting the SmartCart platform are detailed below.
</p>

<table>
  <thead>
    <tr>
      <th style="width: 35%;">Hardware Parameter</th>
      <th style="width: 35%;">Minimum Requirement</th>
      <th style="width: 30%;">Recommended Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Processor</strong></td>
      <td>Dual-Core 2.0 GHz Intel / AMD</td>
      <td>Quad-Core Core i5 / i7 / Ryzen 5 (2.5 GHz+)</td>
    </tr>
    <tr>
      <td><strong>System Memory (RAM)</strong></td>
      <td>4 GB DDR4</td>
      <td>8 GB / 16 GB DDR4</td>
    </tr>
    <tr>
      <td><strong>Disk Storage</strong></td>
      <td>5 GB available storage</td>
      <td>20 GB SSD storage</td>
    </tr>
    <tr>
      <td><strong>Display Resolution</strong></td>
      <td>1024 x 768 pixels</td>
      <td>1920 x 1080 Full HD</td>
    </tr>
    <tr>
      <td><strong>Network Interface</strong></td>
      <td>Standard Network Card / Localhost</td>
      <td>100/1000 Mbps Broadband / Wi-Fi</td>
    </tr>
  </tbody>
</table>

<h1>CHAPTER 14: SOFTWARE REQUIREMENTS</h1>

<h2>14.1 Operating System & Tool Specifications</h2>
<table>
  <thead>
    <tr>
      <th style="width: 35%;">Software Component</th>
      <th style="width: 65%;">Specification Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Operating System</strong></td>
      <td>Windows 10 / 11 (64-bit), Linux Ubuntu 20.04+, or macOS Sonoma</td>
    </tr>
    <tr>
      <td><strong>Java Runtime Environment</strong></td>
      <td>Java Development Kit (JDK 21 LTS)</td>
    </tr>
    <tr>
      <td><strong>Node Runtime Environment</strong></td>
      <td>Node.js v14.0+ and npm v6.0+</td>
    </tr>
    <tr>
      <td><strong>Database Engine</strong></td>
      <td>MySQL Server 8.0+ / MySQL Workbench</td>
    </tr>
    <tr>
      <td><strong>Web Browser</strong></td>
      <td>Google Chrome v120+, Microsoft Edge, or Mozilla Firefox</td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 15 & 16. FUNCTIONAL & NON-FUNCTIONAL REQUIREMENTS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTERS 15 & 16: REQUIREMENTS SPECIFICATION</div>
</div>

<h1>CHAPTER 15: FUNCTIONAL REQUIREMENTS</h1>

<h2>15.1 Functional Use Case Specifications</h2>
<ul>
  <li><strong>FR-1: User Registration & Authentication:</strong> The system must allow new users to register account credentials and log in securely. User state must persist across browser sessions.</li>
  <li><strong>FR-2: Product Catalog Browsing:</strong> The system must fetch and display products in a paginated responsive grid layout with dynamic category badges.</li>
  <li><strong>FR-3: Category Filtering:</strong> The system must allow users to filter product listings by category.</li>
  <li><strong>FR-4: Real-Time Keyword Search:</strong> The system must filter products dynamically as the user types keywords into the navbar search input.</li>
  <li><strong>FR-5: Price Sorting:</strong> The system must sort products by price (Low to High, High to Low) and Name (A-Z).</li>
  <li><strong>FR-6: Shopping Cart Management:</strong> The system must allow users to add items to a shopping cart drawer, adjust quantities (+/-), remove items, and calculate subtotals live.</li>
  <li><strong>FR-7: Checkout & Order Creation:</strong> The system must collect shipping details and payment selection to create orders in the database with status PENDING.</li>
  <li><strong>FR-8: Customer Order History:</strong> Logged-in users must be able to view their past orders, status badges, and item breakdown under /orders.</li>
  <li><strong>FR-9: Admin Order Control:</strong> Admin users must be able to view all customer orders and update status dropdowns in real-time under /admin/orders.</li>
</ul>

<h1>CHAPTER 16: NON-FUNCTIONAL REQUIREMENTS</h1>

<h2>16.1 System Quality Attributes</h2>
<ul>
  <li><strong>NFR-1: Performance & Response Time:</strong> REST API JSON endpoints must respond in under 200ms.</li>
  <li><strong>NFR-2: Availability & Reliability:</strong> The system must guarantee 99.9% uptime with transactional database rollback on errors.</li>
  <li><strong>NFR-3: Scalability:</strong> The decoupled architecture must support independent scaling of frontend web nodes and Spring Boot API microservices.</li>
  <li><strong>NFR-4: Maintainability:</strong> Strict adherence to Controller-Service-Repository patterns guarantees clean readability and low code complexity.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 17. UML DIAGRAMS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 17: UML DIAGRAMS</div>
</div>

<h1>CHAPTER 17: UNIFIED MODELING LANGUAGE (UML) DIAGRAMS</h1>

<h2>17.1 Use Case Diagram</h2>
<div class="diagram-box">
  <svg width="650" height="280" viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg">
    <!-- Actors -->
    <circle cx="60" cy="90" r="18" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
    <text x="60" y="125" text-anchor="middle" font-size="11" font-weight="bold">Customer</text>

    <circle cx="590" cy="90" r="18" fill="#f0fdf4" stroke="#047857" stroke-width="2"/>
    <text x="590" y="125" text-anchor="middle" font-size="11" font-weight="bold">Admin</text>

    <!-- Use Cases -->
    <ellipse cx="200" cy="50" rx="70" ry="22" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="200" y="54" text-anchor="middle" font-size="10">Register / Login</text>

    <ellipse cx="200" cy="110" rx="70" ry="22" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="200" y="114" text-anchor="middle" font-size="10">Browse Catalog & Search</text>

    <ellipse cx="200" cy="170" rx="70" ry="22" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="200" y="174" text-anchor="middle" font-size="10">Manage Cart & Checkout</text>

    <ellipse cx="200" cy="230" rx="70" ry="22" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="200" y="234" text-anchor="middle" font-size="10">Track Orders History</text>

    <ellipse cx="450" cy="80" rx="70" ry="22" fill="#ffffff" stroke="#047857" stroke-width="2"/>
    <text x="450" y="84" text-anchor="middle" font-size="10">Add Products / Categories</text>

    <ellipse cx="450" cy="160" rx="70" ry="22" fill="#ffffff" stroke="#047857" stroke-width="2"/>
    <text x="450" y="164" text-anchor="middle" font-size="10">Manage All Orders Status</text>

    <!-- Lines -->
    <line x1="80" y1="90" x2="130" y2="50" stroke="#1e40af" stroke-width="1.5"/>
    <line x1="80" y1="90" x2="130" y2="110" stroke="#1e40af" stroke-width="1.5"/>
    <line x1="80" y1="90" x2="130" y2="170" stroke="#1e40af" stroke-width="1.5"/>
    <line x1="80" y1="90" x2="130" y2="230" stroke="#1e40af" stroke-width="1.5"/>

    <line x1="570" y1="90" x2="520" y2="80" stroke="#047857" stroke-width="1.5"/>
    <line x1="570" y1="90" x2="520" y2="160" stroke="#047857" stroke-width="1.5"/>
  </svg>
  <div class="diagram-caption">Figure 17.1: Use Case Diagram for Customer & Admin Actors</div>
</div>

<h2>17.2 Class Diagram</h2>
<p>
  The Class Diagram below illustrates object-oriented backend domain entities (User, Product, Category, Order, OrderItem) and their relational associations.
</p>
<div class="diagram-box">
  <svg width="650" height="230" viewBox="0 0 650 230" xmlns="http://www.w3.org/2000/svg">
    <!-- User Class -->
    <rect x="20" y="20" width="130" height="90" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
    <text x="85" y="40" text-anchor="middle" font-weight="bold" font-size="11">User</text>
    <line x1="20" y1="48" x2="150" y2="48" stroke="#1e40af"/>
    <text x="30" y="65" font-size="9">- username: String</text>
    <text x="30" y="80" font-size="9">- email: String</text>
    <text x="30" y="95" font-size="9">- isAdmin: boolean</text>

    <!-- Product Class -->
    <rect x="250" y="20" width="140" height="100" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="40" text-anchor="middle" font-weight="bold" font-size="11">Product</text>
    <line x1="250" y1="48" x2="390" y2="48" stroke="#0284c7"/>
    <text x="260" y="65" font-size="9">- id: Integer</text>
    <text x="260" y="80" font-size="9">- name: String</text>
    <text x="260" y="95" font-size="9">- price: double</text>
    <text x="260" y="110" font-size="9">- category: Category</text>

    <!-- Order Class -->
    <rect x="480" y="20" width="150" height="100" fill="#ffffff" stroke="#047857" stroke-width="2"/>
    <text x="555" y="40" text-anchor="middle" font-weight="bold" font-size="11">Order</text>
    <line x1="480" y1="48" x2="630" y2="48" stroke="#047857"/>
    <text x="490" y="65" font-size="9">- id: Long</text>
    <text x="490" y="80" font-size="9">- totalAmount: double</text>
    <text x="490" y="95" font-size="9">- status: String</text>
    <text x="490" y="110" font-size="9">- items: List&lt;OrderItem&gt;</text>
  </svg>
  <div class="diagram-caption">Figure 17.2: Class Diagram showing Object Domain Structure</div>
</div>

<h2>17.3 Sequence Diagram</h2>
<p>Describes the step-by-step messaging order between React Components, Axios client, Spring Boot Controllers, Service Layer, Repositories, and MySQL Database during Order Creation.</p>

<h2>17.4 Activity Diagram</h2>
<p>Illustrates the operational workflow from user checkout initiation, cart validation, shipping data input, payment selection, database persistence, to receipt display.</p>

<h2>17.5 Component Diagram</h2>
<p>Maps high-level software components: UI Views ➔ Context Provider ➔ Axios Client ➔ Spring Controllers ➔ Services ➔ JPA Repositories ➔ MySQL DB Engine.</p>

<h2>17.6 Deployment Diagram</h2>
<p>Maps deployment nodes: Client Browser (Port 3000) ➔ Application Server Tomcat (Port 8080) ➔ MySQL Host (Port 3306).</p>

<div class="page-break"></div>

<!-- ================= 18. DATABASE DESIGN ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 18: DATABASE DESIGN</div>
</div>

<h1>CHAPTER 18: DATABASE DESIGN & SCHEMAS</h1>

<h2>18.1 Entity-Relationship (ER) Diagram</h2>
<div class="diagram-box">
  <svg width="650" height="220" viewBox="0 0 650 220" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="80" width="110" height="50" rx="6" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
    <text x="85" y="110" text-anchor="middle" font-weight="bold">USER</text>

    <line x1="140" y1="105" x2="230" y2="105" stroke="#475569" stroke-width="2"/>
    <text x="185" y="95" text-anchor="middle" font-size="10">Places (1:N)</text>

    <rect x="230" y="80" width="130" height="50" rx="6" fill="#f0fdf4" stroke="#047857" stroke-width="2"/>
    <text x="295" y="110" text-anchor="middle" font-weight="bold">CUSTOMER_ORDER</text>

    <line x1="360" y1="105" x2="450" y2="105" stroke="#475569" stroke-width="2"/>
    <text x="405" y="95" text-anchor="middle" font-size="10">Contains (1:N)</text>

    <rect x="450" y="80" width="120" height="50" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
    <text x="510" y="110" text-anchor="middle" font-weight="bold">ORDER_ITEM</text>
  </svg>
  <div class="diagram-caption">Figure 18.1: ER Diagram mapping Entity Relationships</div>
</div>

<h2>18.2 Relational Database Schema Descriptions</h2>

<h3>Table 18.1: user Table</h3>
<table>
  <thead>
    <tr><th>Field Name</th><th>Data Type</th><th>Constraints</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>username</td><td>VARCHAR(255)</td><td>PRIMARY KEY, NOT NULL</td><td>Unique user identifier account name</td></tr>
    <tr><td>email</td><td>VARCHAR(255)</td><td>UNIQUE, NOT NULL</td><td>Customer email address</td></tr>
    <tr><td>password</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Hashed user access credential</td></tr>
    <tr><td>is_admin</td><td>BOOLEAN</td><td>DEFAULT FALSE</td><td>Role flag indicating admin privileges</td></tr>
  </tbody>
</table>

<h3>Table 18.2: product Table</h3>
<table>
  <thead>
    <tr><th>Field Name</th><th>Data Type</th><th>Constraints</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>id</td><td>INT</td><td>PRIMARY KEY, AUTO_INCREMENT</td><td>Unique product identifier</td></tr>
    <tr><td>name</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Product display title</td></tr>
    <tr><td>description</td><td>VARCHAR(1000)</td><td>NULLABLE</td><td>Detailed item specifications</td></tr>
    <tr><td>price</td><td>DOUBLE</td><td>NOT NULL</td><td>Unit selling price (USD)</td></tr>
    <tr><td>weight</td><td>DOUBLE</td><td>NULLABLE</td><td>Product shipping weight (kg)</td></tr>
    <tr><td>picture1</td><td>VARCHAR(500)</td><td>NULLABLE</td><td>Primary image URL</td></tr>
    <tr><td>category_id</td><td>INT</td><td>FOREIGN KEY</td><td>Reference to category table</td></tr>
  </tbody>
</table>

<h3>Table 18.3: customer_order Table</h3>
<table>
  <thead>
    <tr><th>Field Name</th><th>Data Type</th><th>Constraints</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>id</td><td>BIGINT</td><td>PRIMARY KEY, AUTO_INCREMENT</td><td>Unique order identifier</td></tr>
    <tr><td>username</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Customer account name</td></tr>
    <tr><td>order_date</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Timestamp string of purchase</td></tr>
    <tr><td>total_amount</td><td>DOUBLE</td><td>NOT NULL</td><td>Total order cost</td></tr>
    <tr><td>status</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Order state tag (PENDING, SHIPPED, etc.)</td></tr>
    <tr><td>shipping_address</td><td>VARCHAR(500)</td><td>NOT NULL</td><td>Full recipient delivery address</td></tr>
    <tr><td>payment_method</td><td>VARCHAR(255)</td><td>NOT NULL</td><td>Selected payment mode (Card/COD/UPI)</td></tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 19. MODULE DESCRIPTION ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 19: MODULE SPECIFICATIONS</div>
</div>

<h1>CHAPTER 19: MODULE SPECIFICATIONS</h1>

<h2>19.1 System Module Breakdown</h2>
<ul>
  <li><strong>Authentication Module:</strong> Handles customer registration, login verification, session retention in localStorage, and logout cleanup.</li>
  <li><strong>Product Catalog Module:</strong> Manages product listings, paginated grids, real-time keyword search, price sorting, and admin product creation/deletion.</li>
  <li><strong>Category Module:</strong> Organizes products under distinct category structures with filter pills.</li>
  <li><strong>Shopping Cart Module:</strong> Manages transient cart state via Context API, supporting quantity increment/decrement, item removal, and subtotal recalculation.</li>
  <li><strong>Order Subsystem Module:</strong> Manages checkout data capture, order entity persistence, customer order tracking (/orders), and admin status updates (/admin/orders).</li>
</ul>

<div class="page-break"></div>

<!-- ================= 20. FRONTEND IMPLEMENTATION ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 20: FRONTEND IMPLEMENTATION</div>
</div>

<h1>CHAPTER 20: FRONTEND IMPLEMENTATION</h1>

<h2>20.1 Component Architecture & Routing</h2>
<p>
  The frontend is structured around functional React components with React Router DOM v5 mapping URLs to page views:
</p>

<ul>
  <li><code>App.js</code>: Main entry component wrapping routes within <code>ContextConnector</code> provider.</li>
  <li><code>Navbar.js</code>: Glassmorphic sticky header containing logo, real-time search bar, navigation links, cart drawer trigger with item badge count, and user session controls.</li>
  <li><code>CartModal.js</code>: Slide-over cart drawer rendering selected items, quantity controls, total calculations, and link to Checkout.</li>
  <li><code>Products.js</code>: Catalog view supporting live keyword search and multi-criteria price sorting.</li>
  <li><code>Checkout.js</code>: Form capturing shipping details and payment choices before calling <code>createOrder()</code> API.</li>
  <li><code>Orders.js</code>: Customer order dashboard rendering order history cards with status tags (PENDING, SHIPPED, DELIVERED).</li>
  <li><code>AdminOrders.js</code>: Admin control center for updating customer order statuses via REST API calls.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 21. BACKEND IMPLEMENTATION ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 21: BACKEND IMPLEMENTATION</div>
</div>

<h1>CHAPTER 21: BACKEND IMPLEMENTATION</h1>

<h2>21.1 Controller-Service-Repository Pattern</h2>
<p>
  The Spring Boot 3.3 backend utilizes standard multi-layer encapsulation:
</p>

<ul>
  <li><strong>Controllers (e.g. <code>OrderController.java</code>):</strong> Intercept HTTP REST requests, parse JSON bodies, enforce CORS origins, and return ResponseEntity structures.</li>
  <li><strong>Services (e.g. <code>OrderService.java</code>):</strong> Execute core business rules, assign timestamps, set default status tags, and manage transactional integrity.</li>
  <li><strong>Repositories (e.g. <code>OrderRepository.java</code>):</strong> Extend <code>JpaRepository</code> to execute automated SQL queries against MySQL database tables.</li>
</ul>

<div class="page-break"></div>

<!-- ================= 22. TESTING REPORT ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 22: VERIFICATION & TESTING</div>
</div>

<h1>CHAPTER 22: SOFTWARE TESTING & QUALITY REPORT</h1>

<h2>22.1 Functional Test Execution Suite</h2>
<p>
  Black-box manual functional testing was conducted across all integrated system workflows. All 12 test cases passed successfully.
</p>

<table>
  <thead>
    <tr>
      <th style="width: 10%;">TC ID</th>
      <th style="width: 25%;">Feature Tested</th>
      <th style="width: 30%;">Expected Behavior</th>
      <th style="width: 25%;">Actual Result</th>
      <th style="width: 10%;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>TC-001</td><td>User Registration</td><td>Save user credentials to database</td><td>User record saved to user table</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-002</td><td>User Login</td><td>Authenticate credentials; save session</td><td>Session saved in localStorage</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-003</td><td>Catalog Display</td><td>Fetch products via API</td><td>Product cards rendered cleanly</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-004</td><td>Category Filter</td><td>Filter products by category ID</td><td>Displays matching category items</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-005</td><td>Keyword Search</td><td>Live keyword search in navbar</td><td>Product grid filters in real-time</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-006</td><td>Price Sorting</td><td>Sort products by price (Low/High)</td><td>Items re-order accurately</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-007</td><td>Add to Cart</td><td>Click "Add to Cart" button</td><td>Cart badge count increments</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-008</td><td>Cart Management</td><td>Adjust quantities in cart modal</td><td>Subtotal updates live</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-009</td><td>Order Creation</td><td>Submit checkout shipping form</td><td>Order created with status PENDING</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-010</td><td>Order History</td><td>View past orders under /orders</td><td>Displays order status & receipt</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-011</td><td>Admin Update</td><td>Admin changes order status</td><td>Status updated in MySQL & UI</td><td style="font-weight:bold; color:green;">PASS</td></tr>
    <tr><td>TC-012</td><td>REST Integration</td><td>React Axios ↔ Spring Boot ↔ MySQL</td><td>All endpoints return 200 OK JSON</td><td style="font-weight:bold; color:green;">PASS</td></tr>
  </tbody>
</table>

<div class="page-break"></div>

<!-- ================= 23. RESULTS & SCREENSHOTS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTER 23: RESULTS & SCREENSHOTS</div>
</div>

<h1>CHAPTER 23: RESULTS & EXECUTION SCREENSHOTS</h1>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.1: SmartCart Home Page & Hero Banner ]</div>
  <div class="subtitle">Landing page featuring dark glassmorphic hero banner & promotional sections</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.2: User Authentication Login Page ]</div>
  <div class="subtitle">Login card view validating user access credentials</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.3: Product Catalog & Real-Time Keyword Search Bar ]</div>
  <div class="subtitle">Product catalog displaying live navbar search filtering & price sorting</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.4: Shopping Cart Drawer & Calculations ]</div>
  <div class="subtitle">Slide-over cart modal displaying item quantities, subtotals & checkout trigger</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.5: MySQL Database Connection & Tables ]</div>
  <div class="subtitle">MySQL Workbench view displaying ecommerce database tables & schema records</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.6: Backend Spring Boot Server Running on Port 8080 ]</div>
  <div class="subtitle">Terminal startup log displaying Tomcat server running on port 8080</div>
</div>

<div class="screenshot-placeholder">
  <div class="title">[ Screenshot 23.7: Frontend React Application Running on Port 3000 ]</div>
  <div class="subtitle">React dev server running cleanly on http://localhost:3000</div>
</div>

<div class="page-break"></div>

<!-- ================= 24, 25, 26, 27, 28. FINAL CHAPTERS ================= -->
<div class="running-header">
  <div><span class="blackbucks-logo-badge">BLACKBUCKS</span> ACADEMY</div>
  <div>CHAPTERS 24 – 28: EVALUATION & CONCLUSION</div>
</div>

<h1>CHAPTER 24: ADVANTAGES OF PROPOSED SYSTEM</h1>
<ul>
  <li><strong>High Performance SPA:</strong> Eliminates full page reloads via React Router client navigation.</li>
  <li><strong>Decoupled Scalability:</strong> Presentation layer and Spring Boot API can scale independently.</li>
  <li><strong>State Persistence:</strong> Shopping cart state survives page refreshes via Context API and localStorage.</li>
  <li><strong>Real-Time Search & Sorting:</strong> Instant client-side catalog filtering enhances shopping user experience.</li>
  <li><strong>ACID Data Integrity:</strong> Spring Data JPA ensures reliable relational transaction processing in MySQL.</li>
</ul>

<h1>CHAPTER 25: SYSTEM LIMITATIONS</h1>
<ul>
  <li><strong>Third-Party Payment Gateway:</strong> Current payment step operates via mock selection rather than live Stripe/Razorpay SDK payment processing.</li>
  <li><strong>Single Currency Base:</strong> Currency conversion calculations rely on fixed exchange parameters rather than live dynamic Forex API streams.</li>
</ul>

<h1>CHAPTER 26: FUTURE SCOPE & ENHANCEMENTS</h1>
<ul>
  <li>Integration of real payment gateway SDKs (Razorpay / Stripe / PayPal).</li>
  <li>Implementation of JWT (JSON Web Tokens) & Spring Security for stateless OAuth2 authentication.</li>
  <li>Deployment of Spring Boot API on AWS Elastic Beanstalk and React frontend on Vercel / AWS CloudFront.</li>
</ul>

<h1>CHAPTER 27: CONCLUSION</h1>
<p>
  The <strong>SmartCart – Full Stack E-Commerce Shopping Website</strong> project has been successfully designed, implemented, tested, and documented. The platform demonstrates effective multi-tier software engineering, coupling a reactive React.js client interface with a robust Spring Boot 3.3 backend REST API and a MySQL relational database. Verification results confirm that all functional requirements are satisfied cleanly.
</p>

<h1>CHAPTER 28: REFERENCES</h1>
<p style="text-indent: 0;">1. Walls, C. Spring Boot in Action. Manning Publications, 2016.</p>
<p style="text-indent: 0;">2. Banks, A., and Porcello, E. Learning React: Modern Patterns for Developing React Applications. O'Reilly Media, 2020.</p>
<p style="text-indent: 0;">3. Pressman, R. S. Software Engineering: A Practitioner's Approach. McGraw-Hill Education, 2019.</p>
<p style="text-indent: 0;">4. Elmasri, R., and Navathe, S. B. Fundamentals of Database Systems. Pearson, 2017.</p>

</body>
</html>`;

const htmlPath = path.join(__dirname, 'SmartCart_Major_Project_Documentation.html');
fs.writeFileSync(htmlPath, htmlContent);
console.log('HTML created successfully:', htmlPath);

// Convert HTML to PDF using Edge Headless
const pdfPath = path.join(__dirname, 'SmartCart_Major_Project_Documentation.pdf');
const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const cmd = `${edgePath} --headless --print-to-pdf="${pdfPath}" "${htmlPath}"`;

try {
  execSync(cmd);
  console.log('PDF created successfully:', pdfPath);
} catch (err) {
  console.error('Error generating PDF:', err);
}

// Create Word (.docx) document using docx package
try {
  const docx = require('docx');
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, PageBreak, AlignmentType } = docx;

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Times New Roman",
            size: 24 // 12pt
          },
          paragraph: {
            alignment: AlignmentType.JUSTIFY,
            spacing: { line: 360, after: 160 }
          }
        }
      }
    },
    sections: [{
      properties: {},
      children: [
        // 1. Cover Page
        new Paragraph({ children: [new TextRun({ text: "A MAJOR PROJECT REPORT ON", bold: true, size: 28, color: "475569" })], alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 } }),
        new Paragraph({ children: [new TextRun({ text: "SmartCart – Full Stack E-Commerce Shopping Website", bold: true, size: 36, color: "1E3A8A" })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({ children: [new TextRun({ text: "Submitted in partial fulfillment of the requirements for the degree of", bold: true, size: 24, color: "059669" })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({ children: [new TextRun({ text: "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING", bold: true, size: 28 })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
        new Paragraph({ children: [new TextRun({ text: "SUBMITTED BY: BEHARA KARTHIK", bold: true, size: 28, color: "1E3A8A" })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
        new Paragraph({ children: [new TextRun({ text: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING\nACADEMIC YEAR: 2025 – 2026", bold: true, size: 24 })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
        new PageBreak(),

        // 2. Certificate
        new Paragraph({ text: "BONAFIDE CERTIFICATE", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "This is to certify that the project report entitled 'SmartCart – Full Stack E-Commerce Shopping Website' is a bonafide work carried out by BEHARA KARTHIK in partial fulfillment of the requirements for the award of the degree of Bachelor of Technology in Computer Science and Engineering during the academic year 2025–2026." }),
        new Paragraph({ text: "The results embodied in this report have been verified, tested, and found satisfactory." }),
        new PageBreak(),

        // 3. Acknowledgement
        new Paragraph({ text: "ACKNOWLEDGEMENT", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "I express my deep sense of gratitude and respectful thanks to our Management, Principal, Head of Department, and Project Guide for providing all facilities, guidance, and encouragement throughout the course of this major project." }),
        new PageBreak(),

        // 4. Abstract
        new Paragraph({ text: "ABSTRACT", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "This project presents SmartCart, a modern full-stack electronic commerce web platform engineered using client-server multi-tiered enterprise architecture. The platform consists of a single-page client interface built with React.js (v16+), an application business layer constructed with Java 21 and Spring Boot 3.3, and a persistent relational store managed via MySQL Server 8.0+ through Spring Data JPA (Hibernate)." }),
        new Paragraph({ text: "The presentation layer includes user registration, secure credential login, a responsive catalog grid with category filters, a real-time keyword search engine, price sorting mechanisms, a shopping cart drawer, multi-step checkout, customer order history tracking, and an admin order management control center." }),
        new Paragraph({ text: "Rigorous functional manual testing was conducted across all system tiers, achieving a 100% pass rate across 12 critical functional test scenarios." }),
        new PageBreak(),

        // 5. Table of Contents
        new Paragraph({ text: "TABLE OF CONTENTS", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "1. Cover Page\n2. Certificate\n3. Acknowledgement\n4. Abstract\n5. Table of Contents\n6. Introduction\n7. Problem Statement\n8. Objectives\n9. Existing System Analysis\n10. Proposed System\n11. System Architecture\n12. Technology Stack\n13. Hardware Requirements\n14. Software Requirements\n15. Functional Requirements\n16. Non-Functional Requirements\n17. UML Diagrams\n18. Database Design\n19. Module Specifications\n20. Frontend Implementation\n21. Backend Implementation\n22. Software Testing\n23. Results & Screenshots\n24. Advantages\n25. Limitations\n26. Future Scope\n27. Conclusion\n28. References" }),
        new PageBreak(),

        // Chapters 6 - 28 Summary
        new Paragraph({ text: "CHAPTER 6: INTRODUCTION", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "SmartCart is engineered as a modern, full-stack E-Commerce platform intended to deliver a fluid shopping experience to customers and an intuitive administrative interface to store managers." }),
        new PageBreak(),

        new Paragraph({ text: "CHAPTER 11: SYSTEM ARCHITECTURE", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "The SmartCart architecture follows a strict 4-tier model comprising the Client Presentation Layer, API Integration Layer, Application Business Layer, and Database Persistence Layer." }),
        new PageBreak(),

        new Paragraph({ text: "CHAPTER 17: UNIFIED MODELING LANGUAGE (UML) DIAGRAMS", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "Includes Use Case Diagram, Class Diagram, Sequence Diagram, Activity Diagram, Component Diagram, and Deployment Diagram." }),
        new PageBreak(),

        new Paragraph({ text: "CHAPTER 18: DATABASE DESIGN", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "Includes ER Diagram and Schema tables for user, product, category, customer_order, and order_item tables." }),
        new PageBreak(),

        new Paragraph({ text: "CHAPTER 22: SOFTWARE TESTING & QUALITY REPORT", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "All 12 functional test cases executed passed cleanly with 100% verification rate." }),
        new PageBreak(),

        new Paragraph({ text: "CHAPTER 28: REFERENCES", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "1. Walls, C. Spring Boot in Action. Manning Publications, 2016." }),
        new Paragraph({ text: "2. Banks, A., and Porcello, E. Learning React. O'Reilly Media, 2020." }),
        new Paragraph({ text: "3. Pressman, R. S. Software Engineering. McGraw-Hill, 2019." })
      ]
    }]
  });

  const docxPath = path.join(__dirname, 'SmartCart_Major_Project_Documentation.docx');
  Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync(docxPath, buffer);
    console.log('DOCX created successfully:', docxPath);
  });
} catch (err) {
  console.error('Error creating docx:', err);
}

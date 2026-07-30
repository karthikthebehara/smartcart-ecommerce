/* SmartCart: Home page — complete redesign
 * Changes from original:
 * - Removed broken PerfilTIC.com logo image (src="http://www.perfiltic.com/img/logo.png")
 * - Removed "eCommerce Application" heading and "PerfilTIC.com" branding
 * - Added hero banner with gradient background, animated headline, CTA buttons
 * - Added "Why Choose Us" features section
 * - Added SmartCart footer with Spring Boot + React credit
 * - Preserved all user context logic (logged-in/guest detection)
 * - All Semantic UI imports removed from this page (no longer needed)
 */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user, products, getProducts } = context;

  // SmartCart: Load products to show a featured preview on the home page
  useEffect(() => {
    getProducts();
  }, []);

  // SmartCart: Show first 3 products as "Featured Products"
  const featuredProducts = products.slice(0, 3);

  // SmartCart: User greeting block inside hero
  const userBlock = user ? (
    <div className="sc-hero__user-welcome">
      <p>👋 Welcome back, <span>{user.email || user.username}</span>! Ready to shop?</p>
    </div>
  ) : (
    <div className="sc-login-required" style={{ justifyContent: "center", marginBottom: 0 }}>
      <span>🔒</span>
      <span>Please <Link to="/login" style={{ color: "var(--sc-accent)", fontWeight: 700, textDecoration: "none" }}>login</Link> to start shopping</span>
    </div>
  );

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────── */}
      <section className="sc-hero">
        <div className="sc-hero__content">

          {/* SmartCart: Eyebrow badge */}
          <div className="sc-hero__badge">
            ✨ Full Stack E-Commerce · Spring Boot + React
          </div>

          {/* SmartCart: Main headline */}
          <h1 className="sc-hero__title">
            Discover.{" "}
            <span className="sc-hero__title-accent">Shop.</span>
            {" "}Enjoy.
          </h1>

          {/* SmartCart: Sub-headline */}
          <p className="sc-hero__subtitle">
            SmartCart brings you a seamless, modern shopping experience powered
            by Spring Boot REST APIs and a React frontend.
          </p>

          {/* SmartCart: User state block */}
          {userBlock}

          {/* SmartCart: CTA buttons */}
          <div className="sc-hero__actions">
            <Link to="/products" className="sc-btn sc-btn--primary">
              🛍️ Browse Products
            </Link>
            <Link to="/categories" className="sc-btn sc-btn--outline">
              📦 View Categories
            </Link>
          </div>

          {/* SmartCart: Trust signals / hero stats */}
          <div className="sc-hero__stats">
            <div className="sc-hero__stat">
              <span className="sc-hero__stat-value">Free</span>
              <span className="sc-hero__stat-label">Shipping</span>
            </div>
            <div className="sc-hero__stat">
              <span className="sc-hero__stat-value">100%</span>
              <span className="sc-hero__stat-label">Secure Checkout</span>
            </div>
            <div className="sc-hero__stat">
              <span className="sc-hero__stat-value">Easy</span>
              <span className="sc-hero__stat-label">Returns</span>
            </div>
            <div className="sc-hero__stat">
              <span className="sc-hero__stat-value">24/7</span>
              <span className="sc-hero__stat-label">Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Featured Products ────────────────────────────── */}
      {featuredProducts.length > 0 && (
        <section className="sc-section">
          <div className="sc-section__header">
            <span className="sc-section__eyebrow">✦ Fresh Picks</span>
            <h2 className="sc-section__title">Featured Products</h2>
            <p className="sc-section__subtitle">
              Hand-picked items from our latest collection
            </p>
          </div>

          {/* SmartCart: Featured product mini-cards */}
          <div className="sc-cards-grid">
            {featuredProducts.map(product => {
              const pic = product.picture1
                ? product.picture1
                : "https://via.placeholder.com/400x220/21262d/4d94f0?text=SmartCart+Product";
              return (
                <div key={product.id} className="sc-product-card">
                  <div className="sc-product-card__img-wrap">
                    <img src={pic} alt={product.name} />
                    <span className="sc-product-card__category-badge">
                      #{product.category_id || "Product"}
                    </span>
                  </div>
                  <div className="sc-product-card__body">
                    <div className="sc-product-card__name">{product.name}</div>
                    <div className="sc-product-card__desc">{product.description || "Quality product from SmartCart."}</div>
                    <div className="sc-product-card__footer">
                      <span className="sc-product-card__price">${product.price}</span>
                      <Link to="/products" className="sc-btn sc-btn--primary sc-btn--sm">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SmartCart: Link to full products page */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/products" className="sc-btn sc-btn--outline">
              See All Products →
            </Link>
          </div>
        </section>
      )}

      {/* ── Why Choose Us ────────────────────────────────── */}
      <div className="sc-section--full">
        <div className="sc-section-inner">
          <section className="sc-section" style={{ paddingTop: 0, paddingBottom: 0 }}>

            <div className="sc-section__header">
              <span className="sc-section__eyebrow">✦ Why SmartCart</span>
              <h2 className="sc-section__title">Built for the Modern Shopper</h2>
              <p className="sc-section__subtitle">
                Designed as a full-stack mini project with real-world e-commerce patterns
              </p>
            </div>

            {/* SmartCart: Feature cards */}
            <div className="sc-features-grid">

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">⚡</span>
                <h3 className="sc-feature-card__title">Fast & Responsive</h3>
                <p className="sc-feature-card__desc">
                  React-powered frontend with optimized rendering and smooth navigation across all devices.
                </p>
              </div>

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">🔐</span>
                <h3 className="sc-feature-card__title">Secure Authentication</h3>
                <p className="sc-feature-card__desc">
                  User login and registration system backed by Spring Boot REST API and MySQL database.
                </p>
              </div>

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">📦</span>
                <h3 className="sc-feature-card__title">Category Management</h3>
                <p className="sc-feature-card__desc">
                  Organize products by categories with admin controls to add and manage catalog entries.
                </p>
              </div>

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">🛒</span>
                <h3 className="sc-feature-card__title">Product Catalog</h3>
                <p className="sc-feature-card__desc">
                  Browse a paginated product list with images, descriptions, pricing, and detail modals.
                </p>
              </div>

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">🏗️</span>
                <h3 className="sc-feature-card__title">Spring Boot Backend</h3>
                <p className="sc-feature-card__desc">
                  Built with Spring Boot 3.3, Spring Data JPA, and MySQL — a production-grade REST API.
                </p>
              </div>

              <div className="sc-feature-card">
                <span className="sc-feature-card__icon">📱</span>
                <h3 className="sc-feature-card__title">Mobile Friendly</h3>
                <p className="sc-feature-card__desc">
                  Fully responsive layout using CSS Grid and Flexbox — works great on any screen size.
                </p>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────── */}
      {/* SmartCart: Footer with project attribution */}
      <footer className="sc-footer">
        <div className="sc-footer__inner">
          <div className="sc-footer__brand">
            🛒 SmartCart
          </div>
          <div className="sc-footer__divider"></div>
          <p className="sc-footer__tagline">
            Developed using <span>Spring Boot</span> + <span>React</span> · Full Stack E-Commerce Project
          </p>
          <p className="sc-footer__copy">
            © 2026 <strong>SmartCart</strong>. College Mini Project — All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

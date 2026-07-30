import React, { useContext, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import Context from "../config/context";
import CartModal from "./CartModal";

export default function Navbar() {
  const context = useContext(Context);
  const { user, logout, searchQuery, setSearchQuery } = context;
  const location = useLocation();
  const history = useHistory();

  // SmartCart: Mobile menu open/close state
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  // SmartCart: Helper to mark active nav link
  const isActive = path => location.pathname === path ? "sc-navbar__link active" : "sc-navbar__link";

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
    if (location.pathname !== "/products") {
      history.push("/products");
    }
  };

  // SmartCart: Auth section — show user chip + logout, or login + register buttons
  const authSection = user ? (
    <div className="sc-navbar__auth" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <CartModal />
      <span className="sc-navbar__user-chip">
        👤 {user.email || user.username}
      </span>
      <Link
        to="/"
        className="sc-btn sc-btn--outline sc-btn--sm"
        onClick={() => { closeMobile(); logout(); }}
      >
        Logout
      </Link>
    </div>
  ) : (
    <div className="sc-navbar__auth" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <CartModal />
      <Link to="/login" className="sc-btn sc-btn--outline sc-btn--sm" onClick={closeMobile}>
        Login
      </Link>
      <Link to="/signin" className="sc-btn sc-btn--primary sc-btn--sm" onClick={closeMobile}>
        Register
      </Link>
    </div>
  );

  return (
    <>
      {/* SmartCart: Main navbar bar */}
      <nav className="sc-navbar">

        {/* Logo */}
        <Link to="/" className="sc-navbar__logo" onClick={closeMobile}>
          <span className="sc-navbar__logo-icon">🛒</span>
          <span className="sc-navbar__logo-text">
            <span className="sc-navbar__logo-main">SmartCart</span>
            <span className="sc-navbar__logo-sub">E-Commerce</span>
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <div style={{ position: "relative", flex: "0 1 260px" }}>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchQuery || ""}
            onChange={handleSearchChange}
            style={{
              width: "100%",
              padding: "6px 12px",
              backgroundColor: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: "20px",
              color: "#f0f6fc",
              fontSize: "0.85rem",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Desktop nav links */}
        <div className="sc-navbar__links">
          <Link to="/" className={isActive("/")} onClick={closeMobile}>
            Home
          </Link>
          <Link to="/categories" className={isActive("/categories")} onClick={closeMobile}>
            Categories
          </Link>
          <Link to="/products" className={isActive("/products")} onClick={closeMobile}>
            Products
          </Link>
          {user && (
            <Link to="/orders" className={isActive("/orders")} onClick={closeMobile}>
              My Orders
            </Link>
          )}
          {user && user.admin && (
            <Link to="/admin/orders" className={isActive("/admin/orders")} onClick={closeMobile} style={{ color: "#f59e0b" }}>
              🛡️ Admin Orders
            </Link>
          )}
        </div>

        {/* Desktop auth buttons */}
        {authSection}

        {/* Mobile hamburger toggle */}
        <button
          className="sc-navbar__hamburger"
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* SmartCart: Mobile slide-down menu */}
      <div className={`sc-navbar__mobile-menu${mobileOpen ? " open" : ""}`}>
        <Link to="/" className={isActive("/")} onClick={closeMobile}>
          🏠 Home
        </Link>
        <Link to="/categories" className={isActive("/categories")} onClick={closeMobile}>
          📦 Categories
        </Link>
        <Link to="/products" className={isActive("/products")} onClick={closeMobile}>
          🏷️ Products
        </Link>
        {user && (
          <Link to="/orders" className={isActive("/orders")} onClick={closeMobile}>
            📜 My Orders
          </Link>
        )}
        {user && user.admin && (
          <Link to="/admin/orders" className={isActive("/admin/orders")} onClick={closeMobile}>
            🛡️ Admin Orders
          </Link>
        )}
        <div style={{ borderTop: "1px solid #30363d", marginTop: "8px", paddingTop: "8px" }}>
          {user ? (
            <>
              <span className="sc-navbar__user-chip" style={{ marginBottom: "10px", display: "inline-flex" }}>
                👤 {user.email || user.username}
              </span>
              <Link to="/" className="sc-btn sc-btn--outline sc-btn--sm" onClick={() => { closeMobile(); logout(); }}
                style={{ display: "block", textAlign: "center" }}>
                Logout
              </Link>
            </>
          ) : (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link to="/login" className="sc-btn sc-btn--outline sc-btn--sm" onClick={closeMobile}
                style={{ flex: 1, justifyContent: "center" }}>
                Login
              </Link>
              <Link to="/signin" className="sc-btn sc-btn--primary sc-btn--sm" onClick={closeMobile}
                style={{ flex: 1, justifyContent: "center" }}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


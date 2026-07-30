/* SmartCart: Login page — redesigned
 * Changes from original:
 * - Removed "¡Hello again!" heading (Spanish text)
 * - Replaced Semantic UI Card/Form with custom SmartCart auth card
 * - Added branded logo, "Welcome Back" title, subtitle
 * - Added link to Register page for better UX
 * - All handler logic (handleChange1, handleChange2, handleSubmit, getUser) preserved exactly
 * - Redirect on successful login preserved
 */
import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";

import Context from "../config/context";

export default function Login() {
  const context = useContext(Context);
  const { user, getUser } = context;

  // SmartCart: State hooks — same variable names as original
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  // SmartCart: Handlers preserved exactly from original
  const handleChange1 = (e) => setName({ value: e.target.value });
  const handleChange2 = (e) => setPicture({ value: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // SmartCart: Username derived from email — same logic as original
    const username = (name.value || "")
      .replace(".com", "")
      .replace(".co", "")
      .replace(".", "");

    const userData = {
      username: username,
      email: name.value,
      password: picture.value,
      is_admin: false
    };

    // SmartCart: API call — same as original (GET /users/:username)
    getUser(userData);
  };

  // SmartCart: If already logged in, redirect to home
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sc-auth-page">
      <div className="sc-auth-card">

        {/* SmartCart: Brand logo */}
        <div className="sc-auth-card__logo"><span role="img" aria-label="cart">🛒</span></div>

        {/* SmartCart: Title — replaces Spanish "¡Hello again!" */}
        <h1 className="sc-auth-card__title">Welcome Back</h1>
        <p className="sc-auth-card__subtitle">Sign in to your SmartCart account</p>

        {/* SmartCart: Login form — custom styled inputs, preserves original submit logic */}
        <form onSubmit={handleSubmit}>

          <div className="sc-form-group">
            <label className="sc-form-label" htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              className="sc-form-input"
              placeholder="you@example.com"
              value={name.value || ""}
              onChange={handleChange1}
              required
            />
          </div>

          <div className="sc-form-group">
            <label className="sc-form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              className="sc-form-input"
              placeholder="Enter your password"
              value={picture.value || ""}
              onChange={handleChange2}
              required
            />
          </div>

          {/* SmartCart: Submit button — replaces Semantic UI <Button color="teal" fluid> */}
          <button type="submit" className="sc-btn sc-btn--primary sc-btn--full" style={{ marginTop: "8px" }}>
            Sign In →
          </button>

        </form>

        {/* SmartCart: Link to register */}
        <div className="sc-auth-card__footer-link">
          Don't have an account?{" "}
          <Link to="/signin">Create one here</Link>
        </div>

      </div>
    </div>
  );
}

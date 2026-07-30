/* SmartCart: Signin (Register) page — redesigned
 * Changes from original:
 * - Removed "¡Welcome to eCommerce!" heading (Spanish text)
 * - Replaced Semantic UI Card/Form with custom SmartCart auth card
 * - Added branded logo, "Create Your Account" title, subtitle
 * - Added link back to Login page
 * - All handler logic (handleChange1, handleChange2, handleSubmit, addUser) preserved exactly
 * - Redirect on successful registration preserved
 * - Removed unused Home import
 */
import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";

import Context from "../config/context";

export default function Signin() {
  const context = useContext(Context);
  const { user, addUser } = context;

  // SmartCart: State hooks — same variable names as original
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  // SmartCart: Handlers adapted for native input elements (same logic as original)
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

    // SmartCart: API call — same as original (POST /users/add)
    addUser(userData);
  };

  // SmartCart: If already logged in, redirect to home
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sc-auth-page">
      <div className="sc-auth-card">

        {/* SmartCart: Brand logo */}
        <div className="sc-auth-card__logo">🛒</div>

        {/* SmartCart: Title — replaces Spanish "¡Welcome to eCommerce!" */}
        <h1 className="sc-auth-card__title">Create Account</h1>
        <p className="sc-auth-card__subtitle">Join SmartCart and start shopping today</p>

        {/* SmartCart: Register form — custom styled inputs, preserves original submit logic */}
        <form onSubmit={handleSubmit}>

          <div className="sc-form-group">
            <label className="sc-form-label" htmlFor="signin-email">Email Address</label>
            <input
              id="signin-email"
              type="email"
              className="sc-form-input"
              placeholder="you@example.com"
              value={name.value || ""}
              onChange={handleChange1}
              required
            />
          </div>

          <div className="sc-form-group">
            <label className="sc-form-label" htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              type="password"
              className="sc-form-input"
              placeholder="Create a password"
              value={picture.value || ""}
              onChange={handleChange2}
              required
            />
          </div>

          {/* SmartCart: Submit button — replaces Semantic UI <Button color="teal" fluid> */}
          <button type="submit" className="sc-btn sc-btn--accent sc-btn--full" style={{ marginTop: "8px" }}>
            Create Account →
          </button>

        </form>

        {/* SmartCart: Link to login */}
        <div className="sc-auth-card__footer-link">
          Already have an account?{" "}
          <Link to="/login">Sign in here</Link>
        </div>

      </div>
    </div>
  );
}

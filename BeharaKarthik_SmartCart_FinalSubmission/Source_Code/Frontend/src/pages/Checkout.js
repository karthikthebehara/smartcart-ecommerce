import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Context from "../config/context";

export default function Checkout() {
  const context = useContext(Context);
  const { cart, user, createOrder } = context;
  const history = useHistory();

  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit / Debit Card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const totalPrice = cart
    .reduce((sum, item) => sum + parseFloat(item.price || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  const handleInputChange = e => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    const orderItems = cart.map(item => ({
      productName: item.name,
      productId: item.id,
      price: parseFloat(item.price),
      quantity: item.quantity || 1,
      picture: item.picture1
    }));

    const fullAddress = `${shipping.fullName}, ${shipping.address}, ${shipping.city} ${shipping.zipCode} (Phone: ${shipping.phone})`;

    const orderPayload = {
      username: user ? user.username : "Guest",
      totalAmount: parseFloat(totalPrice),
      status: "PENDING",
      shippingAddress: fullAddress,
      paymentMethod,
      orderItems
    };

    try {
      const order = await createOrder(orderPayload);
      setCompletedOrder(order);
    } catch (err) {
      console.error("Order creation failed", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completedOrder) {
    return (
      <div className="sc-page-container" style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🎉</div>
          <h1 style={{ color: "#3fb950", margin: "0 0 8px 0" }}>Order Placed Successfully!</h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem" }}>
            Order ID: <strong style={{ color: "#58a6ff" }}>#{completedOrder.id}</strong>
          </p>

          <div
            style={{
              backgroundColor: "#21262d",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "left",
              margin: "24px 0",
              border: "1px solid #30363d"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#8b949e" }}>Status:</span>
              <span style={{ color: "#f59e0b", fontWeight: "bold" }}>{completedOrder.status}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#8b949e" }}>Total Amount:</span>
              <span style={{ color: "#3fb950", fontWeight: "bold" }}>${completedOrder.totalAmount}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#8b949e" }}>Payment Method:</span>
              <span style={{ color: "#f0f6fc" }}>{completedOrder.paymentMethod}</span>
            </div>
            <div style={{ marginTop: "12px", borderTop: "1px solid #30363d", paddingTop: "12px" }}>
              <span style={{ color: "#8b949e", display: "block", marginBottom: "4px" }}>Shipping To:</span>
              <span style={{ color: "#c9d1d9" }}>{completedOrder.shippingAddress}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link to="/orders" className="sc-btn sc-btn--primary">
              View My Orders 📜
            </Link>
            <Link to="/products" className="sc-btn sc-btn--outline">
              Continue Shopping 🛍️
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="sc-page-container" style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Shopping Cart is Empty</h2>
        <p style={{ color: "#8b949e" }}>Please add items to your cart before proceeding to checkout.</p>
        <Link to="/products" className="sc-btn sc-btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="sc-page-container" style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#f0f6fc", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
        💳 Checkout
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "32px" }}>
        {/* Shipping & Payment Form */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: "#161b22", padding: "24px", borderRadius: "12px", border: "1px solid #30363d" }}>
          <h3 style={{ color: "#58a6ff", marginTop: 0 }}>1. Shipping Information</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <label style={{ display: "block", color: "#8b949e", marginBottom: "6px", fontSize: "0.9rem" }}>Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={shipping.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                style={{ width: "100%", padding: "10px", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", color: "#fff", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", color: "#8b949e", marginBottom: "6px", fontSize: "0.9rem" }}>Street Address</label>
              <input
                type="text"
                name="address"
                required
                value={shipping.address}
                onChange={handleInputChange}
                placeholder="123 Main St, Apt 4B"
                style={{ width: "100%", padding: "10px", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", color: "#fff", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ display: "block", color: "#8b949e", marginBottom: "6px", fontSize: "0.9rem" }}>City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={shipping.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", color: "#fff", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#8b949e", marginBottom: "6px", fontSize: "0.9rem" }}>ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={shipping.zipCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", color: "#fff", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", color: "#8b949e", marginBottom: "6px", fontSize: "0.9rem" }}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={shipping.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-1234"
                style={{ width: "100%", padding: "10px", backgroundColor: "#0d1117", border: "1px solid #30363d", borderRadius: "6px", color: "#fff", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <h3 style={{ color: "#58a6ff", marginTop: "28px" }}>2. Payment Method</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {["Credit / Debit Card", "Cash on Delivery (COD)", "UPI / NetBanking"].map(method => (
              <label
                key={method}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px",
                  backgroundColor: paymentMethod === method ? "#21262d" : "#0d1117",
                  border: `1px solid ${paymentMethod === method ? "#58a6ff" : "#30363d"}`,
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <span style={{ color: "#f0f6fc", fontWeight: paymentMethod === method ? "bold" : "normal" }}>{method}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="sc-btn sc-btn--primary"
            style={{ width: "100%", marginTop: "24px", padding: "14px", fontSize: "1.1rem" }}
          >
            {isSubmitting ? "Processing Order..." : `Complete Purchase ($${totalPrice})`}
          </button>
        </form>

        {/* Order Summary Box */}
        <div style={{ backgroundColor: "#161b22", padding: "24px", borderRadius: "12px", border: "1px solid #30363d", height: "fit-content" }}>
          <h3 style={{ color: "#f0f6fc", marginTop: 0, borderBottom: "1px solid #30363d", paddingBottom: "12px" }}>
            Order Summary
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "300px", overflowY: "auto" }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#f0f6fc", fontWeight: "500" }}>{item.name}</div>
                  <div style={{ color: "#8b949e", fontSize: "0.85rem" }}>Qty: {item.quantity || 1}</div>
                </div>
                <div style={{ color: "#3fb950", fontWeight: "bold" }}>
                  ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #30363d", marginTop: "16px", paddingTop: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#8b949e" }}>
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#8b949e" }}>
              <span>Shipping</span>
              <span style={{ color: "#3fb950" }}>FREE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #30363d", fontSize: "1.2rem", fontWeight: "bold" }}>
              <span style={{ color: "#f0f6fc" }}>Total</span>
              <span style={{ color: "#3fb950" }}>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

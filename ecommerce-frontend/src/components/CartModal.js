import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../config/context";

export default function CartModal() {
  const context = useContext(Context);
  const { cart, updateCartQty, removeFromCart, clearCart } = context;
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + parseFloat(item.price || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <>
      <button
        className="sc-btn sc-btn--outline sc-btn--sm"
        onClick={() => setIsOpen(true)}
        style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "6px" }}
      >
        <span role="img" aria-label="cart">🛒</span> Cart
        {totalItems > 0 && (
          <span
            style={{
              backgroundColor: "#f59e0b",
              color: "#0d1117",
              borderRadius: "12px",
              padding: "2px 7px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              marginLeft: "4px"
            }}
          >
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
            backdropFilter: "blur(4px)"
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              backgroundColor: "#161b22",
              color: "#c9d1d9",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-5px 0 25px rgba(0,0,0,0.5)",
              padding: "24px",
              boxSizing: "border-box"
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #30363d",
                paddingBottom: "16px",
                marginBottom: "20px"
              }}
            >
              <h2 style={{ margin: 0, color: "#58a6ff", display: "flex", alignItems: "center", gap: "8px" }}>
                <span role="img" aria-label="cart">🛒</span> Shopping Cart ({totalItems})
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#8b949e",
                  fontSize: "1.5rem",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: "60px", color: "#8b949e" }}>
                  <p style={{ fontSize: "3rem", margin: 0 }}><span role="img" aria-label="bags">🛍️</span></p>
                  <p style={{ fontSize: "1.1rem" }}>Your cart is empty.</p>
                  <p style={{ fontSize: "0.9rem" }}>Add products to start shopping!</p>
                </div>
              ) : (
                cart.map(item => {
                  const itemTotal = (parseFloat(item.price || 0) * (item.quantity || 1)).toFixed(2);
                  const img = item.picture1 || "https://via.placeholder.com/80/21262d/4d94f0?text=SmartCart";
                  return (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: "12px",
                        padding: "12px",
                        backgroundColor: "#21262d",
                        borderRadius: "8px",
                        marginBottom: "12px",
                        alignItems: "center",
                        border: "1px solid #30363d"
                      }}
                    >
                      <img
                        src={img}
                        alt={item.name}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "600", color: "#f0f6fc", fontSize: "0.95rem" }}>{item.name}</div>
                        <div style={{ color: "#f59e0b", fontSize: "0.85rem", marginTop: "2px" }}>
                          ${item.price} each
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity - 1)}
                            style={{
                              backgroundColor: "#30363d",
                              color: "#fff",
                              border: "none",
                              borderRadius: "4px",
                              width: "24px",
                              height: "24px",
                              cursor: "pointer"
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(item.id, item.quantity + 1)}
                            style={{
                              backgroundColor: "#30363d",
                              color: "#fff",
                              border: "none",
                              borderRadius: "4px",
                              width: "24px",
                              height: "24px",
                              cursor: "pointer"
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: "bold", color: "#3fb950" }}>${itemTotal}</div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#f85149",
                            cursor: "pointer",
                            fontSize: "0.8rem",
                            marginTop: "8px"
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            {cart.length > 0 && (
              <div
                style={{
                  borderTop: "1px solid #30363d",
                  paddingTop: "16px",
                  marginTop: "16px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ fontSize: "1.1rem" }}>Total:</span>
                  <span style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#3fb950" }}>${totalPrice}</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={clearCart}
                    className="sc-btn sc-btn--outline"
                    style={{ flex: 1, borderColor: "#f85149", color: "#f85149" }}
                  >
                    Clear Cart
                  </button>
                  <Link
                    to="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="sc-btn sc-btn--primary"
                    style={{ flex: 2, textAlign: "center" }}
                  >
                    Checkout <span role="img" aria-label="card">💳</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

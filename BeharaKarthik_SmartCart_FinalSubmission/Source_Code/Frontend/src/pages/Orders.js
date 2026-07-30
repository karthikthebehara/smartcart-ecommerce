import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../config/context";

export default function Orders() {
  const context = useContext(Context);
  const { user, userOrders, getUserOrders } = context;

  useEffect(() => {
    if (user && user.username) {
      getUserOrders(user.username);
    }
  }, [user]);

  const getStatusBadge = status => {
    switch (status) {
      case "DELIVERED":
        return { bg: "#238636", text: "Delivered 🟢" };
      case "SHIPPED":
        return { bg: "#8957e5", text: "Shipped 🚚" };
      case "PROCESSING":
        return { bg: "#1f6beb", text: "Processing ⚙️" };
      case "CANCELLED":
        return { bg: "#da3633", text: "Cancelled ❌" };
      default:
        return { bg: "#d29922", text: "Pending ⏳" };
    }
  };

  if (!user) {
    return (
      <div className="sc-page-container" style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Login Required</h2>
        <p style={{ color: "#8b949e" }}>Please log in to view your order history.</p>
        <Link to="/login" className="sc-btn sc-btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="sc-page-container" style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#f0f6fc", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
        📜 My Orders
      </h1>
      <p style={{ color: "#8b949e", marginBottom: "28px" }}>Track and view details of your past purchases.</p>

      {userOrders.length === 0 ? (
        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
            padding: "48px 20px",
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: "3rem", margin: 0 }}>📦</p>
          <h3 style={{ color: "#c9d1d9", marginTop: "12px" }}>No Orders Placed Yet</h3>
          <p style={{ color: "#8b949e" }}>Explore our catalog and place your first order!</p>
          <Link to="/products" className="sc-btn sc-btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
            Explore Products
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {userOrders.map(order => {
            const badge = getStatusBadge(order.status);
            return (
              <div
                key={order.id}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "12px",
                  padding: "20px",
                  overflow: "hidden"
                }}
              >
                {/* Header bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #30363d",
                    paddingBottom: "12px",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  <div>
                    <span style={{ color: "#58a6ff", fontWeight: "bold", fontSize: "1.1rem" }}>
                      Order #{order.id}
                    </span>
                    <span style={{ color: "#8b949e", fontSize: "0.85rem", marginLeft: "12px" }}>
                      Placed on {order.orderDate}
                    </span>
                  </div>

                  <span
                    style={{
                      backgroundColor: badge.bg,
                      color: "#ffffff",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "bold"
                    }}
                  >
                    {badge.text}
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {order.orderItems &&
                    order.orderItems.map(item => (
                      <div
                        key={item.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          backgroundColor: "#0d1117",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #21262d"
                        }}
                      >
                        <img
                          src={item.picture || "https://via.placeholder.com/50/21262d/4d94f0?text=Product"}
                          alt={item.productName}
                          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ color: "#f0f6fc", fontWeight: "600" }}>{item.productName}</div>
                          <div style={{ color: "#8b949e", fontSize: "0.85rem" }}>
                            Qty: {item.quantity} × ${item.price}
                          </div>
                        </div>
                        <div style={{ color: "#3fb950", fontWeight: "bold" }}>
                          ${(item.quantity * item.price).toFixed(2)}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Footer details */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                    borderTop: "1px solid #30363d",
                    paddingTop: "12px",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  <div style={{ color: "#8b949e", fontSize: "0.85rem" }}>
                    Payment: <strong style={{ color: "#c9d1d9" }}>{order.paymentMethod}</strong>
                  </div>
                  <div style={{ fontSize: "1.1rem" }}>
                    Total: <span style={{ color: "#3fb950", fontWeight: "bold" }}>${order.totalAmount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

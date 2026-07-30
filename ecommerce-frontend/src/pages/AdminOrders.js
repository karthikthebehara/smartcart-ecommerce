import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../config/context";

export default function AdminOrders() {
  const context = useContext(Context);
  const { user, allOrders, getAllOrders, updateOrderStatus } = context;
  const [updatingId, setUpdatingId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    if (user && user.admin) {
      getAllOrders();
    }
  }, [user]);

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdatingId(orderId);
    try {
      await updateOrderStatus(orderId, newStatus);
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Failed to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (!user || !user.admin) {
    return (
      <div className="sc-page-container" style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>Access Denied <span role="img" aria-label="lock">🔒</span></h2>
        <p style={{ color: "#8b949e" }}>You must be logged in as an Admin to view this page.</p>
        <Link to="/login" className="sc-btn sc-btn--primary" style={{ marginTop: "16px", display: "inline-block" }}>
          Log In as Admin
        </Link>
      </div>
    );
  }

  const filteredOrders = statusFilter === "ALL" 
    ? allOrders 
    : allOrders.filter(o => o.status === statusFilter);

  return (
    <div className="sc-page-container" style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ color: "#f0f6fc", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            <span role="img" aria-label="shield">🛡️</span> Admin Order Management
          </h1>
          <p style={{ color: "#8b949e", margin: "4px 0 0 0" }}>Manage customer orders and update shipping statuses.</p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["ALL", "PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`sc-btn sc-btn--sm ${statusFilter === status ? "sc-btn--primary" : "sc-btn--outline"}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div style={{ backgroundColor: "#161b22", padding: "40px", borderRadius: "12px", textAlign: "center", border: "1px solid #30363d" }}>
          <p style={{ color: "#8b949e" }}>No orders found for the selected filter.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredOrders.map(order => (
            <div
              key={order.id}
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "12px",
                padding: "20px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #30363d",
                  paddingBottom: "12px",
                  marginBottom: "14px",
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >
                <div>
                  <span style={{ color: "#58a6ff", fontWeight: "bold", fontSize: "1.1rem" }}>
                    Order #{order.id}
                  </span>
                  <span style={{ color: "#c9d1d9", fontSize: "0.9rem", marginLeft: "12px" }}>
                    Customer: <span role="img" aria-label="user">👤</span> <strong>{order.username}</strong>
                  </span>
                  <span style={{ color: "#8b949e", fontSize: "0.85rem", marginLeft: "12px" }}>
                    Date: {order.orderDate}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#8b949e", fontSize: "0.9rem" }}>Status:</span>
                  <select
                    value={order.status}
                    disabled={updatingId === order.id}
                    onChange={e => handleStatusChange(order.id, e.target.value)}
                    style={{
                      backgroundColor: "#0d1117",
                      color: "#f0f6fc",
                      border: "1px solid #30363d",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="PROCESSING">PROCESSING</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="DELIVERED">DELIVERED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>
              </div>

              {/* Order Items preview */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
                {order.orderItems &&
                  order.orderItems.map(item => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: "#0d1117",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        color: "#c9d1d9",
                        border: "1px solid #21262d"
                      }}
                    >
                      {item.productName} × {item.quantity} (${item.price})
                    </div>
                  ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", color: "#8b949e", fontSize: "0.85rem", borderTop: "1px solid #21262d", paddingTop: "10px" }}>
                <div>Address: <span style={{ color: "#c9d1d9" }}>{order.shippingAddress}</span></div>
                <div>Total: <span style={{ color: "#3fb950", fontWeight: "bold", fontSize: "1rem" }}>${order.totalAmount}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

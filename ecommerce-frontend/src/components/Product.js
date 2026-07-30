/* SmartCart: Product card component — redesigned
 * Changes from original:
 * - Removed hardcoded "Comida" category label (Spanish word for "Food")
 * - Replaced with dynamic category_id badge or "Product" fallback
 * - Replaced Semantic UI Card/Image/Label/Header/Grid with custom SmartCart CSS classes
 * - Added hover animation (handled by CSS sc-product-card)
 * - Improved image handling with a styled image wrapper
 * - Price now uses sc-product-card__price (amber highlight)
 * - "View Details" button triggers existing Detail modal — logic unchanged
 * - Fallback image replaced with themed placeholder
 * - Added admin delete button (🗑️ trash overlay, visible on card hover)
 */
import React, { useContext } from "react";

import Detail from "./Detail";
import Context from "../config/context";

export default function Product(props) {
  const context = useContext(Context);
  const { user, deleteProduct, addToCart } = context;

  // SmartCart: Fallback placeholder with brand color if no product image
  const pic = props.product.picture1
    ? props.product.picture1
    : "https://via.placeholder.com/400x220/21262d/4d94f0?text=SmartCart+Product";

  // SmartCart: Confirm + delete handler (admin only)
  const handleDelete = (e) => {
    e.stopPropagation(); // prevent card click bubbling
    if (window.confirm(`Delete "${props.product.name}"? This cannot be undone.`)) {
      deleteProduct(props.product.id);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(props.product);
  };

  return (
    <div className="sc-product-card">
      {/* SmartCart: Product image with hover zoom */}
      <div className="sc-product-card__img-wrap">
        <img src={pic} alt={props.product.name} />
        {/* SmartCart: Category badge — dynamic, replaces hardcoded "Comida" */}
        <span className="sc-product-card__category-badge">
          {props.product.category_id ? `Category #${props.product.category_id}` : "Product"}
        </span>
        {/* SmartCart: Admin-only delete button — fades in on card hover */}
        {user && user.admin && (
          <button
            className="sc-card__delete-btn"
            onClick={handleDelete}
            title="Delete product"
            aria-label={`Delete ${props.product.name}`}
          >
            <span role="img" aria-label="trash">🗑️</span>
          </button>
        )}
      </div>

      {/* SmartCart: Card body */}
      <div className="sc-product-card__body">
        <div className="sc-product-card__name">{props.product.name}</div>
        <div className="sc-product-card__desc">
          {props.product.description || "Quality product available on SmartCart."}
        </div>
        <div className="sc-product-card__footer" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between" }}>
          {/* SmartCart: Amber price badge */}
          <span className="sc-product-card__price">${props.product.price}</span>
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              className="sc-btn sc-btn--outline sc-btn--sm"
              onClick={handleAddToCart}
              title="Add to cart"
            >
              <span role="img" aria-label="cart">🛒</span> Add
            </button>
            {user && <Detail product={props.product} />}
          </div>
        </div>
      </div>
    </div>
  );
}


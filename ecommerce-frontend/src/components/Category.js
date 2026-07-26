/* SmartCart: Category card component — redesigned
 * Changes from original:
 * - Replaced Semantic UI Card/Image/Label with custom SmartCart CSS classes
 * - Added hover animation (handled by CSS sc-category-card)
 * - Improved image wrapper with hover scale effect
 * - Branded fallback placeholder image
 * - All data props preserved (category.name, category.picture)
 * - Added admin delete button (🗑️ trash overlay, visible on card hover)
 */
import React, { useContext } from "react";
import Context from "../config/context";

export default function Category(props) {
  const context = useContext(Context);
  const { user, deleteCategory } = context;

  // SmartCart: Themed placeholder if no category image provided
  const pic = props.category.picture
    ? props.category.picture
    : "https://via.placeholder.com/400x180/21262d/4d94f0?text=Category";

  // SmartCart: Confirm + delete handler (admin only)
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Delete category "${props.category.name}"? This cannot be undone.`)) {
      deleteCategory(props.category.id);
    }
  };

  return (
    <div className="sc-category-card">
      {/* SmartCart: Category image with hover zoom effect */}
      <div className="sc-category-card__img-wrap" style={{ position: "relative" }}>
        <img src={pic} alt={props.category.name} />
        {/* SmartCart: Admin-only delete button — fades in on card hover */}
        {user && user.admin && (
          <button
            className="sc-card__delete-btn"
            onClick={handleDelete}
            title="Delete category"
            aria-label={`Delete ${props.category.name}`}
          >
            🗑️
          </button>
        )}
      </div>
      {/* SmartCart: Category name */}
      <div className="sc-category-card__name">
        📦 {props.category.name}
      </div>
    </div>
  );
}

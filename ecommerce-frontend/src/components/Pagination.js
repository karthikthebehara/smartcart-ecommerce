/* SmartCart: Pagination component — improved styling
 * Changes from original:
 * - Replaced Semantic UI Button.Group with custom sc-pagination__btn CSS class
 * - Same pagination logic and props (cardsPerPage, totalCards, paginate) preserved
 */
import React from "react";

export default function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  // SmartCart: Page number generation — same logic as original
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    /* SmartCart: Styled pagination buttons */
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="sc-pagination__btn"
        >
          {number}
        </button>
      ))}
    </div>
  );
}

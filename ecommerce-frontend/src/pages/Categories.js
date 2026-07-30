/* SmartCart: Categories page — improved layout and branding
 * Changes from original:
 * - Replaced Semantic UI Segment/Grid page header with SmartCart sc-page-header
 * - Replaced Semantic UI Card.Group with custom sc-cards-grid (CSS Grid)
 * - Updated heading "Recent Categories" → "Shop by Category"
 * - Improved empty state with sc-empty-state styled block
 * - Pagination now uses sc-pagination wrapper
 * - Admin AddCategoryForm button preserved — no logic changes
 * - All context hooks (user, categories, getCategories) preserved
 * - All pagination logic preserved exactly
 */
import React, { useContext, useState, useEffect } from "react";

import Category from "../components/Category";
import Pagination from "../components/Pagination";
import AddCategoryForm from "../components/AddCategoryForm";

import Context from "../config/context";

export default function Categories() {
  const context = useContext(Context);
  const { user, categories, getCategories } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  // SmartCart: Load all categories on mount — same as original
  useEffect(() => {
    getCategories();
  }, []);

  // SmartCart: Pagination slicing — same logic as original
  const indexOfLastCategory = currentPage * cardsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - cardsPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  // SmartCart: Render category cards or empty state
  const views =
    categories.length > 0 ? (
      currentCategories.map(category => (
        <Category key={category.id} category={category} />
      ))
    ) : (
      /* SmartCart: Styled empty state — replaces plain Card with "Nothing here!" */
      <div className="sc-empty-state" style={{ gridColumn: "1 / -1" }}>
        <div className="sc-empty-state__icon"><span role="img" aria-label="package">📦</span></div>
        <p className="sc-empty-state__text">No categories yet. Check back soon!</p>
      </div>
    );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // SmartCart: Pagination component shown only when needed — same condition as original
  const pagination =
    categories.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={categories.length}
        paginate={paginate}
      />
    ) : null;

  // SmartCart: Admin AddCategoryForm — same condition as original
  const add = user ? (user.admin ? <AddCategoryForm /> : null) : null;

  return (
    <div>
      {/* SmartCart: Styled page header with category count */}
      <div className="sc-page-header">
        <div className="sc-page-header__inner">
          <h1 className="sc-page-header__title">
            <span role="img" aria-label="package">📦</span> Shop by Category
            <span className="sc-page-header__count">{categories.length} categories</span>
          </h1>
          {/* SmartCart: Admin add button preserved */}
          {add}
        </div>
      </div>

      {/* SmartCart: CSS Grid card layout — replaces Semantic UI Card.Group */}
      <div className="sc-page-wrapper">
        <div className="sc-cards-grid">
          {views}
        </div>

        {/* SmartCart: Pagination */}
        {pagination && (
          <div className="sc-pagination">
            {pagination}
          </div>
        )}
      </div>
    </div>
  );
}

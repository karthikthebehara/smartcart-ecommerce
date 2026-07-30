import React, { useContext, useState, useEffect } from "react";

import Product from "../components/Product";
import Pagination from "../components/Pagination";
import AddProductForm from "../components/AddProductForm";

import Context from "../config/context";

export default function Products() {
  const context = useContext(Context);
  const { user, products, getProducts, searchQuery } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("DEFAULT");

  // SmartCart: Load all products on mount — same as original
  useEffect(() => {
    getProducts();
  }, []);

  // Filter products by searchQuery
  const filteredProducts = products.filter(product => {
    if (!searchQuery || searchQuery.trim() === "") return true;
    const query = searchQuery.toLowerCase();
    const nameMatch = product.name && product.name.toLowerCase().includes(query);
    const descMatch = product.description && product.description.toLowerCase().includes(query);
    return nameMatch || descMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "PRICE_LOW_HIGH") {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    if (sortBy === "PRICE_HIGH_LOW") {
      return parseFloat(b.price) - parseFloat(a.price);
    }
    if (sortBy === "NAME_AZ") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Pagination slicing
  const indexOfLastProduct = currentPage * cardsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - cardsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const views =
    sortedProducts.length > 0 ? (
      currentProducts.map(product => (
        <Product key={product.id} product={product} />
      ))
    ) : (
      <div className="sc-empty-state" style={{ gridColumn: "1 / -1" }}>
        <div className="sc-empty-state__icon"><span role="img" aria-label="search">🔍</span></div>
        <p className="sc-empty-state__text">
          {searchQuery ? `No products matching "${searchQuery}"` : "No products found."}
        </p>
      </div>
    );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pagination =
    sortedProducts.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={sortedProducts.length}
        paginate={paginate}
      />
    ) : null;

  const add = user ? (user.admin ? <AddProductForm /> : null) : null;

  return (
    <div>
      {/* SmartCart: Styled page header */}
      <div className="sc-page-header">
        <div className="sc-page-header__inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 className="sc-page-header__title" style={{ margin: 0 }}>
              <span role="img" aria-label="tag">🏷️</span> Our Products
              <span className="sc-page-header__count">{sortedProducts.length} items</span>
            </h1>
            {searchQuery && (
              <div style={{ color: "#58a6ff", fontSize: "0.9rem", marginTop: "4px" }}>
                Filter: "{searchQuery}"
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Sort Dropdown */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#8b949e", fontSize: "0.85rem" }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  backgroundColor: "#0d1117",
                  color: "#f0f6fc",
                  border: "1px solid #30363d",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                <option value="DEFAULT">Featured</option>
                <option value="PRICE_LOW_HIGH">Price: Low to High</option>
                <option value="PRICE_HIGH_LOW">Price: High to Low</option>
                <option value="NAME_AZ">Name: A to Z</option>
              </select>
            </div>

            {add}
          </div>
        </div>
      </div>

      <div className="sc-page-wrapper">
        <div className="sc-cards-grid">
          {views}
        </div>

        {pagination && (
          <div className="sc-pagination">
            {pagination}
          </div>
        )}
      </div>
    </div>
  );
}


import React from "react";
import "./scss/styles.scss";

const Filter: React.FC = () => {
  return (
    <div className="filter-section">
      <form className="form">
        <input
          type="text"
          placeholder="search here..."
          className="search-bar"
        />
        <button className="search-btn">Search</button>
      </form>
      {/* filters section */}
      <div className="filters-sect">
        <span className="label">Sort By:</span>
        {/* category filter */}
        <div className="filter-container">
          <span className="select-label">Category</span>
          <select className="filter">
            <option value="default">Default</option>
            <option value="low">low-high</option>
            <option value="high">high-low</option>
          </select>
        </div>
        {/* category filter */}
        <div className="filter-container">
          <span className="select-label">Category</span>
          <select className="filter">
            <option value="default">Default</option>
            <option value="low">low-high</option>
            <option value="high">high-low</option>
          </select>
        </div>

        {/* order filter */}
        <div className="filter-container">
          <span className="select-label">Order</span>
          <select className="filter">
            <option value="default">Default</option>
            <option value="shirt">Shirt</option>
            <option value="bracelet">Bracelet</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

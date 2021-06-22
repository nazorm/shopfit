import React from "react";
import './styles.scss';
import { IFilterProps } from "../types";

const Filter = ({
  handleSearchChange,
  handleCategoryChange,
  handleOrderChange,
  handleSearch,
}: IFilterProps) => {
  return (
    <div className="filter-section">
      <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search name..."
          className="search-bar"
          onChange={handleSearchChange}
        />
        <button className="search-btn">Search</button>
      </form>
      {/* filters section */}
      <div className="filters-sect">
        <span className="label">Sort By:</span>
        {/* category filter */}
        <div className="filter-container">
          <span className="select-label">Category</span>
          <select className="filter" onChange={handleCategoryChange}>
            <option value="default">Default</option>
            <option value="men">Men</option>
            <option value="bracelet">Bracelet</option>
          </select>
        </div>
        {/* order filter */}
        <div className="filter-container">
          <span className="select-label">Order</span>
          <select className="filter" onChange={handleOrderChange}>
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
            <option value="men">Men</option>
            <option value="bracelet">Bracelet</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

import React from "react";

function Sort({ sortBy, setSortBy }) {
  return (
    <>
      <label htmlFor="sort-menu">Sort by:</label>
      <select
        name="sort-menu"
        id="sort-menu"
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
      >
        <option value="none">--Please choose an option--</option>
        <option value="location">Location</option>
      </select>
    </>
  );
}

export default Sort;

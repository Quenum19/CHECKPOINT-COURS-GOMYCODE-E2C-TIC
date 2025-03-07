import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;

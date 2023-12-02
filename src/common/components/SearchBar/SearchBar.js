import React from "react";

export const SearchBar = () => {
  return (
    <form className="form-inline my-2 my-lg-0 search-bar">
      <div className="col-9 col-md-11 col-lg-12 px-0">
        <input
          className="form-control mr-sm-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
